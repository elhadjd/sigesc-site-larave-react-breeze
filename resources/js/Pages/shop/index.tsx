import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { HeaderComponent } from '@/Components/home/Header';
import { FormStateProvider } from '@/contexts/stateForm';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { User } from '@/types';
import FooterComponent from '@/Components/home/Footer';
import { t } from 'i18next';

const ProductCard = ({ product }:{product: any}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg shadow-lg overflow-hidden bg-white"
    >
      <Link href={`/shop/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover object-center"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">{product.price}</span>
            <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              {t('words.buy')}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


const products = [
    { id: 1, name: "Computador Gamer XYZ", description: "Alta performance para jogos", price: "$1.000,00", image: "/images/computador-gamer.jpg", category: "Computadores" },
];

export default function StorePage(props:{auth:{user:User},local:string}) {
  return (
    <UserLoggedProvider>
        <FormStateProvider>
            <HeaderComponent auth={props.auth} local={props.local}/>
            <div className="container mt-10 mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Loja SIGESC-TECH</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <FooterComponent/>
        </FormStateProvider>
    </UserLoggedProvider>
  );
}
