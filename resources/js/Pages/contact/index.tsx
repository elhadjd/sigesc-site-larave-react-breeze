import Contacts from '@/Components/contact'
import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
import React from 'react'

export default function contact(props:{auth: {user:User},local:string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <Contacts auth={props.auth}/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
