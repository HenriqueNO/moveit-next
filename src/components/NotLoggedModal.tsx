import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/components/NotLoggedModal.module.css'

export function NotLoggedModal() {
    const [ time , setTime ] = useState(1)
    const Router = useRouter()

    useEffect(() => {
        if (time <= 99) {
          setTimeout(() => {
            setTime(time + 1)
          }, 30)
        } else if (time === 100) {
          Router.replace('/')
        }
    }, [time])

    

    return (
        <div className={styles.isNotLoggedOverLay}>
          <div className={styles.isNotLoggedContainer}>
            <h1>Você não esta logado!</h1>
            <p>Voltando para pagina de <Link href="/" replace={true}>login</Link>.</p>
          </div>
          <div>
              <div style={{width: `${time}%`}} />
          </div>
        </div>
      )
}