import React, { useEffect } from 'react';
import { BiMap, BiPhone } from 'react-icons/bi';
import { motion } from 'framer-motion';
import WhatsApp from '../public/whatsApp';
import { ToastContainer, toast } from 'react-toastify';
import LoadingButtons from '@/ui/loadingButtons';
import { useFormState } from '@/contexts/stateForm';
import { User } from '@/types';
import { contactsServices } from '@/services/contacts';

export default function Contacts(props:{auth:{user:User},errors?:any}) {
  const { data, handelSubmitForm, setData, wasSuccessful, processing, errors } = contactsServices();

  useEffect(() => {
    if (wasSuccessful) {
      toast.success('Email enviado com sucesso', { position: 'top-right' });
    }
  }, [wasSuccessful]);

  return (
    <motion.div className="mt-20 p-6 bg-blue-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ToastContainer />
      <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Entre em Contato com a SIGESC</h1>
          <p className="text-gray-700 mb-8">
            Se você está procurando por um software de gestão comercial que transforme seu negócio, a SIGESC é a solução.
            Com funcionalidades avançadas e suporte dedicado, nosso sistema foi criado para atender às suas necessidades.
            Preencha o formulário abaixo ou ligue para nossos números de contato e descubra como podemos ajudá-lo a atingir seus objetivos de negócio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center justify-center">
                <BiMap className="text-4xl  text-[--buttonsColor]" />
                <div className="ml-4">
                  <p className="font-semibold">Nosso escritório</p>
                  <p>Newark, NJ, Estados Unidos</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex items-center justify-center mt-4">
                <BiPhone className="text-4xl text-[--buttonsColor]" />
                <div className="ml-4">
                  <p className="font-semibold">Nossos números de telefones</p>
                  <p>+1 9735249725</p>
                  <p>+244 929147445</p>
                </div>
              </motion.div>
              <WhatsApp />
              {/* Redes sociais... */}
            </div>
            <div>
              <form onSubmit={handelSubmitForm} className="flex flex-col space-y-4">
                <InputComponent id='surname' label='Nome:' placeholder='Nome' setData={(e)=>setData('name',e)} type='text' value={data.name} />
                <InputComponent id='Apelido' label='Apelido:' placeholder='Apelido' setData={(e)=>setData('surname',e)} type='text' value={data.surname} />
                <InputComponent id='email' label='E-mail:' placeholder='Email' setData={(e)=>setData('email',e)} type='email' value={data.email} />
                <textarea name="message" className='w-full outline-purple-600 border-gray-300 max-h-28 min-h-20 rounded' value={data.message} onChange={(e)=>setData('message', e.target.value)} required id="message"></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-[--buttonsColor] text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {processing ? <LoadingButtons /> : 'Enviar'}
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
            <input type={props.type} className='w-full rounded border border-gray-300' value={props.value} onChange={(e)=>props.setData(e.target.value)} required id={props.id} placeholder={props.placeholder}/>
        </span>
    )
}
