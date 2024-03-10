import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { User, postTranslate, postTs } from '@/types';
import { HeaderComponent } from '@/Components/home/Header';
import { FormStateProvider } from '@/contexts/stateForm';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import FooterComponent from '@/Components/home/Footer';

const blogPosts = [
    {
        title: "Maximizando Sua Eficiência Comercial com SIGESC",
        category: "Produtividade",
        excerpt: "Descubra como o SIGESC pode transformar a gestão da sua empresa, aumentando a eficiência e produtividade.",
        image: "/img/capa.png",
        slug: "maximizando-eficiencia-sigesc"
    },
    {
        title: "5 Estratégias para Melhorar o Fluxo de Caixa com SIGESC",
        category: "Finanças",
        excerpt: "Aprenda estratégias chave para otimizar o fluxo de caixa da sua empresa utilizando as funcionalidades avançadas do SIGESC.",
        image: "/img/Sigesc Modulos disponiveis.png",
        slug: "estrategias-fluxo-de-caixa-sigesc"
    },
    {
        title: "Integração do SIGESC com Outras Ferramentas de Negócios",
        category: "Integração",
        excerpt: "Veja como o SIGESC se integra perfeitamente com outras ferramentas essenciais de negócios para proporcionar uma experiência unificada.",
        image: "/img/SIGESC-SOFT Software de Gestão Integrado comercial transferencia de produtos.png",
        slug: "integracao-sigesc-ferramentas"
    },
    {
        title: "Como o SIGESC Facilita a Gestão de Inventário em Tempo Real",
        category: "Gestão de Inventário",
        excerpt: "Descubra os benefícios da gestão de inventário em tempo real com SIGESC e como implementá-la eficazmente no seu negócio.",
        image: "/img/Visibilidade do Inventário.png",
        slug: "gestao-inventario-sigesc"
    },
    {
        title: "Construindo Relacionamentos com Clientes através do SIGESC",
        category: "Relacionamento com Clientes",
        excerpt: "Explore estratégias para construir e manter relacionamentos sólidos com clientes usando as funcionalidades do SIGESC.",
        image: "/img/Software sigesc.jpg",
        slug: "relacionamento-clientes-sigesc"
    }
];

export default function BlogPage(props:{auth:{user:User},local:string,posts: postTs[]}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="container mx-auto px-5 py-24">
                <h1 className="text-3xl font-bold text-center mb-12">Blog SIGESC</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {props.posts.map((post, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg shadow-lg overflow-hidden mb-6"
                      >
                        <img src={post.post_translate[0]?.image} alt={post.post_translate[0]?.title} className="w-full h-56 object-cover object-center" />
                        <div className="p-6">
                          <h2 className="text-lg text-indigo-600 font-semibold">{post.post_translate[0]?.department}</h2>
                          <h3 className="text-xl font-bold my-2">{post.post_translate[0]?.title}</h3>
                          <p className="text-gray-700 mb-4">{post.post_translate[0]?.description}</p>
                          <Link href={`/blog/posts/${post.post_translate[0]?.post_id}`} className="text-indigo-600 hover:underline">Read More →</Link>
                        </div>
                      </motion.div>
                    ))}
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}
