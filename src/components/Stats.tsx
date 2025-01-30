const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-secondary/80">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-secondary/80">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-secondary/80">Prazo Médio de Entrega*</div>
          </div>
        </div>
        <div className="text-center text-sm text-secondary/60 mt-4">
          *Para projetos de até 1h de duração
        </div>
      </div>
    </div>
  );
};

export default Stats;