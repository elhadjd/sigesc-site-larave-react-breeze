import React from 'react';
import { motion } from 'framer-motion';

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden md:flex"
      >
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/Software sigesc.jpg" alt="SOFTWARE SIGESC" />
        </div>
        <div className="p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">SOFTWARE SIGESC</h2>
            <CardSection title="Potencialize Suas Vendas com Nosso Software de Gestão de PDV Avançado."
              content="Eleve a eficiência das suas vendas com o Módulo de PDV de última geração, integrado ao nosso completo software de gestão." />
            <CardSection title="Controle Financeiro Simplificado com Nosso Software de Gestão de Faturas."
              content="Simplifique a emissão de faturas e mantenha suas finanças em ordem com o Módulo de Faturamento do nosso abrangente software de gestão." />
            <CardSection title="Otimize Suas Compras com Nosso Software de Gestão de Processos de Compra."
              content="Aprimore seu processo de compra com eficiência utilizando o Módulo de Compras do nosso software de gestão, integrando todas as etapas de maneira simplificada." />
          </div>
          <a href="https://geral.sisgesc.net/gettingStarted" className="text-indigo-600 hover:text-indigo-500 mt-4 block" style={{color: '#9333ea'}}>Registre-se gratuitamente</a>
        </div>
      </motion.div>
    </div>
  );
}

function CardSection({ title, content }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="hover:bg-gray-100 p-2 rounded-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
}
