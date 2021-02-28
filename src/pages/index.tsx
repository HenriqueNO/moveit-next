import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';


import styles from '../styles/components/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { MenuAside } from '../components/MenuAside';

interface HomeProps {
  myLevel: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider myLevel={props.myLevel} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <MenuAside />

        <div className={styles.containerContent}>
          <Head>
            <title>Inicio | Movie.IT</title>
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
    </div>
  </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { myLevel, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      myLevel: Number(myLevel ?? 0),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    }
  }
}