import { useSession } from "next-auth/client"
import { MenuAside } from "../components/MenuAside"
import { ReturnToIndexProvider } from "../contexts/ReturnToIndexContext"

import styles from '../styles/components/Leaderboard.module.css'

export default function Leaderboard() {
    const [ session, loading ] = useSession()

    function returnIndex() {

    }
    
    if(session) {
        return(
            <div>
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
    return <div onLoad={returnIndex}></div>
}