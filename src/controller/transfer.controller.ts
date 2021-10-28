import { Request, Response } from 'express';
import Transfer, { ITransfer } from '../models/Transfer';

export const transfer = async (req: Request, res: Response) => {
    const {
        name,
        rut,
        bank,
        accountType,
        amount,
        userId,
        recipientId,
    } = req.body;

    const tranfer: ITransfer = new Transfer({
        name,
        rut,
        bank,
        accountType,
        amount,
        userId,
        recipientId
    });

    try {
        await tranfer.save();
        res.send({ error: null, data: tranfer });
    } catch(error: any) {
        console.error(error.message);
        res.status(400).json({error: 1, message: 'Insert data error.'});
    }
}

export const getTransferHistory = async (req: Request, res: Response) => {
    const { userId } = req.body;
    
    try {
        const data = await Transfer.find({ userId })
        res.send({ error: null, data });
    } catch(error: any) {
        console.error(error.message);
        res.status(400).json({error: 1, message: 'Error getting data.'});
    }
}