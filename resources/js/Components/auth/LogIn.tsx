import style from '../../../assets/auth/login.module.scss'
import { AiOutlineCheckCircle} from 'react-icons/ai'
import {BsGithub, BsGoogle} from 'react-icons/bs'
import { loginServices } from '../../services/login'
import { ToastContainer } from 'react-toastify'
import { Link } from '@inertiajs/react'
import {  useFormState } from '@/contexts/stateForm'
import LoadingButtons from '@/ui/loadingButtons'

export const Login = ({local}:{local: string}) => {
    const {formData,handelSubmitForm,handleCHangeInput,stateForm,handlerChangeForm} = loginServices(local)
    const {isFormSubmitted} = useFormState()
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

                    <div className={style.buttons}>
                        <button type='submit'>
                            {!isFormSubmitted ? 'Logar' : <LoadingButtons />}
                        </button>
                    </div>
                    <div className={style.newCount}>
                        <div className='flex flex-row space-x-2'>
                            <span>Não tem uma conta?</span>
                            <a href='#' onClick={()=>handlerChangeForm(false)}> Registre-se.</a>
                        </div>
                        <Link
                        href={route('password.request')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                        {/* <Link href='#' className='text-center' style={{color: 'var(--buttonsColor)'}}>Forget my password</Link> */}
                    </div>
                </form>

                <div className={style.loginRede}>
                    <a href={`/loginWithSocial/google`}><BsGoogle/></a>
                    <a href={`/loginWithSocial/github`}><BsGithub/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
