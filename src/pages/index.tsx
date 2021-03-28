import Head from "next/head"
import { Login } from "../components/Login"

import styles from '../styles/pages/index.module.css'

export default function index(){
    
    return(
        <div className={styles.container}>
            <Head>
                <title>Login | PBL</title>
            </Head>
                <img src="icons/logoBig.svg" alt=""/>
            <div className={styles.containerLogin}>
                <Login />
            </div>
        </div>
    )
}