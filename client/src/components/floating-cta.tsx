import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface FloatingCTAProps {
  onPurchase: () => void;
  price: string;
}

export function FloatingCTA({ onPurchase, price }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40">
      <Button 
        onClick={onPurchase}
        className="w-full bg-accent-yellow hover:bg-yellow-500 text-text-dark font-bold py-4 px-6 rounded-2xl text-lg shadow-2xl transition-all transform hover:scale-105 h-auto animate-bounce-gentle"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Comprar por {price}
      </Button>
    </div>
  );
}
