import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { useContext } from 'react'
import { DeleteAccontContext } from '../contexts/DeleteAccontContext'
import styles from '../styles/components/NavButtonAccont.module.css'

export function NavButtonAccont() {
  const {DeleteModalOpen} = useContext(DeleteAccontContext)

  return(
    <nav className={styles.containerButton}>
      <button type="button" onClick={DeleteModalOpen}>
        Apagar conta
      </button>
      <Link href='/' replace={true}>
        <button type="button" onClick={(): Promise<void> => signOut({callbackUrl: '/'})}>
          Desconectar
        </button>
      </Link>
    </nav>
  )
}