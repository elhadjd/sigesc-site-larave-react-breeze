import React from 'react'
import styles from '../../../assets/home/Cards.module.scss'
export default function Cards() {
  return (
    <div className={styles.Cards}>
        <div className={styles.card}>
            <span className={styles.image}>
                <h2>SOFTWARE SIGESC</h2>
                <img src="/img/Software sigesc.jpg" alt="" />
            </span>
            <div>
                <span>
                    <h3>Potencialize Suas Vendas com Nosso Software de Gestão de PDV Avançado.</h3>
                    <p>Eleve a eficiência das suas vendas com o Módulo de PDV de última geração, integrado ao nosso completo software de gestão.</p>
                </span>
                <span>
                    <h3>Controle Financeiro Simplificado com Nosso Software de Gestão de Faturas.</h3>
                    <p>Simplifique a emissão de faturas e mantenha suas finanças em ordem com o Módulo de Faturamento do nosso abrangente software de gestão.</p>
                </span>
                <span>
                    <h3>Otimize Suas Compras com Nosso Software de Gestão de Processos de Compra.</h3>
                    <p>Aprimore seu processo de compra com eficiência utilizando o Módulo de Compras do nosso software de gestão, integrando todas as etapas de maneira simplificada.</p>
                </span>
                <a href="https://geral.sisgesc.net/gettingStarted">Registra-se gratuitamente</a>
            </div>
        </div>
    </div>
  )
}
