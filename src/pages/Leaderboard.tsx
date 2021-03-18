import { GetStaticProps } from "next"
import { useSession } from "next-auth/client"
import Head from "next/head"
import { MenuAside } from "../components/MenuAside"
import { NotLoggedModal } from "../components/NotLoggedModal"

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
        <title>Leaderboard | PLB</title>
      </Head>
      <MenuAside />
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        <div className={styles.leaderBoardContainer}>
          <div className={styles.tableIndex}> 
            <label className={styles.position}>Posição</label>
            <label >Usuario</label>
            <label className={styles.nChallenges}>Desafios</label>
            <label className={styles.experience}>Experiência</label>
          </div>
          {props.properties.map((e, i : number) => {
            while( i < 6) {
              return (
                <div key={i} className={styles.tableDataContainer}>
                  <div className={styles.tableDataUser}>
                    <div>
                    <p>{i + 1}</p>
                    </div>
                    <div className={styles.user}>
                      <div>
                        <img src={e.image} alt="foto perfil" width="64"/>
                        <div>
                          <strong>{e.name}</strong>
                          <p>
                            <img src="/icons/level.svg" alt="level"/> Level {e.level}
                          </p>
                        </div>
                      </div>
                      <p>{e.challengesCompleted}</p>
                      <p>{e.totalExperience}</p>
                    </div>
                  </div>
                </div>
              )}
          })}
        </div>
      </div>
    </div>
  )
}
return <NotLoggedModal />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const db = await connectToDataBase(process.env.MONGODB_URI)

  const data = (await db.collection('data').find({ }, { projection: {_id: 0, currentExperience: 0}}).toArray()).sort()

  const properties = JSON.parse(JSON.stringify(data))

  return{
    props: {
      properties : properties
    },
    revalidate: 30,
  }
}