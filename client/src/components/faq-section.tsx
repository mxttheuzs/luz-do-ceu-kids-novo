import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como recebo os livros?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente todos os 35 livros de colorir cristãos em formato PDF em seu email. Os arquivos estão em alta qualidade e prontos para impressão."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Uma vez que você adquire os livros, pode imprimir quantas vezes desejar. Não há limite de impressões. Você pode usar em casa, na igreja, escola dominical ou compartilhar com sua família."
    },
    {
      question: "Qual a faixa etária recomendada?",
      answer: "Os livros são recomendados para crianças de 3 a 12 anos de idade. Os desenhos têm diferentes níveis de complexidade, desde traços mais simples para os pequenos até desenhos mais detalhados para as crianças maiores."
    },
    {
      question: "Os arquivos funcionam em qualquer impressora?",
      answer: "Sim! Os PDFs são compatíveis com qualquer impressora doméstica ou profissional. Recomendamos papel sulfite A4 comum ou papel mais grosso para melhor resultado. Também funciona perfeitamente em gráficas rápidas."
    },
    {
      question: "Preciso de internet para usar os livros?",
      answer: "Não! Após baixar os arquivos PDF, você pode usá-los offline quando quiser. Salve no seu computador, tablet ou celular e acesse a qualquer momento, mesmo sem internet."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se por qualquer motivo você não ficar satisfeito com os livros, oferecemos 100% do seu dinheiro de volta em até 7 dias. Sem perguntas, sem burocracia. Sua satisfação é nossa prioridade."
    },

    {
      question: "Que tipo de papel devo usar?",
      answer: "Recomendamos papel sulfite A4 branco (75g a 90g) para uso doméstico. Para atividades em grupos ou eventos especiais, papel mais grosso (120g) oferece melhor experiência de colorir."
    },
    {
      question: "Os livros têm versículos bíblicos?",
      answer: "Sim! Cada livro contém versículos cuidadosamente selecionados relacionados ao tema dos desenhos. As crianças aprendem a Palavra de Deus enquanto se divertem colorindo."
    },
    {
      question: "Quanto tempo demora para receber?",
      answer: "O acesso é imediato! Assim que o pagamento é aprovado (geralmente em poucos minutos), você recebe os links de download por email. Não há tempo de espera ou frete."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-800 text-sm pr-3">
                  {faq.question}
                </span>
                {openQuestion === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-5 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('offer');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            TIREI MINHAS DÚVIDAS, QUERO COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
}