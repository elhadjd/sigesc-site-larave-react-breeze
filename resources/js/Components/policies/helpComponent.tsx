import { Link } from '@inertiajs/react'
import React from 'react'

export default function HelpComponent() {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Centro de Ajuda</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Começando</h2>
        <ul className="list-disc pl-5 text-base text-gray-700">
          <li className='mb-2 underline decoration-1'><a href="https://geral.sisgesc.net/gettingStarted">Como criar sua conta no SIGESC</a></li>
          <li className='mb-2 underline decoration-1'><a href="https://geral.sisgesc.net/">admin SIGESC</a></li>
          <li className='mb-2 underline decoration-1'><Link href='/auth'>Cria a sua conta no nosso site</Link></li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guias de Funcionalidades</h2>
        <ul className="list-disc pl-5 text-base text-gray-700">
          <li className="mb-2">Gerenciando seu ponto de venda</li>
          <li className="mb-2">Usando o sistema de faturamento</li>
          <li className="mb-2">Otimizando seu estoque</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Suporte e Assistência</h2>
        <p className="text-base text-gray-700 mb-4">Se você precisar de assistência adicional, nossa equipe de suporte está aqui para ajudar.</p>
        <ul className="list-disc pl-5 text-base text-gray-700">
          <li className="mb-2">Entre em contato conosco pelo chat ao vivo</li>
          <li className="mb-2 underline decoration-1">Envie um e-mail para sigesctec@gmail.com</li>
          <li className="mb-2 underline decoration-1"><Link href='/contact'>Nosso formulário de contacto.</Link></li>
          <li className="mb-2 underline decoration-1"><Link href='/faq'>Visite nossa seção de Perguntas Frequentes (FAQ)</Link></li>
        </ul>
      </div>

      <div className="text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Voltar para a página inicial</Link>
      </div>
    </div>
  )
}
