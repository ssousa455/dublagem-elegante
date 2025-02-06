import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PriceCalculator = () => {
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [isHours, setIsHours] = useState(false);
  const { toast } = useToast();

  const calculatePrice = (minutes: number) => {
    if (minutes <= 0) return 0;
    const basePrice = Math.max(20, minutes * 20);
    return basePrice;
  };

  const handleCalculate = () => {
    const inputValue = parseFloat(duration);
    if (isNaN(inputValue) || inputValue <= 0) {
      toast({
        title: "Duração inválida",
        description: "Por favor, insira uma duração válida.",
        variant: "destructive",
      });
      return;
    }

    // Converter para minutos se necessário
    const minutes = isHours ? inputValue * 60 : inputValue;
    const calculatedPrice = calculatePrice(minutes);
    setPrice(calculatedPrice);
    
    // Armazena que um preço foi calculado
    localStorage.setItem("calculatedPrice", "true");
    // Dispara evento para notificar o popup
    window.dispatchEvent(new StorageEvent("storage", {
      key: "calculatedPrice",
      newValue: "true"
    }));
  };

  const handleWhatsAppClick = () => {
    const unit = isHours ? "horas" : "minutos";
    const message = encodeURIComponent(
      `Olá! 😊 Vi que o orçamento automático para ${duration} ${unit} de dublagem ficou em R$${price.toFixed(2)}. ` +
      `Gostaria de saber mais detalhes sobre o serviço e verificar a disponibilidade. Podemos conversar?`
    );
    window.open(`https://wa.me/5584996562202?text=${message}`, '_blank');
  };

  return (
    <div id="orcamento" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Calcule seu Orçamento</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium">
                  Duração do vídeo {isHours ? "(em horas)" : "(em minutos)"}
                </label>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hours"
                    checked={isHours}
                    onCheckedChange={(checked) => setIsHours(checked as boolean)}
                  />
                  <Label htmlFor="hours" className="text-sm cursor-pointer">
                    Usar horas
                  </Label>
                </div>
              </div>
              <Input
                type="number"
                min="0"
                step="0.1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder={isHours ? "Ex: 1.5" : "Ex: 90"}
              />
            </div>
            <Button onClick={handleCalculate} className="w-full">
              Calcular Preço
            </Button>
            {price > 0 && (
              <div className="text-center mt-4 space-y-4">
                <div>
                  <p className="text-lg">Valor estimado:</p>
                  <p className="text-2xl font-bold text-primary">
                    R$ {price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    *Preços a partir de R$20 para vídeos de até 15 minutos
                  </p>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Continuar no WhatsApp
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;