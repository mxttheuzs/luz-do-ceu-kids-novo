import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { useState } from "react";
import versiculo1 from "@assets/image_1753440167020.png";
import versiculo2 from "@assets/image_1753440170263.png";
import versiculo3 from "@assets/image_1753440173833.png";
import versiculo4 from "@assets/image_1753440179181.png";
import versiculo5 from "@assets/image_1753440190840.png";

interface OfferSectionProps {
  onPurchase: () => void;
}

export function OfferSection({ onPurchase }: OfferSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Versículos data
  const versiculos = [
    { image: versiculo1, locked: true },
    { image: versiculo2, locked: true },
    { image: versiculo3, locked: true },
    { image: versiculo4, locked: true },
    { image: versiculo5, locked: true }
  ];

  // Get current date and format it
  const getCurrentDate = () => {
    return '27/07/25';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % versiculos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + versiculos.length) % versiculos.length);
  };

  return (
    <section id="offer" className="px-4 py-8 bg-gray-50">
      <div className="w-full max-w-sm mx-auto">
        {/* Limited offer badge */}
        <div className="bg-red-500 text-white rounded-full px-4 py-2 text-center mb-6 shadow-lg">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-bold text-xs sm:text-sm">OFERTA LIMITADA - Apenas no dia {getCurrentDate()}</span>
          </div>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-3">
            Escolha Sua Oferta Especial
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed px-2">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>
        
        {/* Basic Package */}
        <Card className="bg-gray-100 rounded-2xl p-6 mb-6 border-0 text-center relative overflow-hidden">
          
          
          <h4 className="font-bold text-gray-800 text-lg sm:text-xl mb-4">Pacote Básico</h4>
          
          {/* Original price */}
          <p className="text-gray-500 line-through text-base sm:text-lg mb-2">R$ 47,00</p>
          
          {/* Discount badge */}
          <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-4">
            -79%
          </div>
          
          {/* Current price */}
          <div className="mb-4">
            <span className="text-4xl sm:text-5xl font-bold text-green-600">R$ 10</span>
            <span className="text-xl sm:text-2xl text-green-600">,00</span>
          </div>
          
          {/* Savings */}
          <p className="text-gray-600 text-xs sm:text-sm mb-4">Você economiza R$ 37,00</p>
          
          {/* Features */}
          <div className="space-y-2 mb-4 text-left">
            <p className="text-gray-700 flex items-center text-sm sm:text-base">
              <span className="text-green-500 mr-2">✓</span>
              35 Livros de Colorir Completos
            </p>
            <p className="text-gray-700 flex items-center text-sm sm:text-base">
              <span className="text-green-500 mr-2">✓</span>
              Download Imediato
            </p>
            <p className="text-gray-700 flex items-center text-sm sm:text-base">
              <span className="text-green-500 mr-2">✓</span>
              Acesso Vitalício
            </p>
            <p className="text-gray-700 flex items-center text-sm sm:text-base">
              <span className="text-green-500 mr-2">✓</span>
              Garantia de 7 dias
            </p>
          </div>
          
          {/* Basic CTA Button */}
          <Button 
            onClick={() => window.open('https://pay.cakto.com.br/tphvtpv_494627', '_blank')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-base uppercase tracking-wide shadow-2xl transition-all hover:shadow-3xl h-auto animate-pulse-slow"
          >QUERO O PACOTE BÁSICO</Button>
        </Card>
        
        {/* Premium Package */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-8 border-2 border-yellow-300 relative overflow-hidden">
          {/* Most Sold badge */}
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
            MAIS VENDIDO
          </div>
          
          <h4 className="font-bold text-gray-800 text-xl mb-4">Pacote Premium</h4>
          
          {/* Current price */}
          <div className="mb-4 text-center">
            <span className="text-5xl font-bold text-green-600">R$ 17</span>
            <span className="text-2xl text-green-600">,00</span>
          </div>
          
          {/* Savings Header */}
          <p className="text-gray-600 text-sm mb-4 text-center">Você economiza R$ 171,00</p>
          
          {/* Basic Package Section */}
          <div className="bg-green-100 rounded-2xl p-4 mb-4">
            <h5 className="font-bold text-green-800 text-center mb-3">TUDO DO PACOTE BÁSICO +</h5>
          </div>
          
          {/* Bonus Items */}
          <div className="space-y-3 mb-6">
            <div className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">BÔNUS 1: 5 Vídeos de Histórias Bíblicas</p>
                  <p className="text-red-500 text-xs line-through">R$ 97,00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">BÔNUS 2: 18 Versículos Ilustrados</p>
                    <p className="text-red-500 text-xs line-through">R$ 39,00</p>
                  </div>
                </div>
              </div>
              
              {/* Mini Carousel dos Versículos */}
              <div className="relative ml-[-6px] mr-[-6px] pl-[-8px] pr-[-8px] pt-[0px] pb-[0px]">
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {versiculos.map((versiculo, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <div className="w-full h-24 rounded-lg overflow-hidden relative">
                          <img 
                            src={versiculo.image} 
                            alt={`Versículo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {versiculo.locked && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm rounded-lg">
                              <Lock className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all pl-[14px] pr-[14px]"
                >
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all pt-[-4px] pb-[-4px] pl-[17px] pr-[17px] mt-[0px] mb-[0px] ml-[0px] mr-[0px]"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>
                
                
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">BÔNUS 3: Calendário Bíblico Semanal</p>
                  <p className="text-red-500 text-xs line-through">R$ 35,00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium CTA Button */}
          <Button 
            onClick={() => window.open('https://pay.cakto.com.br/khjx23a_497223', '_blank')}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all hover:shadow-3xl h-auto uppercase tracking-wide text-base animate-pulse-slow-orange"
          >
            QUERO O PACOTE PREMIUM
          </Button>
        </Card>
        
        {/* Security & Trust Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full mb-3">
              <span className="text-lg">🔒</span>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Compra 100% Segura</h4>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Pagamento processado por plataforma segura</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Criptografia SSL de 256 bits</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Garantia de reembolso em 7 dias</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Download imediato após confirmação</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Suporte dedicado via WhatsApp</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <FaCcVisa className="h-6 w-6 text-gray-600" />
              <FaCcMastercard className="h-6 w-6 text-gray-600" />
              <FaCcPaypal className="h-6 w-6 text-gray-600" />
              <SiPix className="h-5 w-5 text-gray-600" />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Aceitos todos os cartões e PIX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
