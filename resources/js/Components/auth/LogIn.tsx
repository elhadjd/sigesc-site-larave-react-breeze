import style from '../../../assets/auth/login.module.scss'
import { Register } from './Register'
import { AiOutlineCheckCircle} from 'react-icons/ai'
import {BsFacebook, BsGithub, BsGoogle} from 'react-icons/bs'
import { loginServices } from '../../services/login'
import { ToastContainer } from 'react-toastify'
import { Link } from '@inertiajs/react'

export const Login = ({local}:{local: string}) => {
    const {formData,handelSubmitForm,handleCHangeInput,authenticateWithSocial,stateForm,handlerChangeForm} = loginServices(local)

    return (
    <div className={style.principal}>
        <ToastContainer/>
        <header>
            <Link href="/">
                <h1>SISGESC</h1>
            </Link>
        </header>
        <div className={style.container}>
            <div>
                <div className={style.content}>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Sistema de PDV Avançado</span>
                            <span>Melhore a eficiência das suas vendas com o nosso Módulo de PDV de última geração.</span>
                        </div>
                    </div>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Emissão de Faturas e Controle Financeiro</span>
                            <span>Simplifique a emissão de faturas e controle as finanças da sua empresa com o nosso Módulo de Faturamento.</span>
                        </div>
                    </div>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Gestão de Compras Simplificada</span>
                            <span>Otimize o seu processo de compra com o nosso Módulo de Compras.</span>
                        </div>
                    </div>
                </div>
                <div className={style.main}></div>
                <div className={style.footer}></div>
            </div>
            <div>
                {stateForm.register == true ?(
                    <form onSubmit={handelSubmitForm}>
                        <header>
                            <span>Acesse sua conta</span>
                        </header>
                        <div className={style.box}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id='email' required onChange={(e)=>handleCHangeInput(e)} value={formData.email}/>
                        </div>
                        <div className={style.box}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id='password' required onChange={(e)=>handleCHangeInput(e)} value={formData.password} />
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="checkbox" id="weekConnect"  onChange={(e)=>handleCHangeInput(e)} checked={formData.weekConnect}/>
                            <label htmlFor="weekConnect">Permanece connectado por uma semana</label>
                        </div>
                        <div className={style.buttons}>
                            <button type='submit'>Continuar</button>
                        </div>
                        <div className={style.newCount}>
                            <span>Não tem uma conta?</span>
                            <span onClick={()=>handlerChangeForm(false)}> Registre-se.</span>
                        </div>
                    </form>
                ):(
                    <Register changeForme={()=>handlerChangeForm(true)}/>
                )}
                <div className={style.loginRede}>
                    <button type='button' onClick={()=>authenticateWithSocial('google')}><BsGoogle/></button>
                    <button type='button' onClick={()=>authenticateWithSocial('facebook')}><BsFacebook/></button>
                    <button type='button' onClick={()=>authenticateWithSocial('github')}><BsGithub/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
