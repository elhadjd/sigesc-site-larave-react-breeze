import React from 'react';
import { AiFillCrown, AiFillPieChart, AiOutlineAntDesign, AiOutlineCreditCard } from 'react-icons/ai';
import { motion } from 'framer-motion';

export const Why = ({ actionPreviewText }) => {
  const sections = [
    {
      id: 'text2',
      Icon: AiFillCrown,
      title: "Sistema de PDV Avançado",
      description: "Melhore a eficiência das suas vendas com o nosso Módulo de PDV de última geração. Com uma interface intuitiva e recursos avançados, simplificamos a gestão das transações e o atendimento ao cliente. Agilize o processo de vendas, mantenha o controle do estoque em tempo real e ofereça uma experiência de compra excepcional.",
    },
    {
      id: 'text3',
      Icon: AiFillPieChart,
      title: "Emissão de Faturas e Controle Financeiro",
      description: "Simplifique a emissão de faturas e controle as finanças da sua empresa com o nosso Módulo de Faturamento. Crie faturas profissionais, acompanhe pagamentos e gerencie contas a receber com facilidade. Tenha uma visão clara da saúde financeira da sua empresa e mantenha-se sempre em dia com suas obrigações fiscais.",
    },
    {
      id: 'text4',
      Icon: AiOutlineCreditCard,
      title: "Gestão de Compras Simplificada",
      description: "Otimize o seu processo de compra com o nosso Módulo de Compras. Tenha um controle completo sobre os fornecedores, cotações, pedidos e recebimentos de mercadorias. Economize tempo e dinheiro com análises de custos e estoque integradas, garantindo que você sempre tenha os produtos certos no momento certo.",
    },
    {
      id: 'text5',
      Icon: AiOutlineAntDesign,
      title: "Controle de Estoque e Gestão de Equipe Eficiente",
      description: "Otimize o seu estoque e gerencie a força de trabalho com os nossos Módulos de Estoque e Gestão de Funcionários. Mantenha um controle preciso do seu estoque, evite estoques excessivos ou falta de produtos. Além disso, gerencie a programação de funcionários, salários e desempenho de equipe de forma eficaz para impulsionar a produtividade.",
    },
  ];

  return (
    <div className="p-2 md:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold " style={{color:"#9333ea"}}>Por que a Sigesc?</h1>
        <p className="text-lg text-gray-700 mt-4">
          Potencialize seu Negócio com Nosso Software de Gestão Integrado comercial
        </p>
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center space-y-4 p-6">
        {sections.map(({ id, Icon, title, description }) => (
          <motion.div key={id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-auto bg-white rounded-lg shadow p-6"
            onClick={() => actionPreviewText(id)}
          >
            <div className="text-center text-purple-600">
              <Icon className="text-4xl" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2" id={id}>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
