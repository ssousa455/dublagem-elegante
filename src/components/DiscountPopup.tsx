import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCalculatedPrice, setHasCalculatedPrice] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenDiscountPopup");
    
    if (!hasSeenPopup) {
      // Observa se o usuário já calculou o preço
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === "calculatedPrice" && e.newValue) {
          setHasCalculatedPrice(true);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      // Detecta quando o usuário tenta sair da página
      const handleMouseLeave = (e: MouseEvent) => {
        if (
          e.clientY <= 0 && 
          hasCalculatedPrice && 
          !hasSeenPopup
        ) {
          setIsOpen(true);
          localStorage.setItem("hasSeenDiscountPopup", "true");
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [hasCalculatedPrice]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Oferta Especial! 🎉
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-lg">
            Ganhe 15% de desconto no seu primeiro projeto!
          </p>
          <p className="text-sm text-gray-500">
            *Válido para projetos acima de R$150
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-primary font-semibold">
              Use o cupom: PRIMEIRO15
            </p>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            Aproveitar Agora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;