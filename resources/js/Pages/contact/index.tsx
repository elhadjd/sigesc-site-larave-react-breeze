import Contacts from '@/Components/contact'
import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import React from 'react'

export default function contact() {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent/>
            <Contacts/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
