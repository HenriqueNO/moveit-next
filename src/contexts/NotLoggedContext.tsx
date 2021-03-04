import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

import styles from '../styles/components/NotLoggedModal.module.css'

interface NotLoggedData {
    time: number,
}

interface NotLoggedProps {
    children: ReactNode
}

export const NotLogged = createContext({} as NotLoggedData)

export function NotLoggedProvider({children}: NotLoggedProps) {
    const [ session ] = useSession()
    const [ time , setTime ] = useState(1)
    const Router = useRouter()

    useEffect(() => {
        if(!session) {
            if (time <= 99) {
                setTimeout(() => {
                    setTime(time + 1)
                }, 100)
            } else if (time === 100) {
                Router.push('/')
           }
        }
    }, [time])

    return (
        <NotLogged.Provider value={{
            time 
        }}>
            {children}
            <div className={styles.isNotLoggedOverLay}>
          <div className={styles.isNotLoggedContainer}>
            <h1>Você não esta logado!</h1>
            <p>Voltando para pagina de <a href="/">login</a>.</p>
          </div>
        <div>
            <div style={{width: `${time}%`}} />
        </div>
        </div>
        </NotLogged.Provider>
    )
}