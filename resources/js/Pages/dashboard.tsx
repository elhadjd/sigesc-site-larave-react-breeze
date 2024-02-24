import React, { useEffect } from 'react'
import {UserLoggedProvider} from '@/contexts/loggedUser';
import {FormStateProvider} from '@/contexts/stateForm';
import style from '@/../css/index.module.scss'
import { HeaderComponent } from '../Components/home/Header';
import { Demonstration } from '@/Components/home/Demonstration';
import FooterComponent from '@/Components/home/Footer';

export default function dashboard(props:{local: string}) {
  return (
    <UserLoggedProvider><div id='google_translate_element'></div>
      <div className={style.App}>
        <FormStateProvider>
            <HeaderComponent/>
            <Demonstration/>

                {/* <Progress/> */}
            <FooterComponent/>
        </FormStateProvider>
      </div>
    </UserLoggedProvider>
  )
}
