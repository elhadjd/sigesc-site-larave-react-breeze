

import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiOutlineContacts } from 'react-icons/ai';
import { BiLogIn, BiLogoTiktok, BiStore, BiTag } from 'react-icons/bi';
import { BsBuilding, BsCash, BsFacebook } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
import { useLoggedUser } from '@/contexts/loggedUser';

export default function FooterComponent() {
  const { local } = useLoggedUser();

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">SIGESC TECH</h3>
            <p className='text-white'>Transformando a gestão comercial com tecnologia e inovação.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Links Rápidos</h4>
            <ul className='flex flex-col space-y-1'>
                <li><a href="https://www.facebook.com/Sisgesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BsFacebook/> Facebook</a></li>
                <li><a href="https://www.tiktok.com/@sigesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BiLogoTiktok/> TikTok</a></li>
                <li><a href="https://www.instagram.com/leonardo_vandunen/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><AiFillInstagram/> Instagram</a></li>
                <li><a href="https://www.youtube.com/@sigescTech" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><AiFillYoutube/> Youtube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
            <ul className='flex flex-col space-y-1'>
                <li><Link href="/contact"><a className='flex items-center gap-2'><AiOutlineContacts/> Contato</a></Link></li>
                <li><a href="https://glamoure.net" target="_blank"className='flex items-center gap-2' rel="noopener noreferrer"><BiStore/> Loja</a></li>
                <li><Link href={`/${local}/prices`}><a className='flex items-center gap-2'><BiTag/> Lista de Preço</a></Link></li>
                <li><Link href={`/${local}/payments`}><a className='flex items-center gap-2'><BsCash/> Pagamentos</a></Link></li>
                <li><Link href={`/${local}/auth`}><a className='flex items-center gap-2'><BiLogIn/> Entrar</a></Link></li>
                <li><a href="https://geral.sisgesc.net/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><FaUsers/> Já é nosso cliente?</a></li>
                <li><a href="https://sisgesc.net/gettingStarted" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><BsBuilding/> Crie sua empresa em alguns cliques</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Recursos</h4>
            <ul className='flex flex-col space-y-1'>
                <li><Link href={`/${local}/privacy-policy`}><a className='flex items-center gap-2'>Política de Privacidade</a></Link></li>
                <li><Link href={`/${local}/terms-of-service`}><a className='flex items-center gap-2'>Termos de Serviço</a></Link></li>
                <li><Link href={`/${local}/faq`}><a className='flex items-center gap-2'>FAQ</a></Link></li>
                <li><Link href={`/${local}/help-center`}><a className='flex items-center gap-2'>Centro de Ajuda</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-300 text-xs">
            &copy; 2024 SIGESC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

