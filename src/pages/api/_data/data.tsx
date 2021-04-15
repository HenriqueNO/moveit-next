import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { connectToDataBase } from '../_connectDatabase'

interface data {
    name: Required<string>,
    image: Required<string>,
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    totalExperience: number,
}

export default async (req: NextApiRequest, res : NextApiResponse) => {
    const { name, image, level, currentExperience, challengesCompleted, totalExperience } : data = await req.body
    const session = await getSession({req})

    const db = await connectToDataBase(process.env.MONGODB_URI)
    const collection = db.collection('data')
    const document = await collection.findOne({name: name})

    if (session) {
        if (document) {
            await collection.findOneAndUpdate({name: name}, {$set: {
                level: level,
                currentExperience: currentExperience,
                challengesCompleted: challengesCompleted,
                totalExperience: totalExperience,
            }})
            res.status(201)
        } else {
            res.status(204)
        }
    } else {
        res.status(401)
    }

   return res.end()
}