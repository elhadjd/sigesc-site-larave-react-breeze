import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';

export const Prices = () => {
  const handleSelectPlan = (route:string) => {
    router.get(route)
  };

  return (
    <div className="mt-20 bg-[var(--appColor)] py-12 text-center flex flex-col gap-6">
      <div className="text-white">
        <h1 className="text-3xl font-bold">Soluções Acessíveis para o Sucesso: Conheça os Preços do Nosso Software de Gestão Integrado comercial.</h1>
        <p className="mt-4 mx-auto max-w-4xl text-lg">Descubra pacotes personalizados que se adequam ao seu negócio. Nosso software de gestão integrado comercial oferece recursos como PDV avançado, controle financeiro, gestão de compras e inventário. Maximize a eficiência operacional enquanto mantém os custos sob controle. Escolha a solução certa para impulsionar o crescimento da sua empresa. Explore nossos preços competitivos e leve seu negócio ao próximo nível com inovação, segurança e eficiência.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <PlanCard title="Gratuita" price="0.0kz / 2 Meses" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/0')} />
        <PlanCard title="Profissional" price="36.720,00kz / 6 Meses" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/1')} />
        <PlanCard title="Ultimate" price="42.840,00kz / 1 Ano" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/2')} />
      </div>
      <div className="text-white px-4">
        <Link href="/contact" className="text-blue-600 hover:text-blue-800">Entre em contato</Link> para mais informações ou <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800 font-semibold">Solicite uma Demonstração</a> para ver o módulo em ação.
      </div>
    </div>
  );
};

const PlanCard = ({ title, price, features, onSelectPlan }:
    {title:string,price:string,features:string[],onSelectPlan():void}) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 w-60">
    <h3 className="text-lg font-semibold">{title}</h3>
    <span className="text-xl font-bold">{price}</span>
    <ul className="text-left">
      {features.map((feature, index) => (
        <li key={index} className="list-disc list-inside">{feature}</li>
      ))}
    </ul>
    <button onClick={onSelectPlan} className="mt-auto bg-[var(--buttonsColor)] text-white font-semibold py-2 px-4 rounded hover:opacity-90 w-full">Aderir</button>
  </motion.div>
);
