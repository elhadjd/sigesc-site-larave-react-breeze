import React, { useEffect, useState } from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import {CgChevronRight,CgChevronDoubleRight} from 'react-icons/cg'
import style from '../../../assets/home/Demonstration.module.scss'
import { Buttons } from '../public/Buttons'
import { SliderImg } from './sliderImg'
import { Why } from './Why'
import Apps from './apps'
import TextPreview from '../public/textPreview'
import Cards from './Cards'
import { IconBaseProps } from 'react-icons'
import { router } from '@inertiajs/react'
import Contacts from '../contact'
import PartnerSection from './PartnerSection'
import BecomePartnerSection from './PartnerSection'

export interface textPreviewTs{
    content: string|null|undefined,
    state:boolean
}

export const Demonstration = () => {
  const [icons,setIcons] = useState<IconBaseProps[]>([
    <CgChevronRight/>,
    <CgChevronDoubleRight/>
  ])
  const [iconContact,setIcon] = useState<IconBaseProps[]>()
  const [textPreview,setTextPreview] = useState<textPreviewTs>({
    state: false,
    content: ''
  })
  const changeIcons = ((position:number)=>{
    return setIcon(icons[position])
  })
  const demoIcons = (()=>{
    console.log('clicou');
  })

  const handlerPreviewText = ((id:string)=>{
    if (id != 'false') {
        const text:string|undefined|null = document.getElementById(id)?.textContent
        textPreview.content = text
    }
    textPreview.state = !textPreview.state
    setTextPreview({...textPreview})
  })

  const handelClickButton = ((route:string)=>{
    return router.get(route)
  })

  return (
    <div className={`${style.container} mt-20`}>
        <TextPreview preview={textPreview} action={(e)=>handlerPreviewText(e)}/>
        <div className={style.header}></div>
        <div className={style.content_left}>
          <div>
            <h1>
              Software de Gestão Comercial Integral
            </h1>
          </div>
          <div>
            <p id='text1' onClick={()=>handlerPreviewText('text1')}>
            Explore a solução definitiva para a gestão eficiente do seu negócio com nosso Software de Gestão Comercial. Do PDV às compras, faturamento, controle de estoque e gerenciamento de funcionários, abrangemos todas as áreas críticas. Simplificamos seu dia a dia com uma plataforma intuitiva que impulsiona a produtividade, economiza tempo e aumenta os lucros. Descubra como transformar sua operação comercial e alcance o sucesso.
              <a href="https://geral.sisgesc.net/gettingStarted"> Inscreva-se agora</a>
            </p>
          </div>
          <div className={style.buttons}>
            <Buttons action={()=>handelClickButton('/contact')} changeIcons={changeIcons} text='Entrar em contacto' icon={iconContact}  type='button' style={style.contact}/>
            <Buttons action={()=>handelClickButton('/prices')} text='Demo' changeIcons={(()=>{})} icon={<AiFillCaretRight/>} type='button' style={style.demo}/>
          </div>
        </div>
        <div className={style.content_right}>
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/qW3YJAcMDrA?si=MnaN85AEVHwAUeH9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>
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
           <Contacts />
        </div>
    </div>
  )
}
