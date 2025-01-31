const ProcessSteps = () => {
  return (
    <div className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Calcule o Orçamento</h3>
            <p className="text-gray-600">
              Informe a duração do seu vídeo e receba um orçamento instantâneo
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Entre em Contato</h3>
            <p className="text-gray-600">
              Use o WhatsApp ou formulário para enviar seu projeto
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Receba seu Vídeo</h3>
            <p className="text-gray-600">
              Entrega em até 24h para projetos de até 1h de duração
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;