import mongoose, { Schema, Document } from "mongoose"

export interface IAccount extends Document {
    username: string,
    password: string
}

const AccountSchema = new Schema<IAccount>({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

export default mongoose.model<IAccount>('account', AccountSchema)