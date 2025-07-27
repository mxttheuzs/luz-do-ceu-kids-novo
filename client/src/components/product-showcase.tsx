import { Card } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import new carousel images
import arcaDeNoe from "@assets/image_1753360687579.png";
import pascoa from "@assets/image1_1753360687579.png";
import daviEGolias from "@assets/image2_1753360687580.png";
import jonas from "@assets/image3_1753360687580.png";
import adaoEEva from "@assets/image4_1753360687580.png";
import moises from "@assets/image5_1753360687580.png";
import pedroDiscipulo from "@assets/image6_1753360687581.png";
import criacaoDoMundo from "@assets/image7_1753360687581.png";

// Import additional carousel images
import cristaoMenina from "@assets/1 (1)_1753391807468.webp";
import cristaoMenino from "@assets/2_1753391811735.webp";
import yeshua from "@assets/3_1753391813174.webp";


export function ProductShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: 'trimSnaps' 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselBooks = [
    {
      title: "A Arca de Noé",
      image: arcaDeNoe,
      description: "História bíblica de Noé e os animais"
    },
    {
      title: "Páscoa Cristã",
      image: pascoa,
      description: "Celebrando a ressurreição de Jesus"
    },
    {
      title: "Davi e Golias",
      image: daviEGolias,
      description: "A coragem do pequeno Davi"
    },
    {
      title: "Jonas e a Baleia",
      image: jonas,
      description: "A história de Jonas e a baleia"
    },
    {
      title: "Adão e Eva",
      image: adaoEEva,
      description: "O primeiro casal criado por Deus"
    },
    {
      title: "Moisés",
      image: moises,
      description: "O libertador do povo de Deus"
    },
    {
      title: "Pedro Discípulo",
      image: pedroDiscipulo,
      description: "O pescador que seguiu Jesus"
    },
    {
      title: "A Criação do Mundo",
      image: criacaoDoMundo,
      description: "Como Deus criou todas as coisas"
    },
    {
      title: "Cristão Menina",
      image: cristaoMenina,
      description: "Livros especiais para meninas cristãs"
    },
    {
      title: "Cristão Menino",
      image: cristaoMenino,
      description: "Aventuras cristãs para meninos"
    },
    {
      title: "Yeshua",
      image: yeshua,
      description: "Conhecendo Jesus através da arte"
    }
  ];

  return (
    <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-3">
            Conheça Nossos Livros Cristãos
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed px-2">
            Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa
          </p>
        </div>
        
        {/* Carousel container - mobile optimized */}
        <div className="relative mb-6">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white/50 backdrop-blur-sm p-3" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="relative w-full h-64 bg-white rounded-xl shadow-lg overflow-hidden group">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-pointer rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - mobile optimized */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
        
        {/* Quero ver as ofertas section */}
        <div className="mt-8 text-center">
          <Button 
            onClick={() => {
              const offerElement = document.getElementById('offer');
              if (offerElement) {
                offerElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO VER AS OFERTAS
          </Button>
          
        </div>
        
      </div>
    </section>
  );
}
