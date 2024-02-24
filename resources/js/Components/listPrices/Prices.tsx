import React from 'react'
import style from '../../../assets/listPrices/prices.module.scss'
import { router } from '@inertiajs/react'
export const Prices = () => {
  const handleSelectPlane = ((route:string)=>{
    return router.get(route)
  })
  return (
    <div className={style.principal}>
      <div className={style.description}>
        <h1>Soluções Acessíveis para o Sucesso: Conheça os Preços do Nosso Software de Gestão Integrado comercial.</h1>
        <p>Descubra pacotes personalizados que se adequam ao seu negócio. Nosso software de gestão integrado comercial oferece recursos como PDV avançado, controle financeiro, gestão de compras e inventário. Maximize a eficiência operacional enquanto mantém os custos sob controle. Escolha a solução certa para impulsionar o crescimento da sua empresa. Explore nossos preços competitivos e leve seu negócio ao próximo nível com inovação, segurança e eficiência.</p>
      </div>
      <div className={style.list}>
        <div>
          <div>
            <h3>Gratuita</h3>
            <span><h2>0.0kz</h2>/2Meses</span>
          </div>
          <div>
            <li>Todos os modulos</li>
            <li>Venda ilimitada</li>
            <li>Clientes Ilimitado</li>
            <li>Fornacedores Ilimitado</li>
          </div>
          <div>
            <button onClick={()=>handleSelectPlane('/CreateCompany/0')}>Aderir</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Proficional</h3>
            <span><h2>36.720,00kz</h2>/6 Meses</span>
          </div>
          <div>
          <li>Todos os modulos</li>
            <li>Venda ilimitada</li>
            <li>Clientes Ilimitado</li>
            <li>Fornacedores Ilimitado</li>
          </div>
          <div>
            <button type='button' onClick={()=>handleSelectPlane('/CreateCompany/1')}>Aderir</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Ultimate</h3>
            <span><h2>42.840,00kz</h2>/1 Ano</span>
          </div>
          <div>
          <li>Todos os modulos</li>
            <li>Venda illimitada</li>
            <li>Clientes Illimitado</li>
            <li>Fornacedores Illimitado</li>
          </div>
          <div>
            <button type='button' onClick={()=>handleSelectPlane('/CreateCompany/2')}>Aderir</button>
          </div>
        </div>
      </div>
    </div>
  )
}
