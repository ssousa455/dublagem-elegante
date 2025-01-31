const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">VoiceSync Studio</h3>
            <p className="text-sm text-gray-300">
              CNPJ: 12.345.678/0001-90<br />
              Av. Paulista, 1000, sala 101<br />
              Bela Vista, São Paulo - SP<br />
              CEP 01310-100
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white">Dublagem</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white">Legendagem</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white">Termos de Uso</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/5511999999999" className="text-gray-300 hover:text-white">WhatsApp</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white">Formulário de Contato</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} VoiceSync Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;