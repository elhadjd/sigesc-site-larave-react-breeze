import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { Prices } from '@/Components/listPrices/Prices'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
export default function PricesComponent(props:{auth:{user:User},local:string}) {
  return (

        <UserLoggedProvider>
            <div className='relative'>
                <FormStateProvider>
                    <HeaderComponent  auth={props.auth} local={props.local}/>
                        <Prices/>
                    <FooterComponent/>
                </FormStateProvider>
            </div>
        </UserLoggedProvider>
  )
}
