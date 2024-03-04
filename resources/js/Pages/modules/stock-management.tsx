import FooterComponent from '@/Components/home/Footer';
import {HeaderComponent} from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

function StockManagement(props:{auth:{user:User}, local:string}) {
  // Texto introdutório, características e conclusão para o módulo de Gerenciamento de Stock
  // Substitua o conteúdo conforme necessário
  const introText = `O módulo de Gerenciamento de Stock do SIGESC ajuda empresas a manter controle total sobre seus inventários, reduzindo desperdícios e otimizando a gestão de recursos.`;

  const features = [
    "Visibilidade completa do inventário em tempo real",
    "Alertas de estoque baixo para reabastecimento eficiente",
    "Relatórios detalhados de movimentação de estoque",
    "Integração com módulos de Compras e Vendas para automação",
    "Gestão de categorias de produtos e localizações de estoque"
  ];

  const conclusion = `Utilizar o módulo de Gerenciamento de Stock do SIGESC é garantir que sua empresa possa operar com máxima eficiência, mantendo os níveis de estoque ideais para atender à demanda dos clientes sem excessos desnecessários.`;

  const imagesData = [
    {
        src: "/img/sigesc Software de Gestao Integrado comercial gerenciamento de stock.png",
        alt: "sigesc Inventário por data",
        title: "Inventário por data conforme queseres",
        description: "Este modulo permeti a filtragem de inventáro por data permetindo inprimir o resultado comforme a sua necessidade."
    },
    {
        src: "/img/Visibilidade do Inventário.png",
        alt: "Visibilidade do Inventário",
        title: "Inventário em Tempo Real",
        description: "Tenha uma visão clara do seu estoque a qualquer momento."
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial lista de armagens.png",
        alt: "SIGESC-SOFT Software de Gestão Integrado comercial lista de armagens",
        title: "Lista de armagens",
        description: "Diferentes Armazéns em um Único Lugar permite a administração centralizada de múltiplos locais de estocagem, facilitando as transferências de produtos entre armazéns. Esta funcionalidade do SIGESC simplifica a logística e otimiza a gestão do inventário, promovendo uma distribuição eficaz e reduzindo desequilíbrios de stock. Ideal para negócios que buscam agilidade e precisão no controle de suas operações de armazenamento."
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png",
        alt: "Transfere produtos entre armagens",
        title: "SIGESC-SOFT Software de Gestão comercial angola transferencia de produtos.png",
        description: "Transfere Produtos Entre Armazéns é uma funcionalidade essencial do módulo de Gerenciamento de Stock do SIGESC, projetada para otimizar a logística e a eficiência operacional de sua empresa. Com essa capacidade, os usuários podem facilmente mover inventário de um local para outro, garantindo que os produtos certos estejam disponíveis onde e quando necessário. Essa ferramenta simplifica o processo de gestão de múltiplos armazéns, reduz o risco de excesso ou falta de estoque em locais específicos, e apoia estratégias de distribuição mais eficazes. Ao permitir transferências de produtos de forma intuitiva e monitorada, o SIGESC assegura que sua empresa mantenha operações suaves e um fluxo constante de produtos, adaptando-se dinamicamente às demandas do mercado e às necessidades dos clientes."
    },
    {
        src: "/img/SIGESC-SOFT Software de Gestão Integrado comercial catálogo de produtos.png",
        alt: "Catálogo de produtos",
        title: "Catálogo de Produtos",
        description: "Catálogo de Produtos é uma funcionalidade integrada ao SIGESC que oferece uma visão completa e organizada dos itens disponíveis em seu inventário. Permite aos usuários navegar, pesquisar e gerenciar produtos com facilidade, proporcionando detalhes essenciais como descrições, preços, imagens e disponibilidade de stock. Essencial para negócios que desejam manter uma gestão de produtos eficiente e promover uma experiência de compra aprimorada para os clientes."
    },

    // Adicione mais imagens e descrições conforme necessário
  ];

  return (
    <UserLoggedProvider>
      <FormStateProvider>
        <HeaderComponent auth={props.auth} local={props.local}/>
        <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Módulo de Gerenciamento de Stock</h1>

          <p className="text-lg text-gray-700 mb-6">{introText}</p>

          <h2 className="text-2xl font-semibold mb-4">Características principais:</h2>
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
            <Link href={`/${props.local}/contact`} className="text-blue-600 hover:text-blue-800">Entre em contato</Link> para mais informações ou <a href="https://geral.sisgesc.net/gettingStarted" target='_blank' className="text-blue-600 hover:text-blue-800 font-semibold">Solicite uma Demonstração</a> para ver o módulo em ação.
        </div>
        <FooterComponent/>
      </FormStateProvider>
    </UserLoggedProvider>
  );
}

export default StockManagement;
