import React from 'react';
import { motion } from 'framer-motion';
import { HeaderComponent } from '@/Components/home/Header';
import { FormStateProvider } from '@/contexts/stateForm';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { User } from '@/types';
import FooterComponent from '@/Components/home/Footer';
import { useTranslation } from 'react-i18next';

const SuccessStory = ({ story }:{story:any}) => {

    const customers = [

    ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-4"
    >
      <div className="p-4">
        <blockquote className="italic text-gray-600">
          {story.quote}
        </blockquote>


        <div className="flex items-center mt-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={story.image} alt={story.clientName} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{story.testimonial}</p>
            <p className="text-sm text-gray-500">{story.name}, {story.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SuccessStoriesPage(props:{auth:{user: User},local: string}) {
    const {t} = useTranslation()
    const successStories = [
        {
            name: "Alcides joao alfredo",
            company: "Tech Innovations",
            image: "/clients/alcides.jpg",
            testimonial: t('cards.happyClients.0')
        },
        {
            name: "Ali Sanoh",
            company: "StartUp XYZ",
            image: "/clients/ali.jpg",
            testimonial: t('cards.happyClients.1')
        },
        {
            name: "Kalil koulibaly",
            company: "Soluções Digitais",
            image: "/clients/kalil.jpg",
            testimonial: t('cards.happyClients.2')
        },
        {
            name: "Mamoudou koulibaly",
            company: "Martins Comércio",
            image: "/clients/mamoudou.jpg",
            testimonial: t('cards.happyClients.3')
        },
        {
            name: "Pathe diallo",
            company: "Fernandes Finanças",
            image: "/clients/pathe.jpg",
            testimonial: t('cards.happyClients.4')
        },
        {
            name: "Pedro Álvares",
            company: "Álvares e Associados",
            image: "/path/to/pedro-alvares-image.jpg",
            testimonial: t('cards.happyClients.5')
        },
        {
            name: "Soulaymane Diallo",
            company: "LogisTech",
            image: "/clients/soulaymane.jpg",
            testimonial: t('cards.happyClients.6')
        },
        {
            name: "Henrique Dias",
            company: "Dias Innovations",
            image: "/path/to/henrique-dias-image.jpg",
            testimonial: t('cards.happyClients.7')
        },
    ];

  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="container mt-20 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">{t('cards.happyClients.title')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {successStories.map((story, index) => (
                    <SuccessStory key={index} story={story} />
                    ))}
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}
