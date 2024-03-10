import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { User, postTs } from '@/types';
import { HeaderComponent } from '@/Components/home/Header';
import { FormStateProvider } from '@/contexts/stateForm';
import { UserLoggedProvider } from '@/contexts/loggedUser';
import FooterComponent from '@/Components/home/Footer';

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
                        <img src={post.images[0]?.url} alt={post.images[0]?.alt} className="w-full h-56 object-cover object-center" />
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
