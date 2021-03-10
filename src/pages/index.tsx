import Head from "next/head"
import { Login } from "../components/Login"

import styles from '../styles/pages/index.module.css'

export default function index(){
    
    return(
        <div className={styles.container}>
            <Head>
                <title>Login | PLB</title>
                <style>
                   {"body: {background: #0037FF;}"}
                </style>
            </Head>
            <div className={styles.containerLogin}>
                <Login />
            </div>
        </div>
    )
}