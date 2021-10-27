import { Request, Response } from 'express';
import Recipient, { IRecipient } from '../models/Recipient';

export const createRecipient = async (req: Request, res: Response) => {
    const {
        name,
        rut,
        email,
        phone,
        bank,
        account,
        accountType,
        userId,
    } = req.body;

    const recipient: IRecipient = new Recipient({
        name,
        rut,
        email,
        phone,
        bank,
        account,
        accountType,
        userId,
    });

    try {
        await recipient.save();
        res.send({ error: null, data: recipient });

    } catch(error) {
        res.status(400).json({error: 1, message: 'Insert data error'});
    }

}

export const getAllRecipients = async (req: Request, res: Response) => {
    const { userId } = req.body;

    try {
        let recipients;
        if(userId) {
            recipients = await Recipient.find({userId});
        } else {
            recipients = await Recipient.find({});
        }
        res.send({ error: null, data: recipients });
    } catch(error) {
        res.status(400).json({error: 1, message: 'Insert data error'});
    }
}

