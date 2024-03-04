import style from '../../../assets/home/header.module.scss'
import { HeaderServices } from '../../services/headerServices'
import {BiHelpCircle} from 'react-icons/bi'
import {GiPriceTag} from 'react-icons/gi'
import {PiContactlessPaymentBold} from 'react-icons/pi'
import {AiFillShopping, AiOutlineMenu} from 'react-icons/ai'
import { useLoggedUser } from '../../contexts/loggedUser'
import { Link } from '@inertiajs/react'
import { User } from '@/types'
import { useEffect } from 'react'


export const HeaderComponent = (props:{auth: {user:User},local: string}) => {
  const {Login,icon,changeIcons,navigates} = HeaderServices(props)
  const handlerChowMenu = (()=>{
    const button:any = document.getElementsByClassName('button')
    button[0]?.blur()
  })
  const {user,setUser,setLocal} = useLoggedUser()

  useEffect(()=>{

    (()=>{
        setLocal(props.local)
        if (props != null) {
            setUser({...props.auth?.user})
        }
    })()

  },[props])

  return (
    <div id='Header' className={`${style.container} fixed bg-white top-0`}>
      <div>
        <span>
          <Link href={`/${props.local}`}>
            <div className="flex justify-center space-y-10 md:w-48 flex-col relative">
                <h1 className="static text-6xl font-bold ">
                    <span>S</span>
                    <span>IGESC</span>
                </h1>
                <span className="absolute ml-0 truncate w-full text-gray-400 font-sm text-sm w-auto">Solução para a sua empresa</span>
            </div>
          </Link>
        </span>
        <button type='button' className={`${style.button} button`}>
          <div>
            <div className={style.logo}>
              <h1>SIGESC</h1>
            </div>
            <div className={style.card}>
              <span onClick={()=>{navigates('/Shop'),handlerChowMenu()}}><AiFillShopping/>Loja</span>
              <span onClick={()=>{navigates('/prices'),handlerChowMenu()}}><GiPriceTag/>Preços</span>
              <span onClick={()=>{navigates('/payments/'),handlerChowMenu()}}><PiContactlessPaymentBold/>Pagamento</span>
              <span onClick={()=>{navigates('/contact'),handlerChowMenu()}}><BiHelpCircle/>Suporte</span>
            </div>
            <div className={style.card}>
              {
                user?.id?(
                  <div className={style.profile}>

                    <span onClick={()=>navigates('/profile')}>
                        <h5 className='truncate'>{user.name != null ? user.name: user?.user_profile.surname}</h5>
                        <img src={`${user.user_profile.image}`} alt={user.user_profile.image} />
                    </span>

                    <div className="w-8">
                      <span onClick={()=>navigates('/authenticate/logout')}>Sair</span>
                    </div>
                  </div>
                ):(
                  <h3 onMouseEnter={()=>changeIcons(1)}  onMouseOut={()=>changeIcons(0)} className={style.logIn} onClick={()=>Login()}>
                      Entrar
                      {icon}
                  </h3>
                )
              }
            </div>
          </div>
          <span onClick={handlerChowMenu}>
            <AiOutlineMenu/>
          </span>
        </button>
      </div>
    </div>
  )
}
