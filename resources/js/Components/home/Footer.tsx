import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineContacts } from 'react-icons/ai'
import { BiLogIn, BiLogoTiktok, BiStore, BiTag } from 'react-icons/bi'
import { BsBuilding, BsCash, BsFacebook } from 'react-icons/bs'
import styles from '@/../assets/home/footer.module.scss'
import { FaUsers } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div>
        <h3>SIGESC TECH</h3>
      </div>
      <div>
        <h2>Copyright © 2024 SIGESC. Todos os direitos reservados.</h2>
      </div>
      <div className={styles.footer_data}>
        <div className={styles.links}>
          <span>Links</span>
          <div>
            <Link href={'/contact'}><AiOutlineContacts/> Contacto</Link>
            <a href={'https://glamoure.net'} target="_blank"><BiStore/> Loja</a>
            <Link href={'/prices'}><BiTag/>Lista de preço</Link>
            <Link href={'/Payments'}><BsCash/>Pagamentos</Link>
            <Link href={'/auth'}><BiLogIn/>Entrar</Link>
            <a href='https://geral.sisgesc.net/' target="_blank"><FaUsers/>Já e nosso cliente ?</a>
            <a href='https://sisgesc.net/gettingStarted' target="_blank"><BsBuilding/>Cree a sua empresa apenas com alguns cliques</a>
          </div>
        </div>
        <div className={styles.social}>
          <span>Rede social</span>
          <div>
            <a href='https://www.facebook.com/Sisgesc' target="_blank"><BsFacebook/>Facebook</a>
            <a href='https://www.tiktok.com/@sigesc' target="_blank"><BiLogoTiktok/>TikTok</a>
            <a href='https://www.instagram.com/leonardo_vandunen/' target="_blank"><AiFillInstagram/>Instagram</a>
            <a href="https://www.youtube.com/@sigescTech" target="_blank"><AiFillYoutube/> Youtube</a>
          </div>
        </div>
      </div>
    </div>
  )
}

