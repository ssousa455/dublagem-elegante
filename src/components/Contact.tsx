import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.currentTarget,
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Entre em Contato</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <Input name="name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" name="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Assunto</label>
              <Input name="subject" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <Textarea name="message" required className="min-h-[150px]" />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;