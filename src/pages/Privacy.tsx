const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Coleta de Dados</h2>
            <p>Coletamos apenas as informações necessárias para a prestação dos serviços, incluindo:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Nome e email para contato</li>
              <li>Informações do projeto (duração, tipo de serviço)</li>
              <li>Dados para faturamento</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Uso de Cookies</h2>
            <p>Utilizamos cookies para melhorar sua experiência e permitir funcionalidades como o cálculo de orçamentos e controle de cupons de desconto.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Compartilhamento de Dados</h2>
            <p>Não compartilhamos suas informações com terceiros, exceto quando necessário para a prestação dos serviços ou por exigência legal.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Segurança</h2>
            <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado ou uso indevido.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Seus Direitos</h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Acessar seus dados</li>
              <li>Solicitar correções</li>
              <li>Solicitar exclusão de dados</li>
              <li>Revogar consentimento</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;