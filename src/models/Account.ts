import { Schema, model, Document } from 'mongoose'

export interface IAccount extends Document {
    name: string;
    value: string;
};

const accountSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    value: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
}, {
    timestamps: true
});


export default model<IAccount>('Account', accountSchema);