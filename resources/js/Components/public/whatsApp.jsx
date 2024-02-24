import React from 'react'
import styles from '../../../assets/buttons/whatsApp.module.scss'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from '@inertiajs/react'
export default function WhatsApp() {
  return (
    <div className={styles.whatsApp}>
      <Link href='https://wa.me/+244929147445'>
        <BsWhatsapp/>
        WhatsApp
      </Link>
    </div>
  )
}
