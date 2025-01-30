import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual é o prazo de entrega?</AccordionTrigger>
              <AccordionContent>
                Para vídeos únicos ou projetos com duração total de até 1h, o prazo
                é de 24h. Para projetos maiores, o prazo será combinado conforme a
                complexidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como funciona o programa de fidelidade?</AccordionTrigger>
              <AccordionContent>
                Clientes recorrentes ganham descontos especiais e prioridade no
                atendimento. Entre em contato para mais detalhes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Posso solicitar ajustes após a entrega?</AccordionTrigger>
              <AccordionContent>
                Sim! Oferecemos até 2 rodadas de ajustes gratuitos para garantir
                sua satisfação total com o resultado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;