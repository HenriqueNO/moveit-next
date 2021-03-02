import { Login } from "../components/Login"

import styles from '../styles/components/index.module.css'

export default function index(){

    return(
        <div className={styles.container}>
            <img src="/icons/logoBig.svg" alt="Logo"/>
            <div className={styles.containerLogin}>
                <Login />
            </div>
        </div>
    )
}