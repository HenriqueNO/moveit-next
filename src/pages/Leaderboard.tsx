import { useSession } from "next-auth/client"
import Head from "next/head"
import { MenuAside } from "../components/MenuAside"
import { NotLoggedModal } from "../components/NotLoggedModal"

import styles from '../styles/pages/Leaderboard.module.css'

export default function Leaderboard() {
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
                        <label className={styles.position}>Posição</label>
                        <label className={styles.user}>Usuario</label>
                        <label className={styles.nChallenges}>Desafios</label>
                        <label className={styles.experence}>Experiência</label>
                    </div>
                </div>
                </div>
        )
    }
    return <NotLoggedModal />
}