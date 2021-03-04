import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import styles from '../styles/components/Login.module.css'

export function Login() {
    const [ session, loading ] = useSession()
    const Router = useRouter()

    if(session) {
        Router.push('/Home')
    }
    
    
    return (
        <div className={styles.container}>
            <img src="/icons/logo-app.svg" alt="logo Move.it"/>
            <header>Bem-vindo</header>
            <div className={styles.containerText}>
                <img src="/icons/gitLogo.svg" alt="GitHub"/>
                <p>Faça login com seu Github para começar.</p>
            </div>

            <div className={styles.containerLogin}>
                {!session && <><input placeholder="Digite seu username"></input> <br />
                <button onClick={(): Promise<void> => signIn('github', {callbackUrl:"http://localhost:3000/Home"})}>
                    <img src="/icons/arrow-right.svg" alt="GitHub"/>
                </button></>}
            </div>
        </div>
    )
}