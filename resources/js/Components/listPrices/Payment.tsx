import { useEffect, useState } from 'react';
import styles from '../../../assets/listPrices/payment.module.scss'
import axios from 'axios';
import { PaymentsLicense } from '../../services/paymantLicense';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
declare global {
    interface Window {
      paypal: any;
    }
}

export default function Payment({ email, fiscalIdentification }) {

  const {
    formPayment,loaded,
    paid,setLoaded,setPaid,
    handlerChangeInput,dataAtribuite,
    product,handlerSubmitForm} = PaymentsLicense({fiscalIdentification,email})

  useEffect(()=>{
    (()=>{
      if (formPayment.nif.length > 0 && formPayment.email.length > 0) {
        axios.post('http://bosgc.sisgesc.net/api/RequestAmount',{
          ...formPayment
      },{
          headers: {
              Authorization: 'oEn34JE6gDfVuZlR6QRWX8Q2byn9repjspVFWoz2SZdncBYePGc7XoKZ8Noo',
          }
      }).then((response) => {
        if (response.data.client) {
          return dataAtribuite(response)
        }
        toast.warn('Dados não encontrado, por favor verifica os dados e tenta novamente ',{position: "top-right"})
        }).catch((err) => {
          console.log(err);
        });
      }
    })()

    const id = 'ATht4B6eiCPEp4ptAOiP9JomI_40q97GWyoykjcHRDJTAtRJdqq0Oo-A9k1EQEk-DNjrmbctA0pvAtXN';
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${id}`;
    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);
    return () => {
      const paypalButtonContainer = document.getElementById('paypal-button-container');
      if (paypalButtonContainer) {
        paypalButtonContainer.innerHTML = '';
      }
    };
  },[])

  useEffect(() => {
    const paypalButtonContainer = document.getElementById('paypal-button-container');
    if (paypalButtonContainer) {
      paypalButtonContainer.innerHTML = '';
    }
    if (loaded && !paid) {
      function loadButtonAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data:any, actions:any) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: 'USD',
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (_, actions) => {
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              },
            })
            .render('#paypal-button-container');
        });
      }
      loadButtonAndLogicAboutPayment();
    }
  }, [loaded, paid,product]);
  const {t} = useTranslation()
  return (
    <div className="container mx-auto md:p-6 mt-20">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-xl rounded-lg p-8"
      >
        <h1 className='flex justify-center'>{t('words.payment')}</h1>
        <form onSubmit={handlerSubmitForm}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={formPayment.email}
                    onChange={(e) => handlerChangeInput('email', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t('words.email')}
                />
                </div>
                <div className="mb-4">
                <label htmlFor="nif" className="block text-gray-700 text-sm font-bold mb-2">NIF:</label>
                <input
                    type="text"
                    id="nif"
                    value={formPayment.nif}
                    onChange={(e) => handlerChangeInput('nif', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nif"
                />
                <button type='submit'
                    className="mt-3 bg-[--buttonsColor] hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {t('words.request')}
                </button>
            </div>
        </form>

        {paid ? (
          <div className="text-center p-6">
            <h3 className="text-lg font-semibold">Parabéns, você comprou o produto!</h3>
          </div>
        ) : (
          <div className='flex flex-col w-full justify-center items-center'>
            {product.price !== 0 && (
              <div className="my-4 flex items-center flex-row md:p-4 rounded border">
                <h3 className="">Plano: {product.description}</h3>
                <p>Total: {product.total} 00Kz</p>
                <p>Desconto: {product.discount} 00Kz</p>
                <p>A pagar: {product.price} 00Kz</p>
              </div>
            )}
            <div className='w-full md:w-1/2' id="paypal-button-container"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
