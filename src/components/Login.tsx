import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import styles from '../styles/components/Login.module.css'

export function Login() {
    const [ session ] = useSession()
    const Router = useRouter()

    if(session) {
        Router.replace('/Home')
    }
       
    return (
        <div className={styles.container}>
            <header className={styles.containerInfo}>
                <img src="/icons/logo-app.svg" alt="logo Move.it"/>
                <h1>Bem-vindo</h1>
                <div className={styles.containerText}>
                    <p>Escolha uma opção de login para começar</p>
                </div>
            </header>

            <div className={styles.containerLogin}>
                {!session && <>
                    <button onClick={(): Promise<void> => signIn('github', {callbackUrl:"/Home"})}>
                    <img src="/icons/github-icon.svg" alt="login github"/>
                    </button></> }
                {!session && <>
                    <button onClick={(): Promise<void> => signIn('google', {callbackUrl:"/Home"})}>
                    <img src="/icons/google-icon.svg" alt="login google"/>
                    </button></> }
            </div></div>
    )
}