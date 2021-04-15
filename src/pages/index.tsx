import Head from "next/head"
import Image from "next/image"
import { Login } from "../components/Login"

import styles from '../styles/pages/index.module.css'

export default function index(){

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | PBL</title>
      </Head>
      <div className={styles.loginArea}>
      <img src="icons/logoBig.svg" alt=""/>
      <div className={styles.containerLogin}>
        <Login />
      </div>
    </div>
    <section>
      <article>
      <h1>O que é move.it?</h1>
      <p>
        Desenvolvido com o foco em programadores, o intuito da aplicação é fazer você se movimentar
        com exercícios simples que faz a diferença no seu dia a dia.
      </p>
      </article>
    </section>
    <footer className={styles.footerContainer}>
      <nav>
        @ HenriqueNunes 2021
        <a href="https://github.com/HenriqueNO" target="_blank">
          <Image src="/icons/github-icon.svg" alt="" width="15" height="15"/> GitHub
        </a>  -
        <a href="https://www.linkedin.com/in/henrique-nunes-30291b184/" target="_blank">
          <Image src="/icons/instagram-icon.svg" alt="" width="15" height="15"/> Linkedin
        </a> -
        <a href="https://www.instagram.com/henrique.null/" target="_blank">
          <Image src="/icons/linkedin-icon.svg" alt="" width="15" height="15"/> Instagram
        </a>
      </nav>
    </footer>
    </div>
  )
}