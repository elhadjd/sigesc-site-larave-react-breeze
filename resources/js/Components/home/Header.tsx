import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsPerson, BsShop, BsTag, BsCash, BsQuestionCircle } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { useLoggedUser } from '@/contexts/loggedUser';
import { TbNoCreativeCommons } from 'react-icons/tb';
import { FaRegNewspaper } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const HeaderComponent = ({ auth, local }) => {
    const { user, setUser } = useLoggedUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setUser({ ...auth?.user });
    }, [auth, setUser]);
    const {t} = useTranslation()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.div
            className="fixed top-0 w-full bg-white shadow-md z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
            <Link href={`/${local}`}>
                     <div className="flex items-center space-x-2">
                         <span className="text-xl lg:text-3xl font-bold text-[--buttonsColor]">
                            <span className='text-[--app_color]'>S</span>IGESC
                         </span>
                         <span className="text-sm text-gray-500 hidden lg:block">{t('slogan')}</span>
                     </div>
                 </Link>

                 <nav className="hidden md:flex items-center space-x-4">
                     <Link href={route('shop',{page: ''})} className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                         <BsShop className="text-lg capitalize" /><span>{t('words.shop')}</span>
                     </Link>
                     <Link href="/clients/depoiments" className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                         <BsPerson className="text-lg" /><span>{t('words.happyClients')}</span>
                     </Link>
                     <Link href="/prices" className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                         <BsTag className="text-lg" /><span>{t('words.price')}</span>
                     </Link>
                     <Link href="/payments" className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                         <BsCash className="text-lg" /><span>{t('words.payment')}</span>
                     </Link>
                     <Link href="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                         <BsQuestionCircle className="text-lg" /><span>Suporte</span>
                     </Link>
                     <Link href={route('blog',{post: ''})} className="flex items-center space-x-1 text-gray-600 hover:text-[--buttonsColor]">
                        <FaRegNewspaper /><span>Blog</span>
                     </Link>
                 </nav>

                 <div className="flex items-center space-x-4">
                     {user?.id ? (
                        <Link href="/profile" className="flex items-center space-x-3 text-gray-600 ">
                            <span className='flex items-center space-x-2 hover:text-[--buttonsColor]'>
                                <img src={user.user_profile.image} alt="Profile" className="w-8 h-8 rounded-full" />
                                <span className="truncate">{user.name || user.user_profile.surname}</span>
                            </span>

                            <Link href='/authenticate/logout' className='hover:text-red-800'>Logout</Link>
                        </Link>
                    ) : (
                        <Link href="/auth" className="px-4 py-2 bg-[--buttonsColor] text-white rounded hover:opacity-80 transition duration-150">
                            {t('words.enter')}
                        </Link>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Open menu" className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                        {isMenuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', stiffness: 75 }}
                    className="absolute top-0 left-0 w-full bg-white shadow-lg z-40 h-full md:hidden"
                >
                    <nav className="p-5 bg-white">
                        <Link href={route('shop',{page: ''})} className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <BsShop className="text-lg" />
                            <span>{t('words.shop')}</span>
                        </Link>
                        <Link href="/clients/depoiments" className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <BsPerson className="text-lg" />
                            <span>{t('words.happyClients')}</span>
                        </Link>
                        <Link href="/prices" className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <BsTag className="text-lg" />
                            <span>{t('words.price')}</span>
                        </Link>
                        <Link href="/payments" className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <BsCash className="text-lg" /><span>{t('words.payment')}</span>
                        </Link>
                        <Link href="/contact" className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <BsQuestionCircle className="text-lg" />
                            <span>Suport</span>
                        </Link>
                        <Link href="/blog" className="flex flex-row space-x-2 items-center p-2 text-gray-600 hover:text-blue-600">
                            <FaRegNewspaper /><span>Blog</span>
                        </Link>
                    </nav>
                </motion.div>
            )}

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleMenu}
                />
            )}
        </motion.div>
    );
};


// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { BsPerson, BsShop, BsTag, BsCash, BsQuestionCircle } from 'react-icons/bs';
// import { Link } from '@inertiajs/react';
// import { useLoggedUser } from '@/contexts/loggedUser';

// export const HeaderComponent = ({ auth, local }) => {
//     const { user, setUser } = useLoggedUser();

//     useEffect(() => {
//         setUser({ ...auth?.user });
//     }, [auth, setUser]);

//     return (
//         <motion.div
//             className="fixed top-0 w-full bg-white shadow-md z-30"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
//                 <Link href={`/${local}`}>
//                     <div className="flex items-center space-x-2">
//                         <h1 className="text-xl lg:text-2xl font-bold text-blue-600">SIGESC</h1>
//                         <span className="text-sm text-gray-500 hidden lg:block">Solução para a sua empresa</span>
//                     </div>
//                 </Link>

//                 <nav className="hidden md:flex items-center space-x-4">
//                     <Link href="/shop" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
//                         <BsShop className="text-lg" /><span>Loja</span>
//                     </Link>
//                     <Link href="/clients/depoiments" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
//                         <BsPerson className="text-lg" /><span>Clientes felizes</span>
//                     </Link>
//                     <Link href="/prices" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
//                         <BsTag className="text-lg" /><span>Preços</span>
//                     </Link>
//                     <Link href="/payments" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
//                         <BsCash className="text-lg" /><span>Pagamento</span>
//                     </Link>
//                     <Link href="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
//                         <BsQuestionCircle className="text-lg" /><span>Suporte</span>
//                     </Link>
//                 </nav>

//                 <div className="flex items-center space-x-4">
//                     {user?.id ? (
//                         <Link href="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
//                             <img src={user.user_profile.image} alt="Profile" className="w-8 h-8 rounded-full" />
//                             <span className="hidden md:block">{user.name || user.user_profile.surname}</span>
//                         </Link>
//                     ) : (
//                         <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150">
//                             Entrar
//                         </Link>
//                     )}
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="flex md:hidden">
//                     <button
//                         aria-label="Open menu"
//                         className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
//                     >
//                         <AiOutlineMenu className="text-2xl" />
//                     </button>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };
