import { GetStaticProps } from "next"
import { useSession } from "next-auth/client"
import Head from "next/head"
import { MenuAside } from "../components/MenuAside"
import { NotLoggedModal } from "../components/NotLoggedModal"
import { RenderLeaderborad } from "../components/RenderLeaderboard"

import styles from '../styles/pages/Leaderboard.module.css'
import { connectToDataBase } from "./api/_connectDatabase"

interface leaderBoardProps {
  properties: {
    name: string,
    image: string,
    challengesCompleted: string,
    currentExperience: string,
    totalExperience: string,
    map: Function,
    }
}

export default function Leaderboard(props: leaderBoardProps) {
  const [ session, loading ] = useSession()

  if(loading) {
    return <h1>carregando...</h1>
  }

if(session) {
  return(
    <div>
      <Head>
        <title>Leaderboard | PBL</title>
      </Head>
      <MenuAside />
      <div className={styles.container}>
        <h1>Leaderboard</h1>

        <div className={styles.leaderBoardContainer}>
          <div className={styles.tableIndex}> 
            <label className={styles.position}>Posição</label>
            <div>
              <label >Usuario</label>
              <label className={styles.nChallenges}>Desafios Completos</label>
              <label className={styles.experience}>Experiência</label>
            </div>
          </div>
        <RenderLeaderborad props={props.properties} />
        </div>
      </div>
    </div>
  )
}
return <NotLoggedModal />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const db = await connectToDataBase(process.env.MONGODB_URI)

  const data = (
    await db.collection('data')
    .find({ }, { projection: {_id: 0, email: 0}})
    .sort({totalExperience: -1, level: -1, challengesCompleted: -1, })
    .toArray()
  )

  const properties = JSON.parse(JSON.stringify(data))

  return{
    props: {
      properties : properties
    },
    revalidate: 30,
  }
}