import axios from 'axios'
import { signOut, useSession } from 'next-auth/client'
import { useContext } from 'react'
import { DeleteAccontContext } from '../contexts/DeleteAccontContext'
import styles from '../styles/components/DeleteAccont.module.css'

export function DeleteAccont() {
  const [session] = useSession()
  const {DeleteModalClose} = useContext(DeleteAccontContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          <h1>AVISO!</h1>
          <p>{session.user.name} se continuar, sua conta será apagada e seu progresso ira desaparecer.</p>

          <button type='button' onClick={DeleteModalClose}><img src='/icons/close.svg' alt='Fechar modal' /></button>
        </header>
        <button type="button" onClick={() => {
          axios.post('/api/_data/deleteUser', {user: session.user})
          signOut({callbackUrl: '/'})
        }}>Deletar :C</button>
      </div>
    </div>
  )
}