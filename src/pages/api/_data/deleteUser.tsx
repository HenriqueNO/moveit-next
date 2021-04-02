import { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../_connectDatabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = await req.body
  
  const db = await connectToDataBase(process.env.MONGODB_URI)
  const collection = db.collection('data')
  const document = await collection.findOne({name: user.name})

  if (document) {
    await collection.findOneAndDelete({name: user.name})
    res.status(201)
  } else {
    res.status(204)
  }
  return res.end()
}