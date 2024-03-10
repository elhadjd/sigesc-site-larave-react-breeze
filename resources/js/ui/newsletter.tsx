import { useForm } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingButtons from './loadingButtons';
import { toast } from 'react-toastify';

const ModalNewsletter = ({local}:{local: string}) => {
  const [isVisible, setIsVisible] = useState(false);
  const {errors,processing,wasSuccessful,hasErrors,setData,post} = useForm<{email: string}>({
    email: '',
  })
  const {t} = useTranslation()
  useEffect(() => {
    if(!localStorage.getItem('showNewsletter')){
        setTimeout(() => {
            setIsVisible(true);
        }, 3000);
    }
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('showNewsletter','0')
  };

  const register = ((e:any)=>{
    e.preventDefault()
    if(processing) return
    post(route('new-newsletter',{local: local?local:'en'}))
    if(wasSuccessful && !hasErrors) {
        localStorage.setItem('showNewsletter','1')
        toast.success('success', {position: 'top-right'})
    }
  })

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 relative rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t('cards.newsletter.title')}</h2>
            <p className="mb-4">{t('cards.newsletter.desc')}</p>
            <form className='flex flex-row justify-between' onSubmit={register}>
              <input
                type="email"
                placeholder="E-mail"
                className="p-2 flex-auto text-black border-2 border-gray-200 rounded"
                onChange={(e)=>setData('email', e.target.value)}
                required
              />

              <button type="submit" className="bg-blue-500 flex justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                {processing ? <LoadingButtons/> : t('words.register')}
              </button>
            </form>
            <span className='text-red-500'>{errors.email != null && errors.email} </span>
            <button type='button' onClick={handleClose} className="absolute top-0 right-0 mr-2 text-gray-600 p-2 hover:text-gray-800">
                &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNewsletter;
