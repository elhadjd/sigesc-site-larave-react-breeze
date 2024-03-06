import React from 'react';
import { motion } from 'framer-motion';
import { HeaderComponent } from '@/Components/home/Header';
import { FormStateProvider } from '@/contexts/stateForm';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { User } from '@/types';
import FooterComponent from '@/Components/home/Footer';

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



const successStories = [
    {
        name: "Alcides joao alfredo",
        position: "Diretora de Operações",
        company: "Tech Innovations",
        image: "/clients/alcides.jpg",
        testimonial: "O SIGESC revolucionou a maneira como gerenciamos nossas operações diárias, trazendo eficiência e clareza para nosso trabalho."
    },
    {
        name: "Ali Sanoh",
        position: "CEO",
        company: "StartUp XYZ",
        image: "/clients/ali.jpg",
        testimonial: "Graças ao SIGESC, conseguimos escalar nosso negócio mais rapidamente e com mais confiança."
    },
    {
        name: "Kalil koulibaly",
        position: "Gerente de TI",
        company: "Soluções Digitais",
        image: "/clients/kalil.jpg",
        testimonial: "O SIGESC facilitou nossa transição para operações digitais, melhorando significativamente nossa produtividade."
    },
    {
        name: "Mamoudou koulibaly",
        position: "Proprietário",
        company: "Martins Comércio",
        image: "/clients/mamoudou.jpg",
        testimonial: "Com o SIGESC, obtivemos uma visão clara do nosso estoque e vendas, otimizando nossos processos comerciais."
    },
    {
        name: "Pathe diallo",
        position: "Diretora Financeira",
        company: "Fernandes Finanças",
        image: "/clients/pathe.jpg",
        testimonial: "O módulo de faturamento do SIGESC transformou nossa gestão financeira, tornando tudo mais rápido e simples."
    },
    {
        name: "Pedro Álvares",
        position: "Consultor de Vendas",
        company: "Álvares e Associados",
        image: "/path/to/pedro-alvares-image.jpg",
        testimonial: "O SIGESC nos ajudou a entender melhor nossos clientes e aprimorar nosso processo de vendas."
    },
    {
        name: "Soulaymane Diallo",
        position: "Especialista em Logística",
        company: "LogisTech",
        image: "/clients/soulaymane.jpg",
        testimonial: "A funcionalidade de gerenciamento de compras do SIGESC simplificou nossa cadeia de suprimentos."
    },
    {
        name: "Henrique Dias",
        position: "CEO",
        company: "Dias Innovations",
        image: "/path/to/henrique-dias-image.jpg",
        testimonial: "O SIGESC nos proporcionou a inovação necessária para manter nossa empresa à frente no mercado."
    },
];

export default function SuccessStoriesPage(props:{auth:{user: User},local: string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="container mt-20 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Casos de Sucesso</h1>
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
