import { signOut } from 'next-auth/client'
import { getURL } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/router'
import { useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/MenuAside.module.css'

export function MenuAside() {
    const currentUrl = getURL()
    const router = useRouter()
    const { isDark, toggleTheme } = useContext(ThemeContext)

    return (
            <header className={styles.container}>
                <button 
                    type="button"
                    onClick={(): Promise<void> => signOut({callbackUrl: 'http://localhost:3000'})}
                >
                    <img src="/icons/close.svg" alt="fechar"/>
                </button>

                <button
                    type='button'
                    className={styles.buttonHome}
                    onClick={() => router.push('/Home')}
                    style={currentUrl === '/Home' ? {borderLeft: '4px solid var(--blue-dark)'}: {}}
                >
                    {
                        currentUrl === '/Home' ? 
                        <img src="/icons/home-true.svg" alt="home"/> : 
                        <img src="/icons/home-false.svg" alt="home"/>
                    }
                </button>

                <button
                    type='button' 
                    className={styles.buttonLeaderBoard}
                    onClick={() => router.push('/Leaderboard')}
                    style={currentUrl === '/Leaderboard' ? {borderLeft: '4px solid var(--blue-dark)'} : {}}
                >
                    {
                        currentUrl === '/Leaderboard' ?
                        <img src="/icons/leaderboard-true.svg" alt="home"/> :
                        <img src="/icons/leaderboard-false.svg" alt="home"/>
                    }
                </button>

                <button
                    type='button'
                    className="buttonSwitchTheme"
                    onClick={toggleTheme}
                >
                    {
                        isDark ?
                        <img src="/icons/moon.svg" alt="lua"/> :
                        <img src="/icons/sun.svg" alt="Sol"/>
                    }
                </button>
            </header>
    )
}