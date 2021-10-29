import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
        return res.status(400).json({error: 1, message: 'Email ya registrado'})
    }
    
    const user: IUser = new User({
        email,
        password, 
    });

    try {
        user.password = await user.encrypPassword(password);
        const savedUser = await user.save();
        const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'asd1234');
        const response  = {
            token,
            ...savedUser
        }
        res.send({ error: null, data: response });
    } catch (error) {
        res.status(400).json({error});
    }
};

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 1, message: 'Email or password is wrong' });

    const correctPass = await user.validatePassword(password, user.password);
    if(!correctPass) return res.status(400).json({ error: 2, message: 'Invalid password' });

    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'asd1234', {
        expiresIn: 60 * 60 * 24,
    });

    res.json({error: null, data: { token, ...user }});
};

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({error: 1, message: 'User not found.'});
    res.json(user);
};