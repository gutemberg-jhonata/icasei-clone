import { NextApiRequest, NextApiResponse } from "next";
import { Gift } from "../../../models/Gift";

export default async function createGift(req: NextApiRequest, res: NextApiResponse) {
    const payload = req.body
    
    const gift = new Gift(payload)
    await gift.save()
    
    return res.status(201).send("Resource created.")
}
