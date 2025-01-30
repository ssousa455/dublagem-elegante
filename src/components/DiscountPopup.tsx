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

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenDiscountPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasSeenDiscountPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
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