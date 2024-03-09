import React from 'react';
import { AiFillCrown, AiFillPieChart, AiOutlineAntDesign, AiOutlineCreditCard } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Why = ({ actionPreviewText }) => {
    const {t} = useTranslation()
  const sections = [
    {
      id: 'text2',
      Icon: AiFillCrown,
      title: t('cards.why.1.title'),
      description: t('cards.why.1.desc'),
    },
    {
      id: 'text3',
      Icon: AiFillPieChart,
      title: t('cards.why.2.title'),
      description: t('cards.why.2.desc'),
    },
    {
      id: 'text4',
      Icon: AiOutlineCreditCard,
      title: t('cards.why.3.title'),
      description: t('cards.why.3.desc'),
    },
    {
      id: 'text5',
      Icon: AiOutlineAntDesign,
      title: t('cards.why.4.title'),
      description: t('cards.why.4.desc'),
    },
  ];

  return (
    <div className="p-2 md:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold " style={{color:"#9333ea"}}>{t('cards.why.title')}</h1>
        <p className="text-lg text-gray-700 mt-4">
          {t('cards.why.desc')}
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
