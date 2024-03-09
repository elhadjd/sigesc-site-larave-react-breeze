import React, { useEffect } from 'react';
import { BiMap, BiPhone } from 'react-icons/bi';
import { motion } from 'framer-motion';
import WhatsApp from '../public/whatsApp';
import { ToastContainer, toast } from 'react-toastify';
import LoadingButtons from '@/ui/loadingButtons';
import { User } from '@/types';
import { contactsServices } from '@/services/contacts';
import { useTranslation } from 'react-i18next';

export default function Contacts(props:{auth:{user:User},errors?:any}) {
  const { data, handelSubmitForm, setData, wasSuccessful, processing, errors } = contactsServices();

  useEffect(() => {
    if (wasSuccessful) {
      toast.success('Email enviado com sucesso', { position: 'top-right' });
    }
  }, [wasSuccessful]);
  const {t} = useTranslation()
  return (
    <motion.div className="mt-16 p-6 bg-blue-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ToastContainer />
      <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-4">{t('cards.contact.title')}</h1>
          <p className="text-gray-700 mb-8">
            {t('cards.contact.desc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center justify-center">
                <BiMap className="text-4xl  text-[--buttonsColor]" />
                <div className="ml-4">
                  <p className="font-semibold">Office</p>
                  <p>Newark, NJ, Estados Unidos</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center justify-center mt-4">
                <BiPhone className="text-4xl text-[--buttonsColor]" />
                <div className="ml-4">
                  <p className="font-semibold">Contacts</p>
                  <p>+1 9735249725</p>
                  <p>+244 929147445</p>
                </div>
              </motion.div>
              <WhatsApp />
              {/* Redes sociais... */}
            </div>
            <div>
              <form onSubmit={handelSubmitForm} className="flex flex-col space-y-4">
                <InputComponent id='surname' label={t('words.name')} placeholder={t('words.name')} setData={(e)=>setData('name',e)} type='text' value={data.name} />
                <InputComponent id='Apelido' label={t('words.surname')} placeholder={t('words.surname')} setData={(e)=>setData('surname',e)} type='text' value={data.surname} />
                <InputComponent id='email' label='E-mail:' placeholder='Email' setData={(e)=>setData('email',e)} type='email' value={data.email} />
                <InputComponent id='phone' label={t('words.phone')} placeholder={t('words.phone')} setData={(e)=>setData('phone',e)} type='text' value={data.phone} />
                <textarea name="message" placeholder={t('words.message')} className='w-full outline-purple-600 border-gray-300 max-h-28 min-h-20 rounded' value={data.message} onChange={(e)=>setData('message', e.target.value)} required id="message"></textarea>
                {errors.message != null && <span className='text-red-600 text-sm'>{errors.message}</span>}


                <span className='flex w-full flex-row space-x-2'>
                    <label className='flex-auto truncate' htmlFor="account">{t('words.registerNow')}</label>
                    <input className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:shadow-outline transition duration-300'
                    type="checkbox" onChange={(e)=>setData('account', e.target.checked)} name='account' id='account'/>
                </span>
                <span className='flex w-full flex-row space-x-2'>
                    <label className='flex-auto truncate' htmlFor="newsletter">Newsletters</label>
                    <input className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:shadow-outline transition duration-300'
                    type="checkbox" onChange={(e)=>setData('newsletter', e.target.checked)} name='newsletter' id='newsletter'/>
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-[--buttonsColor] flex justify-center text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {processing ? <LoadingButtons /> : t('words.send')}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InputComponent(props:{label:string,type:string,value:string,setData(e:any):void,id:string,placeholder:string,}) {
    return (
        <span>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
             value={props.value} onChange={(e)=>props.setData(e.target.value)} required id={props.id} placeholder={props.placeholder}/>
            {/* {errors[props.name] != null && <span className='text-red-600 text-sm'>{errors[props.name]}</span>} */}
        </span>
    )
}
