import FooterComponent from '@/Components/home/Footer';
import {HeaderComponent} from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import LinkHelp from '@/ui/link-help';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function StockManagement(props:{auth:{user:User}, local:string}) {
    const {t} = useTranslation()
  const introText = t('cards.modules.stock.page.introText');
  const features = [
    t('cards.modules.stock.page.features.0'),
    t('cards.modules.stock.page.features.1'),
    t('cards.modules.stock.page.features.2'),
    t('cards.modules.stock.page.features.3'),
    t('cards.modules.stock.page.features.4')
  ];

  const conclusion = t('cards.modules.stock.page.conclusion');

  const imagesData = [
    {
        src: "/img/sigesc Software de Gestao Integrado comercial gerenciamento de stock.png",
        alt: "sigesc Inventário por data",
        title: t('cards.modules.stock.page.data.0.title'),
        description: t('cards.modules.stock.page.data.0.desc'),
    },
    {
        src: "/img/Visibilidade do Inventário.png",
        alt: "Visibilidade do Inventário",
        title: t('cards.modules.stock.page.data.1.title'),
        description: t('cards.modules.stock.page.data.1.desc'),
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial lista de armagens.png",
        alt: "SIGESC-SOFT Software de Gestão Integrado comercial lista de armagens",
        title: t('cards.modules.stock.page.data.2.title'),
        description: t('cards.modules.stock.page.data.2.desc'),
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png",
        alt: "Transfere produtos entre armagens",
        title: t('cards.modules.stock.page.data.3.title'),
        description: t('cards.modules.stock.page.data.3.desc'),
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial catálogo de produtos.png",
        alt: "Catálogo de produtos",
        title: t('cards.modules.stock.page.data.4.title'),
        description: t('cards.modules.stock.page.data.4.desc'),
    },
  ];

  return (
    <UserLoggedProvider>
      <FormStateProvider>
        <HeaderComponent auth={props.auth} local={props.local}/>
        <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">{t('cards.modules.stock.desc')}</h1>
          <p className="text-lg text-gray-700 mb-6">{introText}</p>
          <h2 className="text-2xl font-semibold mb-4">Main features:</h2>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
              {features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
              ))}
          </ul>

          <p className="text-lg text-gray-700 mb-8">{conclusion}</p>
          {imagesData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0,}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                className="mb-8"
                >
                <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
                <img src={data.src} alt={data.alt} className="w-full h-auto shadow-lg mb-2" />
                <p className="text-gray-700">{data.description}</p>
              </motion.div>
          ))}
        </div>
        <div className="text-center px-4 mb-4">
            <LinkHelp local={props.local}/>
        </div>
        <FooterComponent/>
      </FormStateProvider>
    </UserLoggedProvider>
  );
}

export default StockManagement;
