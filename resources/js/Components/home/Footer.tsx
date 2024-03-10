

import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiOutlineContacts } from 'react-icons/ai';
import { BiLogIn, BiLogoTiktok, BiStore, BiTag } from 'react-icons/bi';
import { BsBuilding, BsCash, BsFacebook } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
import { useLoggedUser } from '@/contexts/loggedUser';
import ChatComponent from '@/ui/chat';
import { useTranslation } from 'react-i18next';

export default function FooterComponent() {
  const { local } = useLoggedUser();
  const {t} = useTranslation()
  return (
    <footer className="bg-gradient-to-r from-[--app_color] to-[--buttonsColor] text-white py-8">
        <ChatComponent/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">SIGESC TECH</h3>
            <p className='text-white'>{t('cards.footer.desc')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Socials</h4>
            <ul className='flex flex-col space-y-1'>
                <li><a href="https://www.facebook.com/Sisgesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BsFacebook/> Facebook</a></li>
                <li><a href="https://www.tiktok.com/@sigesc" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><BiLogoTiktok/> TikTok</a></li>
                <li><a href="https://www.instagram.com/leonardo_vandunen/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><AiFillInstagram/> Instagram</a></li>
                <li><a href="https://www.youtube.com/@sigescTech" target="_blank" className='flex items-center gap-2' rel="noopener noreferrer"><AiFillYoutube/> Youtube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">{t('words.fastLinks')}</h4>
            <ul className='flex flex-col space-y-1'>
                <li><Link href="/contact"><a className='flex items-center gap-2'><AiOutlineContacts/> {t('words.contact')}</a></Link></li>
                <li><a href="https://glamoure.net" target="_blank"className='flex items-center gap-2' rel="noopener noreferrer"><BiStore/> {t('words.shop')}</a></li>
                <li><Link href={`/${local}/prices`}><a className='flex items-center gap-2'><BiTag/> {t('words.price')}</a></Link></li>
                <li><Link href={`/${local}/payments`}><a className='flex items-center gap-2'><BsCash/> {t('words.payment')}</a></Link></li>
                <li><Link href={`/${local}/auth`}><a className='flex items-center gap-2'><BiLogIn/> {t('words.enter')}</a></Link></li>
                <li><a href="https://geral.sisgesc.net/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><FaUsers/>{t('words.isClient')}</a></li>
                <li><a href="https://sisgesc.net/gettingStarted" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer"><BsBuilding/>{t('words.createCompany')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul className='flex flex-col space-y-1'>
                <li><Link href={route('resources',{resource: 'privacy'})}><a className='flex items-center gap-2'>{t('words.privacy')}</a></Link></li>
                <li><Link href={route('resources',{resource: 'terms'})}><a className='flex items-center gap-2'>{t('words.termService')}</a></Link></li>
                <li><Link href={route('resources',{resource: 'faq'})}><a className='flex items-center gap-2'>FAQ</a></Link></li>
                <li><Link href={route('resources',{resource: 'help'})}><a className='flex items-center gap-2'>{t('words.help')}</a></Link></li>
                <li><Link href={route('resources',{resource: 'learningCenter'})}>{t('words.learn')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-300 text-xs">
            &copy; {t('words.copy')}
          </p>
        </div>
      </div>
    </footer>
  );
}

