import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const PriceCalculator = () => {
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const { toast } = useToast();

  const calculatePrice = (minutes: number) => {
    if (minutes <= 0) return 0;
    const basePrice = Math.max(20, minutes * 20);
    return basePrice;
  };

  const handleCalculate = () => {
    const minutes = parseFloat(duration);
    if (isNaN(minutes) || minutes <= 0) {
      toast({
        title: "Duração inválida",
        description: "Por favor, insira uma duração válida em minutos.",
        variant: "destructive",
      });
      return;
    }
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

  return (
    <div id="orcamento" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Calcule seu Orçamento</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Duração do vídeo (em minutos)
              </label>
              <Input
                type="number"
                min="0"
                step="0.1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Ex: 15"
              />
            </div>
            <Button onClick={handleCalculate} className="w-full">
              Calcular Preço
            </Button>
            {price > 0 && (
              <div className="text-center mt-4">
                <p className="text-lg">Valor estimado:</p>
                <p className="text-2xl font-bold text-primary">
                  R$ {price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Preços a partir de R$20 para vídeos de até 15 minutos
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;