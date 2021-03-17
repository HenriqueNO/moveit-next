import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

export async function connectToDataBase(uri: string) {
    if (cachedDb) {
        return cachedDb
    }
    
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = client.db(process.env.CLIENT_DB)
    cachedDb = db

    return db
}