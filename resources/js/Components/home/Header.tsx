import style from '../../../assets/home/header.module.scss'
import { HeaderServices } from '../../services/headerServices'
import {BiHelpCircle} from 'react-icons/bi'
import {GiPriceTag} from 'react-icons/gi'
import {PiContactlessPaymentBold} from 'react-icons/pi'
import {AiFillShopping, AiOutlineMenu} from 'react-icons/ai'
import { ToastContainer } from 'react-toastify'
import { useLoggedUser } from '../../contexts/loggedUser'
import { Link } from '@inertiajs/react'


export const HeaderComponent = () => {
  const {Login,icon,changeIcons,navigates} = HeaderServices()
  const handlerChowMenu = (()=>{
    const button:any = document.getElementsByClassName('button')
    button[0]?.blur()
  })
  const {user,setUser} = useLoggedUser()

  return (
    <div id='Header' className={style.container}>
      <div><ToastContainer/>
        <span>
          <Link href={'/'}>
            <span>SIGESC</span>
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
                user ?(
                  <div className={style.profile}>
                    <span>
                      <h5>{!user.providerId ? user.displayName: user?.name}</h5>
                    </span>
                    {user.photoURL && (
                      <span><img src={user.photoURL} alt="USERIMG" /></span>
                    )}
                    <div className={style.menuProfile}>
                      <span>Sair</span>
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
