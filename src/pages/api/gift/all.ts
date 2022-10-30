import { NextApiRequest, NextApiResponse } from "next";
import { Gift } from "../../../models/Gift";

export default async function getAllGifts(req: NextApiRequest, res: NextApiResponse) {
    const gifts = await Gift.find()
    return res.status(200).json(gifts)
}
