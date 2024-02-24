import React from 'react'
import style from '../../../assets/home/why.module.scss'
import {AiFillCrown,AiFillPieChart,AiOutlineAntDesign,AiOutlineCreditCard} from 'react-icons/ai'
export const Why = ({actionPreviewText}) => {
  return (
    <div className={style.principal}>
        <div className={style.title}>
            <h1>Por que a Sigesc?</h1>
            <p>
                Potencialize seu Negócio com Nosso Software de Gestão Integrado comercial
            </p>
        </div>
        <div className={style.container}>
            <section>
                <header>
                    <div><AiFillCrown/></div>
                    <h1>Sistema de PDV Avançado</h1>
                </header>
                <div>
                    <p id='text2' onClick={()=>actionPreviewText('text2')}>
                    Melhore a eficiência das suas vendas com o nosso Módulo de PDV de última geração. Com uma interface intuitiva e recursos avançados, simplificamos a gestão das transações e o atendimento ao cliente. Agilize o processo de vendas, mantenha o controle do estoque em tempo real e ofereça uma experiência de compra excepcional.
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiFillPieChart/></div>
                    <h1>Emissão de Faturas e Controle Financeiro</h1>
                </header>
                <div>
                    <p id='text3' onClick={()=>actionPreviewText('text3')}>
                    Simplifique a emissão de faturas e controle as finanças da sua empresa com o nosso Módulo de Faturamento. Crie faturas profissionais, acompanhe pagamentos e gerencie contas a receber com facilidade. Tenha uma visão clara da saúde financeira da sua empresa e mantenha-se sempre em dia com suas obrigações fiscais.
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiOutlineCreditCard/></div>
                    <h1>Gestão de Compras Simplificada</h1>
                </header>
                <div>
                    <p id='text4' onClick={()=>actionPreviewText('text4')}>
                    Otimize o seu processo de compra com o nosso Módulo de Compras. Tenha um controle completo sobre os fornecedores, cotações, pedidos e recebimentos de mercadorias. Economize tempo e dinheiro com análises de custos e estoque integradas, garantindo que você sempre tenha os produtos certos no momento certo.
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiOutlineAntDesign/></div>
                    <h1>Controle de Estoque e Gestão de Equipe Eficiente</h1>
                </header>
                <div>
                    <p id='text5' onClick={()=>actionPreviewText('text5')}>
                    Otimize o seu estoque e gerencie a força de trabalho com os nossos Módulos de Estoque e Gestão de Funcionários. Mantenha um controle preciso do seu estoque, evite estoques excessivos ou falta de produtos. Além disso, gerencie a programação de funcionários, salários e desempenho de equipe de forma eficaz para impulsionar a produtividade.                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}
