const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Termos e Condições</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Serviços</h2>
            <p>A VoiceSync Studio (CNPJ: 12.345.678/0001-90) oferece serviços de dublagem utilizando tecnologia de inteligência artificial de última geração. Nossos serviços não incluem dublagem clássica com atores em estúdio.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Prazo de Entrega</h2>
            <p>O prazo de entrega de 24 horas é válido apenas para projetos com duração total de até 1 hora. Projetos maiores terão prazos acordados individualmente.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Política de Reembolso</h2>
            <p>Garantimos 100% de reembolso caso não entreguemos o serviço conforme especificado ou no prazo acordado. O reembolso será processado em até 5 dias úteis após a solicitação.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Endereço</h2>
            <p>Av. Paulista, 1000, sala 101, Bela Vista, São Paulo - SP, CEP 01310-100</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p>A VoiceSync Studio não se responsabiliza por:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Uso indevido do conteúdo dublado</li>
              <li>Violações de direitos autorais por parte do cliente</li>
              <li>Qualidade do áudio original fornecido</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;