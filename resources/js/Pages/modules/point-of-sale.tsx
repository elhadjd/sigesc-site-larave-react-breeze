import FooterComponent from '@/Components/home/Footer';
import { HeaderComponent } from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import React from 'react';

function PointOfSale(props:{auth:{user:User},local:string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="max-w-4xl mx-auto mt-20 px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Módulo Ponto de Venda</h1>
                <p className="text-center text-gray-600 mb-8">Simplifique suas operações de venda com nossa solução intuitiva e poderosa.</p>

                <img src="/img/Sigesc Ponto de Venda (PDV).png" alt="Demonstração do Módulo Ponto de Venda" className="w-full h-auto mb-8" />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>O módulo Ponto de Venda (POS) do SIGESC é projetado para tornar as transações de venda rápidas e eficientes. Com uma interface amigável e recursos robustos, ele se adapta perfeitamente a diferentes tipos de negócios, desde pequenas lojas a grandes varejistas.</p>
                    <p>Principais funcionalidades incluem:</p>
                    <ul className="list-disc pl-5">
                        <li>Processamento rápido de vendas</li>
                        <li>Gestão de inventário em tempo real</li>
                        <li>Integração com métodos de pagamento variados</li>
                        <li>Relatórios detalhados e análises de vendas</li>
                    </ul>
                    <p>Utilizando o módulo Ponto de Venda do SIGESC, você pode aumentar a eficiência de suas operações, melhorar a experiência do cliente e impulsionar suas vendas. Experimente a transformação digital no ponto de venda e leve seu negócio ao próximo nível.</p>
                </div>

                <div className="text-center mt-8">
                    <Link href={`/${props.local}/contact`} className="text-blue-600 hover:text-blue-800">Entre em contato</Link> para saber mais ou <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800">agende uma demonstração</a>.
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}

export default PointOfSale;
