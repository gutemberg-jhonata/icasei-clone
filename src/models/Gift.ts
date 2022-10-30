import mongoose, { Model } from "mongoose"
import "../server/mongoose"

type GiftType = {
    title: string,
    price: number,
    imageBase64: string,
    description: string
}

const giftSchema = new mongoose.Schema<GiftType>({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    },
    description: String
})

export const Gift = mongoose.models.Gift as Model<GiftType> || mongoose.model('Gift', giftSchema)
