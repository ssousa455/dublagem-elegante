const Services = () => {
  return (
    <div id="servicos" className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-video bg-gray-100 rounded-lg mb-6">
              <img
                src="/lovable-uploads/7fc2c600-49d4-4885-9c07-b2577b7ba3e1.png"
                alt="Serviço de Dublagem"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Dublagem Profissional</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Estúdio profissional
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Vozes interpretativas
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Sincronia labial
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Marketing digital
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-video bg-gray-100 rounded-lg mb-6">
              <img
                src="/lovable-uploads/subtitles-example.jpg"
                alt="Serviço de Legendagem"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Legendagem</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Timing preciso
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Padrão internacional
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Revisão completa
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">•</span>
                Vídeos individuais
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;