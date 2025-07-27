import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Church, Home, BookOpen, Heart, Sparkles } from "lucide-react";

export function UsageCategories() {
  const categories = [
    {
      icon: Users,
      title: "Células e Grupos",
      description: "Transforme suas células em momentos especiais! Engaje crianças e fortaleça vínculos familiares com atividades que ensinam enquanto divertem.",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-400",
      iconBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
      benefits: ["Engajamento garantido", "Atividades prontas", "Fácil aplicação"]
    },
    {
      icon: Church,
      title: "Escola Dominical", 
      description: "Revolucione suas aulas! Recursos visuais profissionais que tornam o aprendizado bíblico interativo, memorável e cheio de significado.",
      bgColor: "bg-gradient-to-r from-blue-400 to-purple-400",
      iconBg: "bg-gradient-to-r from-blue-500 to-purple-500",
      benefits: ["Material didático", "Visual atrativo", "Fácil ensino"]
    },
    {
      icon: Home,
      title: "Devocional Familiar",
      description: "Crie tradições duradouras! Fortaleça a fé em família com momentos especiais que ensinam valores cristãos de forma natural e divertida.",
      bgColor: "bg-gradient-to-r from-pink-400 to-rose-400", 
      iconBg: "bg-gradient-to-r from-pink-500 to-rose-500",
      benefits: ["Vínculos familiares", "Tradições cristãs", "Tempo de qualidade"]
    },
    {
      icon: BookOpen,
      title: "Ministério Infantil",
      description: "Potencialize seu ministério! Material profissional que facilita o ensino bíblico e mantém as crianças atentas e participativas.",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-400",
      iconBg: "bg-gradient-to-r from-green-500 to-teal-500",
      benefits: ["Recurso pastoral", "Atenção garantida", "Ensino eficaz"]
    },
    {
      icon: Heart,
      title: "Aconselhamento",
      description: "Ferramenta terapêutica! Ajude crianças a expressarem sentimentos e aprender valores através da arte e reflexão bíblica.",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-400",
      iconBg: "bg-gradient-to-r from-red-500 to-pink-500",
      benefits: ["Expressão emocional", "Valores bíblicos", "Desenvolvimento saudável"]
    },
    {
      icon: Sparkles,
      title: "Eventos Especiais",
      description: "Momentos únicos! Ideal para retiros, acampamentos, festivais e eventos especiais da igreja com atividades que marcam vidas.",
      bgColor: "bg-gradient-to-r from-indigo-400 to-blue-400",
      iconBg: "bg-gradient-to-r from-indigo-500 to-blue-500",
      benefits: ["Eventos marcantes", "Atividades especiais", "Memórias duradouras"]
    }
  ];

  return (
    <section className="px-4 py-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-3">
            Onde Usar Nossos Livros
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed px-2">
            Versatilidade comprovada em diversos contextos cristãos
          </p>
        </div>
        
        <div className="grid gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="text-card-foreground bg-white rounded-xl p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group pt-[16px] pb-[16px] ml-[-11px] mr-[-11px] mt-[4px] mb-[4px] pl-[9px] pr-[9px]">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${category.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="text-white h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 group-hover:text-blue-600 transition-colors">{category.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">{category.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quero ver as ofertas section */}
        <div className="mt-6 text-center">
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
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            QUERO VER AS OFERTAS
          </Button>
        </div>
        
      </div>
    </section>
  );
}