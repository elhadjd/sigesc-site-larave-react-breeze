import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import Payment from '@/Components/listPrices/Payment'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import React from 'react'

export default function paymentsComponent({fiscalIdentification,email}:{email?: string,fiscalIdentification?:string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent/>
                <Payment email={email} fiscalIdentification={fiscalIdentification}/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
