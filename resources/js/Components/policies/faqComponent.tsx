import React from 'react'

export default function FaqComponent() {
  return (
    <div className="max-w-4xl mt-20 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes (FAQ)</h1>

      <section aria-labelledby="faq1">
        <h2 id="faq1" className="text-xl font-semibold mb-2">Como posso acessar o SIGESC?</h2>
        <p className="text-base text-gray-700 mb-6">Você pode acessar o SIGESC através do nosso site, fazendo login com suas credenciais de usuário. Se você ainda não tem uma conta,<a href="https://geral.sisgesc.net/gettingStarted" className='underline decoration-1'> clique aqui para se registrar gratuitamente</a>.</p>
      </section>

      <section aria-labelledby="faq2">
        <h2 id="faq2" className="text-xl font-semibold mb-2">Quais funcionalidades o SIGESC oferece?</h2>
        <p className="text-base text-gray-700 mb-6">O SIGESC oferece diversas funcionalidades, incluindo gestão de ponto de venda, faturamento, compras, estoque e gerenciamento de funcionários, entre outros.</p>
      </section>

      <section aria-labelledby="faq3">
        <h2 id="faq3" className="text-xl font-semibold mb-2">Existe suporte ao cliente disponível?</h2>
        <p className="text-base text-gray-700 mb-6">Sim, oferecemos suporte ao cliente através de chat ao vivo, e-mail e telefone. Nossa equipe está disponível para ajudar com quaisquer dúvidas ou problemas que você possa ter.</p>
      </section>

      <section aria-labelledby="faq4">
        <h2 id="faq4" className="text-xl font-semibold mb-2">Como o SIGESC protege meus dados?</h2>
        <p className="text-base text-gray-700 mb-6">Levamos a segurança dos seus dados muito a sério. Utilizamos criptografia de ponta a ponta e outras tecnologias de segurança para proteger suas informações pessoais e de sua empresa.</p>
      </section>

      <section aria-labelledby="faq5">
        <h2 id="faq5" className="text-xl font-semibold mb-2">Posso cancelar minha assinatura a qualquer momento?</h2>
        <p className="text-base text-gray-700">Sim, você pode cancelar sua assinatura do SIGESC a qualquer momento. Entre em contato com nosso suporte ao cliente para obter assistência com o processo de cancelamento.</p>
      </section>
    </div>
  )
}
