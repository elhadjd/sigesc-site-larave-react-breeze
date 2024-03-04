import FooterComponent from '@/Components/home/Footer';
import { HeaderComponent } from '@/Components/home/Header';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { motion, } from 'framer-motion';

function purchaseManagement(props:{auth:{user:User},local:string}) {
    const introText = `Com o módulo de Gerenciamento de Compras do SIGESC, empresas de todos os tamanhos podem otimizar suas operações de compra, melhorando a eficiência e reduzindo custos. Esta solução avançada foi cuidadosamente desenvolvida para atender às demandas específicas de diferentes tipos de negócios, oferecendo uma personalização completa e uma integração perfeita com outros módulos do SIGESC.`;

    const features = [
        "Automatização de pedidos de compra",
        "Gestão de fornecedores e contratos",
        "Análise de custos e desempenho de fornecedores",
        "Controle de inventário e recebimento de produtos",
        "Relatórios aprofundados e insights de compra"
    ];
    const conclusion = `Escolher o módulo de Gerenciamento de Compras do SIGESC significa investir em uma ferramenta que não apenas simplifica o processo de compras, mas também fornece dados valiosos para tomar decisões estratégicas, promovendo o crescimento sustentável do seu negócio.`;

    const imagesData = [
        {
        src: "/img/- SIGESC-SOFT Software de Gestão Integrado comercial modulo compras nova encomenda.png",
        alt: "Automatização de Pedidos de Compra",
        title: "Automatização de Pedidos",
        description: "Simplifique os pedidos com automação completa, do pedido ao pagamento."
        },
        {
        src: "/img/- SIGESC-SOFT Software de Gestão Integrado comercial lista de fornecedores.png",
        alt: "Gestão Eficiente de Fornecedores",
        title: "Gestão de Fornecedores",
        description: "Gerencie seus fornecedores e contratos em uma única plataforma integrada."
        },
        {
        src: "/img/sigesc Software de Gestao Integrado comercial lista de compras.png",
        alt: "Análise Detalhada de Custos",
        title: "Análise de Custos",
        description: "Obtenha insights sobre custos e desempenho dos fornecedores para decisões estratégicas."
        },
        {
        src: "/img/- SIGESC-SOFT Software de Gestão Integrado comercial modulo compras lista de produtos.png",
        alt: "Controle de Inventário Avançado",
        title: "Controle de Inventário",
        description: "Mantenha seu inventário atualizado com ferramentas de controle precisas."
        },
        {
        src: "/img/- SIGESC-SOFT Software de Gestão Integrado comercial  modulo compras fatura.png",
        alt: "Recebimento e Verificação de Produtos",
        title: "Recebimento de Produtos",
        description: "Assegure a qualidade e a quantidade correta dos produtos recebidos."
        }
    ];

  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Módulo de Gerenciamento de Compras</h1>

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

export default purchaseManagement
