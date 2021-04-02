import { signOut } from 'next-auth/client'
import { getURL } from 'next/dist/next-server/lib/utils'
import { useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/MenuAside.module.css'
import Link from 'next/link'
import Image from 'next/image'

export function MenuAside() {
    const currentUrl = getURL()
    const { isDark, toggleTheme } = useContext(ThemeContext)

    return (
            <header className={styles.container}>

                <Link href='/Accont'>
                <button 
                    type="button"
                    
                >
                    <Image src="/icons/moveit-icon.svg" alt="logout" width="32" height="32"/>
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
                            <a><Image priority src="/icons/home-false.svg" alt="home" width="32" height="32"/></a>
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
                                <a><Image priority src="/icons/leaderboard-false.svg" alt="home" width="32" height="32"/></a>
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
                        <Image src="/icons/moon.svg" alt="lua" width="32" height="32"/> :
                        <Image src="/icons/sun.svg" alt="Sol" width="32" height="32"/>
                    }
                </button>
            </header>
    )
}