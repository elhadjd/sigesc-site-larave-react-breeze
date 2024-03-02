import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineContacts } from 'react-icons/ai'
import { BiLogIn, BiLogoTiktok, BiStore, BiTag } from 'react-icons/bi'
import { BsBuilding, BsCash, BsFacebook } from 'react-icons/bs'
import styles from '@/../assets/home/footer.module.scss'
import { FaUsers } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
        <div>
            <h3>SIGESC TECH</h3>
            <p className='text-white'>Transformando a gestão comercial com tecnologia e inovação.</p>
        </div>

        <nav className={styles.footer_data}>
            <div className={styles.links}>
                <h4 className='text-2xl'>Links Rápidos</h4>
                <ul className='flex flex-col space-y-1'>
                    <li><Link href="/contact"><a className='flex items-center gap-2'><AiOutlineContacts/> Contato</a></Link></li>
                    <li><a href="https://glamoure.net" target="_blank"className='flex items-center gap-2' rel="noopener noreferrer"><BiStore/> Loja</a></li>
                    <li><Link href="/prices"><a className='flex items-center gap-2'><BiTag/> Lista de Preço</a></Link></li>
                    <li><Link href="/payments"><a className='flex items-center gap-2'><BsCash/> Pagamentos</a></Link></li>
                    <li><Link href="/auth"><a className='flex items-center gap-2'><BiLogIn/> Entrar</a></Link></li>
                    <li><a href="https://geral.sisgesc.net/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><FaUsers/> Já é nosso cliente?</a></li>
                    <li><a href="https://sisgesc.net/gettingStarted" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><BsBuilding/> Crie sua empresa em alguns cliques</a></li>
                </ul>
            </div>

            <div className={styles.social}>
                <h4 className='text-2xl'>Redes Sociais</h4>
                <ul className='flex flex-col space-y-1'>
                    <li><a href="https://www.facebook.com/Sisgesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BsFacebook/> Facebook</a></li>
                    <li><a href="https://www.tiktok.com/@sigesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BiLogoTiktok/> TikTok</a></li>
                    <li><a href="https://www.instagram.com/leonardo_vandunen/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><AiFillInstagram/> Instagram</a></li>
                    <li><a href="https://www.youtube.com/@sigescTech" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><AiFillYoutube/> Youtube</a></li>
                </ul>
            </div>

            <div className="flex flex-col space-y-2">
                <h4 className='text-2xl'>Recursos</h4>
                <ul className='flex flex-col space-y-1'>
                    <li><Link href="/privacy-policy"><a className='flex items-center gap-2'>Política de Privacidade</a></Link></li>
                    <li><Link href="/terms-of-service"><a className='flex items-center gap-2'>Termos de Serviço</a></Link></li>
                    <li><Link href="/faq"><a className='flex items-center gap-2'>FAQ</a></Link></li>
                    <li><Link href="/help-center"><a className='flex items-center gap-2'>Centro de Ajuda</a></Link></li>
                </ul>
            </div>
        </nav>

        <div>
            <p className='text-white'>Copyright © 2024 SIGESC. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

