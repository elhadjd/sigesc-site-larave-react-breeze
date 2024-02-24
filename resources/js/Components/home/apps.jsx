import React from 'react'
import styles from '../../../assets/home/apps.module.scss'
import {FaFileInvoiceDollar} from 'react-icons/fa'
export default function Apps() {
  return (
    <div className={styles.principal}>
        <div>
            <div className={styles.title}>
                <h1>Os modulos do Software de gestão integrado comercial || SIGESC</h1>
            </div>
            <div className={styles.module}>
                <div className={styles.box}>
                    <span>
                        <img src="/appsImg/pdv.svg" alt="" />
                    </span>
                    <span>
                        <h2>PDV</h2>
                    </span>
                </div>
                <div className={styles.box}>
                    <span>
                        <img src="/appsImg/faturamento.png" alt="" />
                    </span>
                    <span>
                        <h2>Faturamento</h2>
                    </span>
                </div>
                <div className={styles.box}>
                    <span>
                    <img src="/appsImg/purchase.svg" alt="" />
                    </span>
                    <span>
                        <h2>Compras</h2>
                    </span>
                </div>
                <div className={styles.box}>
                    <span>
                        <img src="/appsImg/workers.png" alt="" />
                    </span>
                    <span>
                        <h2>Funcionarios</h2>
                    </span>
                </div>
                <div className={styles.box}>
                    <span>
                        <img src="/appsImg/stock.png" alt="" />
                    </span>
                    <span>
                        <h2>Stock</h2>
                    </span>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.title}>
                <h1>O Software de gestão integrado comercial é compatível com qualquer hardware</h1>
                <p>Explore a flexibilidade definitiva com nosso software de gestão integrado comercial! Compatível com todos os dispositivos, nossa solução proporciona uma experiência consistente e eficiente em desktops, tablets e smartphones. Além disso, oferecemos versões online e offline para garantir que sua empresa possa operar sem interrupções, esteja você conectado à internet ou não. Simplifique a gestão do seu negócio onde quer que esteja, com a versatilidade que você merece.</p>
            </div>
            <div className={styles.hardware}>
                <div>
                    <img src="/appsImg/sigesc tablet.gif" alt="sigesc tablet" />
                    <span>Tablets</span>
                </div>
                <div>
                    <img src="/appsImg/sigesc laptop.gif" alt="sigesc laptop" />
                    <span>Laptops</span>
                </div>
                <div>
                    <img src="/appsImg/sigesc desktop.gif" alt="sigesc desktop" />
                    <span>Computadores desktop</span>
                </div>
                <div>
                    <img src="/appsImg/sigesc terminal.gif" alt="sigesc terminal" />
                    <span>Máquinas industriais</span>
                </div>
            </div>
        </div>
    </div>
  )
}
