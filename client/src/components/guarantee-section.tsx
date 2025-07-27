import { Shield, CreditCard, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function GuaranteeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 7 Dias",
      description: "Se por qualquer motivo você não ficar 100% satisfeita com nossos livros de colorir, devolvemos seu dinheiro sem perguntas!",
      features: ["✓ Sem burocracias", "✓ Reembolso total", "✓ Compra 100% segura"]
    },
    {
      icon: CreditCard,
      title: "Pagamento Seguro",
      description: "Sua compra é protegida pelos melhores sistemas de segurança. Dados criptografados e transação 100% segura.",
      features: ["✓ SSL Certificado", "✓ Dados protegidos", "✓ Transação segura"]
    },
    {
      icon: Clock,
      title: "Acesso Imediato",
      description: "Após a confirmação do pagamento, você recebe imediatamente todos os 35 livros de colorir em seu email.",
      features: ["✓ Download instantâneo", "✓ Arquivos em alta qualidade", "✓ Suporte incluso"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % guarantees.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-600/90 backdrop-blur-sm"></div>
      <div className="max-w-sm mx-auto text-center relative z-10">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 shadow-xl backdrop-blur-sm border border-white/30">
                    <IconComponent className="text-white h-10 w-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {guarantee.title}
                  </h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                    <p className="text-base leading-relaxed text-green-50 mb-6">
                      {guarantee.description}
                    </p>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                      {guarantee.features.map((feature, featureIndex) => (
                        <p key={featureIndex} className="text-green-100 font-semibold mb-1 last:mb-0">
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}
