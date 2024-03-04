import FooterComponent from '@/Components/home/Footer';
import {HeaderComponent} from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

function EmployeeManagement(props:{auth:{user:User}, local:string}) {
  // Texto introdutório, características e conclusão para o módulo de Gerenciamento de Funcionários
  const introText = `O módulo de Gerenciamento de Funcionários do SIGESC permite às empresas gerenciar eficientemente todos os aspectos relacionados aos seus colaboradores, desde o recrutamento até o desenvolvimento profissional, passando pela avaliação de desempenho e administração de benefícios.`;

  const features = [
    "Cadastro detalhado de funcionários com histórico profissional",
    "Gerenciamento de folha de pagamento e benefícios",
    "Avaliações de desempenho e ferramentas de feedback",
    "Planejamento de carreira e desenvolvimento profissional",
    "Controle de horas trabalhadas e gestão de turnos"
  ];

  const conclusion = `Adotar o módulo de Gerenciamento de Funcionários do SIGESC significa investir no seu maior ativo: as pessoas. Facilita a administração de recursos humanos, promove um ambiente de trabalho mais produtivo e ajuda no crescimento da sua equipe e da sua empresa.`;

  const imagesData = [
    {
      src: "/img/sigesc Software de Gestao Integrado comercial lista de funcionarios.png",
      alt: "Cadastro de Funcionários",
      title: "Cadastro Detalhado",
      description: "Administre todos os detalhes dos seus colaboradores em um único lugar."
    },
    {
      src: "/img/sigesc Software de Gestao Integrado comercial relatorio de funcionario.png",
      alt: "Avaliação de Desempenho",
      title: "Avaliações de Desempenho",
      description: "Ferramentas integradas para avaliar e potencializar o desempenho da equipe."
    },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <UserLoggedProvider>
      <FormStateProvider>
        <HeaderComponent auth={props.auth} local={props.local}/>
        <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">Módulo de Gerenciamento de Funcionários</h1>

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

export default EmployeeManagement;
