import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5513996116102";
    const message = "Olá! Vi os 35 Livros de Colorir Cristãos e tenho interesse em adquirir. Podem me ajudar com mais informações?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="px-4 py-6 bg-green-500 text-white">
      <div className="w-full max-w-sm mx-auto">
        <Card className="bg-white/20 rounded-xl p-4 text-center border-0 backdrop-blur-sm">
          <h3 className="font-heading text-base sm:text-lg mb-3 font-semibold">
            💬 Dúvidas? Fale conosco!
          </h3>
          <p className="text-xs sm:text-sm mb-4 opacity-90 leading-relaxed">
            Nossa equipe está pronta para ajudar você
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-green-500 hover:bg-gray-50 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl text-sm shadow-lg transition-all hover:scale-105 h-auto w-full"
          >
            <FaWhatsapp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Falar no WhatsApp
          </Button>
        </Card>
      </div>
    </section>
  );
}
