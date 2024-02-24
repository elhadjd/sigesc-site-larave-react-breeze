import React from 'react'
import style from '../../../assets/auth/login.module.scss'
import {BiCaretDown,BiSearch} from 'react-icons/bi'
import { userRegisterServices } from '../../services/register'
import { ToastContainer } from 'react-toastify'
export const Register = ({changeForme}:{changeForme:VoidFunction}) => {
    const {countries,formData,handelSubmitForm,handleCHangeCountry,handleCHangeInput,handlerSearchCountry,stateFormListCountry,setStateFormListCountry} = userRegisterServices()
  return (
    <div>
        <ToastContainer/>
        <form onSubmit={handelSubmitForm}>
            <header>
                <span>Crie sua conta</span>
            </header>
            <div className={style.box}>
                <label htmlFor="surname">Apelido:</label>
                <input type="name" id='surname'  required onChange={(e)=>handleCHangeInput(e)} value={formData.surname}/>
            </div>
            <div className={style.box}>
                <label htmlFor="name">Nome completo:</label>
                <input type="name" id='name'  required onChange={(e)=>handleCHangeInput(e)} value={formData.name}/>
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
                <label htmlFor="password">Senha:</label>
                <input type="password" required onChange={(e)=>handleCHangeInput(e)} value={formData.password} id='password' placeholder='Digite a sua senha'/>
            </div>
            <div className={style.box}>
                <label htmlFor="password1">Confirmar senha:</label>
                <input type="password" required onChange={(e)=>handleCHangeInput(e)} value={formData.password1} id='password1' placeholder='Confirma a sua senha'/>
            </div>
            <div className={style.buttons}>
                <button type='submit'>Registrar</button>
            </div>
            <div className={style.newCount}>
                <span>Não tem uma conta?</span>
                <span onClick={changeForme}> Entrar.</span>
            </div>
        </form>
    </div>
  )
}
