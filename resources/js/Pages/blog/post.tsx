import React from 'react';
import { motion } from 'framer-motion';
import {HeaderComponent} from '@/Components/home/Header';
import FooterComponent from '@/Components/home/Footer';
import { Link } from '@inertiajs/react';
import { postTranslate, postTs } from '@/types';
import { User } from 'firebase/auth';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import { FormStateProvider } from '@/contexts/stateForm';

interface PostDetailProps {
    auth: { user: User };
    local: string;
    post: postTs; // Assumindo que PostTranslate tem todas as informações detalhadas do post
}

export default function PostDetail({ auth, local, post }: PostDetailProps) {
  return (
    <UserLoggedProvider>
      <FormStateProvider>
        <HeaderComponent auth={auth} local={local}/>
        <motion.div className="container mx-auto px-5 py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <article>
                <h1 className="text-3xl font-bold text-center mb-12">{post.post_translate[0].title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {post.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={image.url} alt={image.alt || `Post image ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                    ))}
                </div>
                <p>{post.post_translate[0].description}</p>
                <div dangerouslySetInnerHTML={{ __html: post.post_translate[0].content }} />
                <Link href={route('blog',{post:''})} className="text-indigo-600 hover:underline">Back to Blog</Link>
            </article>
        </motion.div>
        <FooterComponent />
      </FormStateProvider>
      </UserLoggedProvider>
    );
}
