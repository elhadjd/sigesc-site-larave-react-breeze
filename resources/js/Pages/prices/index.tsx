import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { Prices } from '@/Components/listPrices/Prices'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
import { User } from '@/types'
export default function PricesComponent(props:{auth:{user:User}}) {
  return (

        <UserLoggedProvider>
            <div className='relative'>
                <FormStateProvider>
                    <HeaderComponent userLog={props.auth}/>
                        <Prices/>
                    <FooterComponent/>
                </FormStateProvider>
            </div>
        </UserLoggedProvider>
  )
}
