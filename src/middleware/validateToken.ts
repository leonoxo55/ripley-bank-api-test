import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'asd123') as IPayload;
        req.userId = payload._id;
        next();
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

