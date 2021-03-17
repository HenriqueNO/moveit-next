import { NextApiRequest, NextApiResponse } from 'next-auth/_utils'
import { connectToDataBase } from './_connectDatabase'

export default async (req : NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDataBase(process.env.MONGODB_URI)

  const data = await db.collection('data').find({ }, { projection: {_id: 0, email: 0, image: 0}}).toArray()

  res.setHeader('Cache-Control', 's-manage=10, stale-while-revalidate')
  return res.json(data)
}
