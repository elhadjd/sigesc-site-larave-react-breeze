import FooterComponent from '@/Components/home/Footer';
import {HeaderComponent} from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import LinkHelp from '@/ui/link-help';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function EmployeeManagement(props:{auth:{user:User}, local:string}) {
    const {t} = useTranslation()
    const introText = t('cards.modules.employees.page.introText');
    const features = [
        t('cards.modules.employees.page.features.0'),
        t('cards.modules.employees.page.features.1'),
        t('cards.modules.employees.page.features.2'),
        t('cards.modules.employees.page.features.3'),
        t('cards.modules.employees.page.features.4')
    ];

  const conclusion = t('cards.modules.employees.page.conclusion');

  const imagesData = [
    {
      src: "/img/sigesc Software de Gestao Integrado comercial lista de funcionarios.png",
      alt: "Cadastro de Funcionários",
      title: t('cards.modules.employees.page.data.0.title'),
      description: t('cards.modules.employees.page.data.0.desc'),
    },
    {
      src: "/img/sigesc Software de Gestao Integrado comercial relatorio de funcionario.png",
      alt: "Avaliação de Desempenho",
      title: t('cards.modules.employees.page.data.1.title'),
      description: t('cards.modules.employees.page.data.1.desc'),
    },
  ];

  return (
    <UserLoggedProvider>
      <FormStateProvider>
        <HeaderComponent auth={props.auth} local={props.local}/>
        <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">{t('cards.modules.employees.desc')}</h1>
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

export default EmployeeManagement;
