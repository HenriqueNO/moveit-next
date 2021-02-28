import { useRouter } from 'next/router'
import styles from '../styles/components/MenuAside.module.css'

export function MenuAside() {
    const router = useRouter()

    function GoHome() {
        router.push('/Home')
    }
    function GoLeaderboard() {
        router.push('/Leaderboard')
    }

    return (
        <header className={styles.container}>
            <button type="button"><img src="/icons/close.svg" alt="fechar"/></button>
            <button type='button' className={styles.buttonHome} onClick={GoHome}><img src="/icons/home.svg" alt="home"/></button>
            <button type='button' className={styles.buttonLeaderboard} onClick={GoLeaderboard}><img src="/icons/ranking.svg" alt="leaderboard"/></button>
            <button type='button'><img src="/icons/sun.svg" alt="Sol"/></button>
        </header>
    )
}