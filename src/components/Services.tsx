const Services = () => {
  return (
    <div id="servicos" className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dublagem Profissional</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Estúdio profissional
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Vozes interpretativas
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Sincronia labial
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Marketing digital
              </li>
            </ul>
            {/* Placeholder para vídeo de exemplo */}
            <div className="aspect-video bg-gray-100 rounded-lg"></div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Legendagem</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Timing preciso
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Padrão internacional
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Revisão completa
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Vídeos individuais
              </li>
            </ul>
            {/* Placeholder para imagem de exemplo */}
            <div className="aspect-video bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;