import FooterComponent from '@/Components/home/Footer'
import { HeaderComponent } from '@/Components/home/Header'
import { Prices } from '@/Components/listPrices/Prices'
import { UserLoggedProvider } from '@/contexts/loggedUser'
import { FormStateProvider } from '@/contexts/stateForm'
export default function PricesComponent() {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent/>
                <Prices/>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  )
}
