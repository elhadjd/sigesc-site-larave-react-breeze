import React from 'react';
import FooterComponent from '@/Components/home/Footer';
import { HeaderComponent } from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
function Invoicing(props:{auth:{user:User},local:string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Módulo de Faturamento</h1>
                <p className="text-center text-gray-600 mb-8">Automatize seu processo de faturamento com eficiência, precisão e conformidade.</p>

                <img src="/img/Sigesc Paineies proficionais.png" alt="Interface do Módulo de Faturamento SIGESC" className="w-full h-auto mb-8 shadow-lg" />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>Com o módulo de Faturamento do SIGESC, empresas de todos os tamanhos podem simplificar a gestão de faturamento, reduzindo erros e economizando tempo. Nossa solução foi projetada para se adaptar às necessidades específicas do seu negócio, oferecendo personalização e flexibilidade.</p>
                    <p>Características principais:</p>
                    <ul className="list-disc pl-5">
                    <li>Emissão rápida de faturas e recibos</li>
                    <li>Gestão de contas a receber e a pagar</li>
                    <li>Relatórios financeiros detalhados</li>
                    <li>Compatibilidade com múltiplos métodos de pagamento</li>
                    <li>Integração fácil com outros módulos SIGESC</li>
                    </ul>
                    <p>Optar pelo módulo de Faturamento do SIGESC significa escolher uma solução que apoia o crescimento do seu negócio, assegura a conformidade fiscal e oferece uma visão clara da sua saúde financeira.</p>
                </div>

                <div className="text-center mt-8">
                <Link href={`/${props.local}/contact`} className="text-blue-600 hover:text-blue-800">Entre em contato</Link> para mais informações ou <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800 font-semibold">Solicite uma Demonstração</a> para ver o módulo em ação.
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}

export default Invoicing;
