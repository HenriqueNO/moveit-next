import { MenuAside } from "../components/MenuAside"

import styles from '../styles/components/Leaderboard.module.css'

export default function Leaderboard() {
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