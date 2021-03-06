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
          Router.push('/')
        }
    }, [time])

    

    return (
        <div className={styles.isNotLoggedOverLay}>
          <div className={styles.isNotLoggedContainer}>
            <h1>Você não esta logado!</h1>
            <p>Voltando para pagina de <a href="/">login</a>.</p>
          </div>
          <div>
              <div style={{width: `${time}%`}} />
          </div>
        </div>
      )
}