import Account from '../models/Account';
import { Request, Response } from 'express';

export const getAllAccounts = async (req: Request, res: Response) => {
    try {
        const accounts = await Account.find({});
        res.send({ error: null, data: accounts });
    } catch(error) {
        res.status(400).json({error: 1, message: 'Error getting accounts.'});

    }
}