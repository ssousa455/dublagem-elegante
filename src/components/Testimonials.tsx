const testimonials = [
  {
    name: "João Silva",
    role: "Youtuber",
    image: "/lovable-uploads/testimonial1.jpg",
    text: "Excelente serviço! Fiquei muito feliz com o resultado profissional com a dublagem. Os valores adequados.",
  },
  {
    name: "Maria Santos",
    role: "Produtora de Conteúdo",
    image: "/lovable-uploads/testimonial2.jpg",
    text: "Qualidade impecável e entrega no prazo. Meu melhor parceiro na dublagem e legendas!",
  },
  {
    name: "Pedro Costa",
    role: "Marketing",
    image: "/lovable-uploads/testimonial3.jpg",
    text: "Profissionalismo em cada vídeo traduzido/dublado. Superou as expectativas!",
  },
];

const Testimonials = () => {
  return (
    <div className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;