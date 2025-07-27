import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

export function SocialProofCounter() {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    product: string;
    show: boolean;
  }>({ name: "", product: "", show: false });

  const customers = [
    { name: "Maria José", product: "35 Livros de Colorir" },
    { name: "João Carlos", product: "Pacote Premium" }, 
    { name: "Ana Paula", product: "35 Livros + Bônus" },
    { name: "José Roberto", product: "Coleção Cristã" },
    { name: "Francisca", product: "35 Livros de Colorir" },
    { name: "Antônio Silva", product: "Pacote Premium" },
    { name: "Rosana", product: "35 Livros + Bônus" },
    { name: "Marcos Paulo", product: "Pacote Premium" },
    { name: "Sônia Maria", product: "35 Livros de Colorir" },
    { name: "Carlos Alberto", product: "Pacote Premium" },
    { name: "Vera Lúcia", product: "35 Livros + Bônus" },
    { name: "Luiz Fernando", product: "Coleção Cristã" },
    { name: "Regina", product: "35 Livros de Colorir" },
    { name: "Paulo Roberto", product: "Pacote Premium" },
    { name: "Lúcia Helena", product: "35 Livros + Bônus" },
    { name: "Jorge", product: "Pacote Premium" },
    { name: "Neusa", product: "35 Livros de Colorir" },
    { name: "Sebastião", product: "Pacote Premium" },
    { name: "Ivone", product: "35 Livros + Bônus" },
    { name: "Geraldo", product: "Coleção Cristã" },
    { name: "Conceição", product: "35 Livros de Colorir" },
    { name: "Mário", product: "Pacote Premium" },
    { name: "Terezinha", product: "35 Livros + Bônus" },
    { name: "Wilson", product: "Pacote Premium" },
    { name: "Aparecida", product: "35 Livros de Colorir" }
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
      
      setCurrentNotification({ 
        name: randomCustomer.name, 
        product: randomCustomer.product,
        show: true 
      });
      
      // Esconder após 5 segundos
      setTimeout(() => {
        setCurrentNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Notificações subsequentes a cada 8-15 segundos
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000; // 8-15 segundos
      setTimeout(showNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification.show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-down">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
            <ShoppingCart className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {currentNotification.name}
            </p>
            <p className="text-xs text-gray-600 truncate">
              comprou {currentNotification.product}
            </p>
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
                style={{animationDelay: `${i * 0.3}s`}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}