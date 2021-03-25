import { signOut } from 'next-auth/client'
import { getURL } from 'next/dist/next-server/lib/utils'
import { useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/MenuAside.module.css'
import Link from 'next/link'

export function MenuAside() {
    const currentUrl = getURL()
    const { isDark, toggleTheme } = useContext(ThemeContext)

    return (
            <header className={styles.container}>

                <Link href='/'>
                <button 
                    type="button"
                    onClick={(): Promise<void> => signOut({callbackUrl: 'http://localhost:3000'})}
                >
                    <img src="/icons/close.svg" alt="logout"/>
                </button>
                </Link>
                

                <button
                    type='button'
                    className={styles.buttonHome}
                    style={currentUrl === '/Home' ? {borderLeft: '4px solid var(--blue-dark)'}: {}}
                    
                >
                    {
                        currentUrl === '/Home' ? 
                        <img src="/icons/home-true.svg" alt="home"/> : (
                            <Link href={'/Home'}> 
                            <img src="/icons/home-false.svg" alt="home" width="32" height="32"/>
                            </Link>
                        )
                    }
                </button>


               
                <button
                    type='button' 
                    className={styles.buttonLeaderboard}
                    style={currentUrl === '/Leaderboard' ? {borderLeft: '4px solid var(--blue-dark)'} : {}}
                >
                    {
                        currentUrl === '/Leaderboard' ?
                        <img src="/icons/leaderboard-true.svg" alt="home"/> :( 
                            <Link href={"/Leaderboard"}>
                                <img src="/icons/leaderboard-false.svg" alt="home" width="32" height="32"/>
                            </Link>
                        )
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