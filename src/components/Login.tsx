import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../styles/components/Login.module.css'

export function Login() {
    const [ session, loading ] = useSession()

    return (
        <div className={styles.container}>
            <img src="/icons/logo-app.svg" alt="logo Move.it"/>
            <header>Bem-vindo</header>
            <div className={styles.containerText}>
                <img src="/icons/gitLogo.svg" alt="GitHub"/>
                <p>Faça login com seu Github para começar.</p>
            </div>

            <div className={styles.containerLogin}>
                {!session && <><p> Faça login com seu GitHub para começar <br />
                <button onClick={() => signIn()} /></p></>}

                {session && <> Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button></>}
            </div>
        </div>
    )
}