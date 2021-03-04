import { useSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/components/MenuAside.module.css'

export function MenuAside() {
    const [ session, loading ] = useSession()
    const router = useRouter()
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    function GoHome() {
        router.push('/Home')
    }
    function GoLeaderboard() {
        router.push('/Leaderboard')
    }

    function switchTheme() {
        !isDarkTheme ? setIsDarkTheme(true) : setIsDarkTheme(false)
        console.log(isDarkTheme)
    }

    return (
        <header className={styles.container}>
            <button type="button" onClick={(): Promise<void> => signOut({callbackUrl: 'http://localhost:3000'})}><img src="/icons/close.svg" alt="fechar"/></button>
            <button type='button' className={styles.buttonHome} onClick={GoHome}><img src="/icons/home-true.svg" alt="home"/></button>
            <button type='button' className={styles.buttonLeaderBoard} onClick={GoLeaderboard}><img src="/icons/ranking-false.svg" alt="leaderboard"/></button>
            <button type='button' className="buttonSwitchTheme" onClick={switchTheme}><img src="/icons/sun.svg" alt="Sol"/></button>
        </header>
    )
}