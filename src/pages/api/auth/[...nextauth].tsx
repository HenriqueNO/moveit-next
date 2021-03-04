import { NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest } from 'next-auth/_utils'

const options = {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    ],
      
    database: process.env.DATABASE_URL,
}

export default (req: NextApiRequest , res: NextApiResponse) => NextAuth(req, res, options)