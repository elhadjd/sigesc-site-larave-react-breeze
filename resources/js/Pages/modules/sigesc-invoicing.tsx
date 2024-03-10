import React from 'react';
import FooterComponent from '@/Components/home/Footer';
import { HeaderComponent } from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import LinkHelp from '@/ui/link-help';
import { useTranslation } from 'react-i18next';
function Invoicing(props:{auth:{user:User},local:string}) {
    const {t} = useTranslation()
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">{t('cards.modules.invoicing.desc')}</h1>
                <p className="text-center text-gray-600 mb-8">{t('cards.modules.invoicing.page.conclusion')}</p>
                <img src="/img/Sigesc Paineies proficionais.png" alt="Interface do Módulo de Faturamento SIGESC" className="w-full h-auto mb-8 shadow-lg" />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>{t('cards.modules.invoicing.page.introText')}</p>
                    <p>Main features:</p>
                    <ul className="list-disc pl-5">
                        <li>{t('cards.modules.invoicing.page.features.0')}</li>
                        <li>{t('cards.modules.invoicing.page.features.1')}</li>
                        <li>{t('cards.modules.invoicing.page.features.2')}</li>
                        <li>{t('cards.modules.invoicing.page.features.3')}</li>
                        <li>{t('cards.modules.invoicing.page.features.4')}</li>
                    </ul>
                    <p>{t('cards.modules.invoicing.page.p')}</p>
                </div>

                <div className="text-center mt-8">
                    <LinkHelp local={props.local}/>
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}

export default Invoicing;
