import React, { useEffect } from 'react'
import {UserLoggedProvider} from '@/contexts/loggedUser';
import {FormStateProvider} from '@/contexts/stateForm';
import style from '@/../css/index.module.scss'
import { HeaderComponent } from '../Components/home/Header';
import { Demonstration } from '@/Components/home/Demonstration';
import FooterComponent from '@/Components/home/Footer';
import { User } from '@/types';
import ModalNewsletter from '@/ui/newsletter';
export default function dashboard(props:{local: string,auth:{user:User}}) {

useEffect(()=>{
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const chatSession = searchParams.get('session')
    if(chatSession){
        localStorage.setItem('chatSession',chatSession)
        localStorage.setItem('chatUser',"support")
    }

    window.Echo.private(`User.${props.auth?.user?.id}`)
    .listen('.user.created', (e:any) => {
        console.log(e);
    });
},[])

  return (
    <UserLoggedProvider>
      <div className={`${style.App} relative`}>
        <FormStateProvider>
        <ModalNewsletter local={props.local}/>
            <HeaderComponent auth={props.auth} local={props.local}/>
                <Demonstration auth={props.auth}/>
                {/* <Progress/> */}
            <FooterComponent/>
        </FormStateProvider>
      </div>
    </UserLoggedProvider>
  )
}
