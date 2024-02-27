import Contacts from '@/Components/contact'
import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
import React from 'react'

export default function contact(props:{auth: {user:User}}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent userLog={props.auth}/>
            <Contacts/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
