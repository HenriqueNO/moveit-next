import { signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { MenuAside } from '../components/MenuAside'
import { NavButtonAccont } from '../components/NavButtonAccont'
import { NotLoggedModal } from '../components/NotLoggedModal'
import { DeleteAccontContext, DeleteAccontProvider } from '../contexts/DeleteAccontContext'
import styles from '../styles/pages/Accont.module.css'

export default function ProfileConfig() {
  const [session, loading] = useSession()

  if(loading) {
    return(
      <h1>carregando...</h1>
    )
  }

  if(session) {
    return (
      
      <div>
        <Head>
          <title>Accont | PLB</title>
        </Head>
          <MenuAside />
          <div className={styles.container}>
            <div className={styles.containerProfile}>
              <header >
                <img src={session.user.image} alt="Foto perfil"/>
                <h1>{session.user.name}</h1>
              </header>
              <DeleteAccontProvider>
                <NavButtonAccont />
              </DeleteAccontProvider>
          </div>
          </div>
      </div>
      
    )
  } else {
    <NotLoggedModal />
  }

}