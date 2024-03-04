import React from 'react'
import style from '../../../assets/auth/login.module.scss'
import {BiCaretDown,BiSearch} from 'react-icons/bi'
import { userRegisterServices } from '../../services/register'
import { RxAvatar } from 'react-icons/rx'
import { PiPlus } from 'react-icons/pi'
import { PreviewImage } from '@/services/public/previewImage'
import LoadingButtons from '@/ui/loadingButtons'
import { useFormState } from '@/contexts/stateForm'
import { Link } from '@inertiajs/react'
export const Register = ({local}:{local:string}) => {
    const {isFormSubmitted} = useFormState()
    const {countries,formData,handelSubmitForm,handleCHangeCountry,handleCHangeInput,handlerSearchCountry,stateFormListCountry,setStateFormListCountry} = userRegisterServices(local)
    const {onFileChange,createImg,image} = PreviewImage()

    return (
    <div>
        <form onSubmit={(e)=>handelSubmitForm(e,image)}>
            <header>
                <label htmlFor="image" className=' w-full cursor-pointer relative flex text-gray-300 justify-center items-center'>
                   {!image ?
                    <>
                        <RxAvatar className='text-5xl'/>
                        <PiPlus className="absolute text-2xl text-red-900 font-black" style={{color: "var(--buttonsColor)"}} />
                        <input type="file" id='image' onChange={onFileChange} className='hidden'/>
                    </>
                    :
                    <img src={image} alt="" className='h-16 w-16 rounded-full'/>
                }

                </label>
                <span>Crie sua conta</span>
            </header>
            <div className={style.box}>
                <label htmlFor="surname">Apelido:</label>
                <input type="text" id='surname'  required onChange={(e)=>handleCHangeInput(e)} value={formData.surname}/>
            </div>
            <div className={style.box}>
                <label htmlFor="name">Nome completo:</label>
                <input type="text" id='name'  required onChange={(e)=>handleCHangeInput(e)} value={formData.name}/>
            </div>
            <div className={style.box}>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' required onChange={(e)=>handleCHangeInput(e)} value={formData.email}/>
            </div>
            <div className={style.box}>
                <label htmlFor="country">Pais:</label>
                <button type='button'>
                    <span onClick={()=>setStateFormListCountry(! stateFormListCountry)}>{formData.country.name!=''?formData.country.name:'Escolhe seu pais'}</span>
                    <BiCaretDown/>
                    {
                        stateFormListCountry && (
                            <div className={style.listCountry}>
                                <span className={style.search}>
                                    <input onChange={(e)=>handlerSearchCountry(e.target.value)} type="search" placeholder='Pesquisar...' />
                                    <BiSearch/>
                                </span>
                                {countries.list.map((country)=>(
                                    <div key={country.code} onClick={()=>handleCHangeCountry(country)}>{country.name}</div>
                                ))}
                            </div>
                        )
                    }
                </button>
            </div>
            <div className={style.box}>
                <label>Tipo de conta:</label>
                <span className='flex flex-row justify-around items-center'>
                    <label >Cliente</label>
                    <input type="radio" id='accountType' onChange={(e)=>handleCHangeInput(e)} value="client" checked={formData.accountType == 'client'}/>
                    <label>Parciero</label>
                    <input type="radio" value="partner" onChange={(e)=>handleCHangeInput(e)} checked={formData.accountType == 'partner'} id='accountType'/>
                </span>
            </div>
            <div className={style.box}>
                <label htmlFor="password">Senha:</label>
                <input type="password" required onChange={(e)=>handleCHangeInput(e)} value={formData.password} id='password' placeholder='Digite a sua senha'/>
            </div>
            <div className={style.box}>
                <label htmlFor="password_confirmation">Confirmar senha:</label>
                <input type="password" required onChange={(e)=>handleCHangeInput(e)} value={formData.password1} id='password_confirmation' placeholder='Confirma a sua senha'/>
            </div>
            <div className={style.buttons}>
                <button type='submit'>
                <button type='submit'>
                    {!isFormSubmitted ? 'Registrar' : <LoadingButtons />}
                </button>
                </button>
            </div>
            <div className={style.newCount}>
                <span>Não tem uma conta?</span>
                <Link href={`/${local}/auth`}> Entrar.</Link>
            </div>
        </form>
    </div>
  )
}
