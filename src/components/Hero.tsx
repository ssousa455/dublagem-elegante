import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="relative min-h-[600px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/lovable-uploads/7fc2c600-49d4-4885-9c07-b2577b7ba3e1.png')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="heading-primary mb-6">
            Dublagem e Legendagem Profissional
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Transforme seus vídeos com dublagem e legendagem de alta qualidade.
            Entrega em 24h para projetos de até 1h de duração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;