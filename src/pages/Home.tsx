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
import { useSession } from 'next-auth/client';
import { NotLoggedModal } from '../components/NotLoggedModal';

interface HomeProps {
  myLevel: number,
  currentExperience: number,
  challengesCompleted: number
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
        myLevel={props.myLevel} 
        currentExperience={props.currentExperience} 
        challengesCompleted={props.challengesCompleted}
      >
        <MenuAside />
        <div className={styles.containerContent}> 
          <Head>
            <title>Inicio | PLB</title>
          </Head>
          
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
  return <NotLoggedModal />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { myLevel, currentExperience, challengesCompleted, lastTheme} = ctx.req.cookies;

  return {
    props: {
      myLevel: Number(myLevel ?? 0),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
      lastTheme: lastTheme ?? 'normal',
    }
  }
}