import { Schema, model, Document } from 'mongoose'

export interface IRecipient extends Document {
    name: string;
    rut: string;
    email: string;
    phone: string;
    bank: string;
    account: number;
    accountType: string;
    userId: string;
};

const recipientSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    rut: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        lowercase: true
    },
    bank: {
        type: String,
        required: true,
        lowercase: true
    },
    account: {
        type: Number,
        required: true,
        lowercase: true
    },
    accountType: {
        type: String,
        required: true,
        lowercase: true
    },
    userId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});


export default model<IRecipient>('Recipient', recipientSchema);