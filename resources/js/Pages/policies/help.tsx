import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import HelpComponent from '@/Components/policies/helpComponent'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
import React from 'react'

export default function Help({auth}:{auth:{user:User}}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent userLog={auth}/>
            <HelpComponent/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
