import FooterComponent from '@/Components/home/Footer';
import { HeaderComponent } from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import LinkHelp from '@/ui/link-help';
import { Link } from '@inertiajs/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function PointOfSale(props:{auth:{user:User},local:string}) {
    const {t} = useTranslation()
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="max-w-4xl mx-auto mt-20 px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">{t('cards.modules.pdv.desc')}</h1>
                <p className="text-center text-gray-600 mb-8">{t('cards.modules.pdv.page.introText')}</p>

                <img src="/img/Sigesc Ponto de Venda (PDV).png" alt="Demonstração do Módulo Ponto de Venda" className="w-full h-auto mb-8" />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>{t('cards.modules.pdv.page.conclusion')}</p>
                    <p>Main features:</p>
                    <ul className="list-disc pl-5">
                        <li>{t('cards.modules.pdv.page.features.0')}</li>
                        <li>{t('cards.modules.pdv.page.features.1')}</li>
                        <li>{t('cards.modules.pdv.page.features.2')}</li>
                        <li>{t('cards.modules.pdv.page.features.3')}</li>
                    </ul>
                    <p><li>{t('cards.modules.pdv.page.p')}</li></p>
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

export default PointOfSale;
