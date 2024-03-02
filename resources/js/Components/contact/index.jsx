import React from 'react'
import {BiMap,BiLogoTiktok} from 'react-icons/bi'
import {BsFillTelephoneForwardFill,BsFacebook} from 'react-icons/bs'
import styles from '../../../assets/contacts/index.module.scss'
import { contactsServices } from '../../services/contacts'
import WhatsApp from '../public/whatsApp'
import { ToastContainer } from 'react-toastify'
import LoadingButtons from '@/ui/loadingButtons'

export default function Contacts() {
  const {formData,handleCHangeInput,handelSubmitForm,setIsFormSubmitted,buttonSubmitDisable} = contactsServices()
  return (
    <div className={`${styles.principal} mt-20`}>
      <ToastContainer/>
        <div className={styles.main}>
          <div className={styles.titles}>
            <div>
              <h1>Fale Conosco - Tire suas Dúvidas sobre Nosso Software de Gestão Integrado</h1>
              <p>Estamos aqui para ajudar! Preencha o formulário e entre em contato conosco para esclarecer suas dúvidas sobre nosso software de gestão integrado. Nossa equipe dedicada está pronta para oferecer suporte personalizado, orientações sobre preços ou qualquer outra informação que você precise. Simplifique a gestão do seu negócio conosco – estamos ansiosos para ouvir de você e contribuir para o sucesso da sua empresa</p>
            </div>
            <div className={styles.TelLocal}>
              <div className={styles.phone}>
                <span>
                  <BiMap/>
                </span>
                <span>Nosso escritorio</span>
                <span>Newawrk,NY, Estados unidos</span>
              </div>
              <div className={styles.local}>
                <span>
                  <BsFillTelephoneForwardFill/>
                </span>
                <span>Nossos numeros de telefones</span>
                <span>
                  <div>+1 9735249725</div>
                  <div>+244 929147445</div>
                </span>
              </div>
            </div>
            <WhatsApp/>
            <div className={styles.redes}>
              {/* <a href='https://www.facebook.com/Sisgesc'><BsFacebook/><span>Facebook</span></a>
              <a href='https://www.tiktok.com/@sigesc'><BiLogoTiktok/><span>TikTok</span></a>
              <a href='https://www.instagram.com/leonardo_vandunen/'><AiFillInstagram/><span>Instagram</span></a>
              <a href="https://www.youtube.com/@sigescTech"><AiFillYoutube/> <span>Youtube</span></a> */}
            </div>
          </div>
          <div className={styles.message}>
            <form onSubmit={handelSubmitForm}>
              <span>
                <label htmlFor="surname">Apelido</label>
                <input type="text" className='w-full' value={formData.surname} onChange={(e)=>handleCHangeInput(e)} required id='surname' placeholder='Digite seu apelido'/>
              </span>
              <span>
                <label htmlFor="name">Nome</label>
                <input type="text" className='w-full' value={formData.name} onChange={(e)=>handleCHangeInput(e)} id='name' placeholder='Digite seu nome' />
              </span>
              <span>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" className='w-full' value={formData.phone} onChange={(e)=>handleCHangeInput(e)} required id='phone' placeholder='Digite seu numero de telefone'/>
              </span>
              <span>
                <label htmlFor="email">E-mail</label>
                <input type="email" className='w-full' value={formData.email} onChange={(e)=>handleCHangeInput(e)} required id='email' placeholder='Digite seu email'/>
              </span>
              <span>
                <textarea name="message" className='w-full' value={formData.message} onChange={(e)=>handleCHangeInput(e)} required id="message"></textarea>
              </span>
              <span className='flex w-full flex-row space-x-2'>
                <label className='flex-auto truncate' htmlFor="account">Criar conta</label>
                <input className='outline-none' type="checkbox" onChange={(e)=>handleCHangeInput(e)} name='account' id='account'/>
              </span>
              <span className='flex w-full flex-row space-x-2'>
                <label className='flex-auto truncate' htmlFor="newsletter">Recebes novidades</label>
                <input className='outline-none' type="checkbox" onChange={(e)=>handleCHangeInput(e)} name='newsletter' id='newsletter'/>
              </span>
              <span>
                <button type='submit'>
                    {
                        !setIsFormSubmitted ? <LoadingButtons/> :'Enviar'
                    }
                </button>
              </span>
            </form>
          </div>
        </div>
    </div>
  )
}
