import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FeatureShowcase () {
  const {t} = useTranslation()
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
            <h2 className="text-2xl font-bold text-purple-600 mb-2">{t('cards.FeatureShowcase.title')} </h2>
            <CardSection title={t('cards.FeatureShowcase.1.title')} content={t('cards.FeatureShowcase.1.desc')} />
            <CardSection title={t('cards.FeatureShowcase.2.title')} content={t('cards.FeatureShowcase.2.desc')} />
            <CardSection title={t('cards.FeatureShowcase.3.title')} content={t('cards.FeatureShowcase.3.desc')}/>
          </div>
          <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-indigo-600 hover:text-indigo-500 mt-4 block" style={{color: '#9333ea'}}>{t('words.register')}</a>
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
