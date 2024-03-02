import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import TermsComponent from '@/Components/policies/termsComponent'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
import React from 'react'

export default function Terms({auth}:{auth:{user:User}}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent userLog={auth}/>
            <TermsComponent/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
