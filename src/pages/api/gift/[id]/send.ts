import { NextApiRequest, NextApiResponse } from "next";
import { Gift } from "../../../../models/Gift";

export default async function sendGift(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const updatedGift = await Gift.findByIdAndUpdate(id, {
        $set: {
            available: false
        }
    })

    if (updatedGift) {
        return res.status(200).send("Gift received.")
    }

    return res.status(404).send("Gift not found.")
}
