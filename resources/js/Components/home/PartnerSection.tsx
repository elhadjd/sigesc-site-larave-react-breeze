import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function BecomePartnerSection() {
    const {t} = useTranslation()
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-12 px-4" style={{gridArea: "P"}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center rounded-lg bg-white shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('cards.partner.title')}</h2>
        <p className="text-gray-600 mb-8">
            {t('cards.partner.desc')}
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="en/auth/register" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            {t('words.registerNow')}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
