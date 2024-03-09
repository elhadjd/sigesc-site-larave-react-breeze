import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export const Prices = () => {
  const handleSelectPlan = (route:string) => {
    router.get(route)
  };

  const {t} = useTranslation()

  return (
    <div className="mt-16 bg-[var(--appColor)] py-12 text-center flex flex-col gap-6">
      <div className="text-white">
        <h1 className="text-3xl font-bold">{t('cards.prices.title')}</h1>
        <p className="mt-4 mx-auto max-w-4xl text-lg">{t('cards.prices.desc')}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <PlanCard title="Free" price="0.0kz / 2 Meses" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/0')} />
        <PlanCard title="Expert" price="36.720,00kz / 6 Meses" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/1')} />
        <PlanCard title="Ultimate" price="42.840,00kz / 1 Ano" features={["Todos os módulos", "Venda ilimitada", "Clientes Ilimitado", "Fornecedores Ilimitado"]} onSelectPlan={() => handleSelectPlan('/CreateCompany/2')} />
      </div>
      <div className="text-white px-4">
        <Link href="/contact" className="text-blue-600 hover:text-blue-800">{t('words.help')}</Link> para mais informações ou <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800 font-semibold">{t('words.requestDemo')}</a>
      </div>
    </div>
  );
};

const PlanCard = ({ title, price, features, onSelectPlan }:
    {title:string,price:string,features:string[],onSelectPlan():void})=> {
    const {t} = useTranslation()
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 w-60">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-xl font-bold">{price}</span>
            <ul className="text-left">
            {features.map((feature, index) => (
                <li key={index} className="list-disc list-inside">{feature}</li>
            ))}
            </ul>
            <button onClick={onSelectPlan} className="mt-auto bg-[var(--buttonsColor)] text-white font-semibold py-2 px-4 rounded hover:opacity-90 w-full">{t('words.join')}</button>
        </motion.div>
    )
}
