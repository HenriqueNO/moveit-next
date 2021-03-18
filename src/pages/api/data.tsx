import { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from './_connectDatabase'

interface data {
    name: Required<string>,
    image: Required<string>,
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    totalExperience: number,
}

export default async (req: NextApiRequest, res : NextApiResponse) => {
    const { name, image, level, currentExperience, challengesCompleted, totalExperience } : data = req.body

    const db = await connectToDataBase(process.env.MONGODB_URI)
    const collection = db.collection('data')
    const document = await collection.findOne({name: name})

    if(!document) {
        await collection.insertOne({
            name: name,
            image: image,
            level: level ?? 0,
            currentExperience: currentExperience ?? 0,
            challengesCompleted: challengesCompleted ?? 0,
            totalExperience: totalExperience ?? 0

        })
    } else if (document) {
        await db.collection('data').findOneAndUpdate({name: name}, {$set: {
            level: level,
            currentExperience: currentExperience,
            challengesCompleted: challengesCompleted,
            totalExperience: totalExperience,
        }})
    }
    return res.status(201)
}