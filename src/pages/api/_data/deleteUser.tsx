import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { connectToDataBase } from "../_connectDatabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = await req.body
  const session = await getSession({req})
  
  const db = await connectToDataBase(process.env.MONGODB_URI)
  const collection = db.collection('data')
  const document = await collection.findOne({name: user.name})

  if (session) {
    if (document) {
      await collection.findOneAndDelete({name: user.name})
      res.status(201)
    } else {
      res.status(204)
    }
  } else {
    res.status(401)
  }

  return res.end()
}