
import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

import { FaFileInvoiceDollar, FaMoneyBillWave, FaShoppingCart, FaUsers, FaWarehouse } from 'react-icons/fa';
const apps = [
    {
        title: 'PDV',
        img: '/appsImg/pdv.svg',
        desc:'Sigesc Ponto de Venda (PDV) Pagamentos',
        href:route('modules',{module:'point-of-sale'}),
        Icon: FaShoppingCart
    },
    {
        title: 'Faturamento',
        img: '/appsImg/faturamento.png',
        desc:'Sigesc modulo faturamento',
        href:route('modules',{module:'sigesc-invoicing'}),
        Icon: FaFileInvoiceDollar
    },
    {
        title: 'Compras',
        img: '/appsImg/purchase.svg',
        desc:'Demonstração do Módulo de Gerenciamento de Compras',
        href: route('modules',{module:'purchase-management'}),
        Icon: FaMoneyBillWave
    },
    {
        title: 'Funcionarios',
        img: '/appsImg/workers.png',
        desc:'Sigesc modulo funcionários',
        href:route('modules',{module:'employe-management'}),
        Icon: FaUsers
    },
    {
        title: 'Stock',
        img: '/appsImg/stock.png',
        desc:'Sigesc modulo de gerenciamento de stock',
        href: route('modules',{module:'stock-management'}),
        Icon: FaWarehouse
    },
];



export default function Apps() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Explore Nossos Módulos</h1>
        <p className="text-xl text-gray-700">Potencialize seu negócio com nosso software de gestão integrado comercial.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app, index) => (
          <motion.div key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <motion.div
              className="p-4 rounded-full bg-blue-100 mb-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <app.Icon className="text-4xl text-blue-500" />
            </motion.div>
            <Link href={app.href} className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{app.title}</h2>
              <p className="text-gray-600">{app.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
