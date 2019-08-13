import mongoose, { Schema, Document } from "mongoose"

export interface IAccount extends Document {
    name: string
}

const AccountSchema = new Schema<IAccount>({
    name: { type: String, required: true }
})

export default mongoose.model<IAccount>('account', AccountSchema)