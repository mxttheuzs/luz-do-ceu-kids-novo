import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download, Shield, Star } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos Sólidos",
      description: "Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-500",
      statistic: "35 histórias bíblicas"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Completo", 
      description: "Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento",
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-500",
      statistic: "100% educativo"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família longe das telas, fortalecendo vínculos e criando memórias duradouras",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
      statistic: "Horas de diversão"
    },
    {
      icon: Download,
      title: "Acesso Vitalício",
      description: "Download instantâneo após compra, imprima ilimitadamente, use offline, sem dependência de internet",
      bgColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      statistic: "Download imediato"
    },
    {
      icon: Shield,
      title: "Conteúdo Seguro",
      description: "Material 100% cristão, livre de violência, desenvolvido por educadores cristãos experientes",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      statistic: "Aprovação familiar"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Ilustrações profissionais, alta resolução para impressão, papel e formato otimizados para crianças",
      bgColor: "bg-gradient-to-r from-amber-400 to-yellow-500",
      statistic: "Qualidade profissional"
    }
  ];

  return (
    <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 px-2">
            Benefícios Únicos e Comprovados
          </h2>
          <p className="text-gray-600 text-sm px-2">
            Para o desenvolvimento das crianças
          </p>
        </div>
        
        <div className="grid gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-card-foreground bg-white rounded-xl p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ml-[-11px] mr-[-11px] mt-[0px] mb-[0px]">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${benefit.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="text-white h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
