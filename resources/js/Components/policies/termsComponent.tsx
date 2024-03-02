import { Link } from '@inertiajs/react'
import React from 'react'

export default function TermsComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">Termos de Serviço</h1>
      <p className="text-sm text-gray-600 text-center mb-8">Última atualização: 01/01/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introdução</h2>
        <p className="text-base text-gray-700">Bem-vindo ao SIGESC. Ao acessar nosso software ou utilizar nossos serviços, você concorda em estar vinculado por estes Termos de Serviço. Estes Termos aplicam-se a todos os visitantes, usuários e outros que desejam acessar ou usar o serviço.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Uso do Serviço</h2>
        <p className="text-base text-gray-700">O SIGESC fornece um conjunto de ferramentas para gestão comercial, incluindo, mas não limitado a, ponto de venda, faturamento, gerenciamento de compras, estoque e funcionários. Ao usar nosso software, você concorda em utilizá-lo de maneira responsável e conforme as leis aplicáveis.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Contas</h2>
        <p className="text-base text-gray-700">Quando você cria uma conta conosco, você garante que as informações fornecidas são precisas, completas e atualizadas em todos os momentos. A inobservância desta condição constitui uma violação dos Termos, o que pode resultar no encerramento imediato de sua conta em nosso serviço.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Propriedade Intelectual</h2>
        <p className="text-base text-gray-700">O software, seus elementos originais, recursos e funcionalidades são e permanecerão propriedade exclusiva do SIGESC e seus licenciadores. Nosso software é fornecido sob licença e não é vendido, concedendo-lhe direitos limitados de uso sob estes Termos.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Alterações</h2>
        <p className="text-base text-gray-700">Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento, a nosso exclusivo critério. Se uma revisão for material, forneceremos um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Contato</h2>
        <p className="text-base text-gray-700">Se você tiver alguma dúvida sobre estes Termos, por favor, entre em contato conosco através de [Inserir informações de contato].</p>
      </section>

      <div className="text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Voltar para a página inicial</Link>
      </div>
    </div>
  )
}
