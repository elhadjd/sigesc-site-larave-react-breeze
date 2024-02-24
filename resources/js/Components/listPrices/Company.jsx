import React, { useEffect } from 'react'
import styles from '../../assets/listPrices/companies.module.scss'
import { BiCaretDown, BiSearch } from 'react-icons/bi'
import { newCompanyService } from '../../services/newCompanyService'
import { ToastContainer } from 'react-toastify';
import { useUploadImage } from '../../services/UploadImage';

export default function Company() {
  
  const {
    countries,
    handlerSearchCountry,
    stateFormListCountry,
    setStateFormListCountry,
    handlerChoseCountry,
    formulary,
    handelChangeInputs,
    handleSubmitForm,
    activities,
    setStateListActivities,
    stateListActivities,
    handlerChoseActivity,
    handlerSearchActivity
  } = newCompanyService()

  const {onFileChange} = useUploadImage(formulary)
  return (
      <div className={styles.principal}>
        <ToastContainer/>
          <div className={styles.company}>
            <form onSubmit={handleSubmitForm}>
              <span className={styles.box}>
                <label htmlFor="name">Nome </label>
                <input type="text" value={formulary.name} onChange={(e)=>handelChangeInputs(e)} required id='name' placeholder='Digite nome da empresa'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="nif">Identificação fiscal </label>
                <input type="text" id='nif' onChange={(e)=>handelChangeInputs(e)} required value={formulary.nif} placeholder='Numero de identificação fiscal'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="phone">Telefone </label>
                <input type="text" id='phone' onChange={(e)=>handelChangeInputs(e)} required value={formulary.phone} placeholder='Digite numero da telefone'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="email">E-mail </label>
                <input type="email" id='email' required onChange={(e)=>handelChangeInputs(e)} value={formulary.email} placeholder='Digite seu email'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="country">Pais </label>
                <button type='button'>
                  <span onClick={()=>setStateFormListCountry(! stateFormListCountry)}>{formulary.country.name!=''?formulary.country.name:'Escolhe seu pais'}</span>
                  <BiCaretDown/>
                    {
                      stateFormListCountry && (
                        <div className={styles.listCountry}>
                          <span className={styles.search}>
                            <input onChange={(e)=>handlerSearchCountry(e.target.value)} type="search" placeholder='Pesquisar...' />
                              <BiSearch/>
                          </span>
                          {
                            countries.list.map((country,index)=>
                              <div key={index} onClick={()=>handlerChoseCountry(country)}>{country.name}</div>
                            )
                          }
                      </div>
                      )
                    }
                </button>
              </span>
                
              <span className={styles.box}>
                <label htmlFor="country">Tipo de atividade </label>
                <button type='button'>
                  <span onClick={()=>setStateListActivities(! stateListActivities)}>{formulary.activity.name!=''?formulary.activity.name:'Escolhe seu pais'}</span>
                  <BiCaretDown/>
                    {
                      stateListActivities && (
                        <div className={styles.listCountry}>
                          <span className={styles.search}>
                            <input onChange={(e)=>handlerSearchActivity(e.target.value)} type="search" placeholder='Pesquisar...' />
                              <BiSearch/>
                          </span>
                          {
                            activities.list.map((activity,index)=>
                              <div key={index} onClick={()=>handlerChoseActivity(activity)}>{activity.name}</div>
                            )
                          }
                      </div>
                      )
                    }
                </button>
              </span>

              <span className={styles.box}>
                <label htmlFor="city">Cidade </label>
                <input type="text" onChange={(e)=>handelChangeInputs(e)} id='city' required value={formulary.city} placeholder='Digite sua cidade'/>
              </span>
              <button type={'submit'}>Cadastrar</button>
            </form>
          </div>
        </div>
  )
}

