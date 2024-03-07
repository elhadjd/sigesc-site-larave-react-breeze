import React, { useEffect, useState } from 'react'
import {CgChevronRight,CgChevronDoubleRight} from 'react-icons/cg'
import style from '../../../assets/home/Demonstration.module.scss'
import { SliderImg } from './sliderImg'
import { Why } from './Why'
import Apps from './apps'
import Cards from './Cards'
import { router } from '@inertiajs/react'
import Contacts from '../contact'
import BecomePartnerSection from './PartnerSection'
import { motion } from 'framer-motion';
import { User } from '@/types'

export interface textPreviewTs{
    content: string|null|undefined,
    state:boolean
}

export const Demonstration = ({auth}:{auth:{user:User}}) => {
  const [textPreview,setTextPreview] = useState<textPreviewTs>({
    state: false,
    content: ''
  })


  const handlerPreviewText = ((id:string)=>{
    if (id != 'false') {
        const text:string|undefined|null = document.getElementById(id)?.textContent
        textPreview.content = text
    }
    textPreview.state = !textPreview.state
    setTextPreview({...textPreview})
  })

  const videoUrl = "https://www.youtube.com/embed/qW3YJAcMDrA?si=svwSQ5l08UwSWpgY&amp;start=5";

  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const title = "SIGESC: Solução Completa em Software de Gestão Comercial para Impulsionar Seu Negócio";
  const description = "Descubra o poder do SIGESC, a solução definitiva em software de gestão comercial projetada para modernizar e otimizar as operações do seu negócio. Com recursos avançados como gestão de PDV, controle financeiro, gerenciamento de estoque, e integração de compras, o SIGESC é o aliado perfeito para empresas que buscam eficiência, escalabilidade e inovação.";

  // Truncar descrição para mobile
  const mobileDescription = description.length > 150 ? `${description.substring(0, 150)}...` : description;
  return (
    <div className=' px-4 sm:px-6 lg:px-8'>

<motion.div className="bg-gradient-to-r mt-20 mb-4 rounded from-[--app_color] to-[--buttonsColor] text-white py-16">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto">
        <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} items-center justify-between space-y-4 md:space-y-0`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center ${isMobile ? '' : 'md:text-left'} md:w-1/2`}
          >
            <h1 className="text-white text-xl flex text-start font-bold">{title}</h1>
            <p className="mt-4 text-start max-w-md text-white md:max-w-lg">{isMobile ? mobileDescription : description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`w-full ${isMobile ? 'max-w-md' : 'md:max-w-lg'} aspect-video overflow-hidden rounded-lg shadow-xl`}
          >
            <iframe
              src={videoUrl}
              title="SIGESC Video Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>

    <div className={style.banner}>
          <SliderImg/>
        </div>
        <div className={style.Cards}>
          <Cards/>
        </div>
        <div className={style.apps}>
          <Apps/>
        </div>
        <div className={style.why}>
          <Why actionPreviewText={ handlerPreviewText }/>
        </div>
        <BecomePartnerSection/>
        <div className={style.contact}>
           <Contacts auth={auth}/>
        </div>
    </div>
  )
}









function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}




