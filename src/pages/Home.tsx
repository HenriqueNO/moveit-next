import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { MenuAside } from '../components/MenuAside';
import { getSession, useSession } from 'next-auth/client';
import { NotLoggedModal } from '../components/NotLoggedModal';
import { connectToDataBase } from './api/_connectDatabase';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  totalExperience: number,
  lastTheme: string,
}

export default function Home(props: HomeProps) {
  const [ session, loading ] = useSession()

  
  if(loading) {
    return <h1>carregando...</h1>
  }

  if (session) {
    return (
      <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
      totalExperience={props.totalExperience}
      user={session.user}
      >
        <Head>
          <title>Inicio | PLB</title>
        </Head>
        <MenuAside />
        <div className={styles.containerContent}> 
          
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <CountDown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    )
  }
  else if (!session) {
    return <NotLoggedModal />
  }
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const { lastTheme } = ctx.req.cookies
  const db = await connectToDataBase(process.env.MONGODB_URI)
  const collection = db.collection('data')

  if(!await collection.findOne({name: session.user.name})) {
    await collection.insertOne({
      name: session.user.name,
      image: session.user.image,
    })
  }
  
  const data = (await collection.findOne({name: session.user.name}, { projection: {_id: 0, email: 0}}))
  const properties = JSON.parse(JSON.stringify(data))
  
  
  ctx.res.setHeader('Cache-Control', 's-manage=10, stale-while-revalidate')
  return{
    props: {
      level: Number(properties.level ?? 0),
      currentExperience: Number(properties.currentExperience ?? 0),
      challengesCompleted: Number(properties.challengesCompleted ?? 0),
      totalExperience: Number(properties.totalExperience ?? 0),
      lastTheme: lastTheme ?? 'normal',
    }
  }
}