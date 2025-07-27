import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import livroColorir from "@assets/Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7_1753356064325.png";

interface OrderBumpSectionProps {
  onToggleOrderBump: (checked: boolean) => void;
}

export function OrderBumpSection({ onToggleOrderBump }: OrderBumpSectionProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = (newChecked: boolean) => {
    setChecked(newChecked);
    onToggleOrderBump(newChecked);
  };

  const orderBumpProducts = [
    {
      image: livroColorir,
      alt: "35 Livros de Colorir"
    },
    {
      image: livroColorir,
      alt: "Quebra-cabeças"  
    },
    {
      image: livroColorir,
      alt: "Cartões de Versículos"
    }
  ];

  return (
    <section className="px-4 py-8 bg-yellow-50 border-t-4 border-yellow-400">
      <div className="max-w-sm mx-auto">
        <Card className="bg-white rounded-xl p-4 border-2 border-dashed border-yellow-400">
          <div className="flex items-start space-x-3 mb-4">
            <Checkbox 
              checked={checked}
              onCheckedChange={handleCheckedChange}
              className="mt-1 w-5 h-5 text-primary-pink"
            />
            <div className="flex-1">
              <h4 className="font-fredoka text-lg text-text-dark mb-2">
                🎨 BÔNUS ESPECIAL: Pack de Atividades Extra
              </h4>
              <p className="text-sm text-text-medium mb-3">
                Adicione por apenas <strong>R$ 9,90</strong> e ganhe:
              </p>
              <ul className="text-xs text-text-medium space-y-1">
                <li>✅ 10 Desenhos para Pintar</li>
                <li>✅ Jogos Bíblicos Infantis</li>
                <li>✅ Quebra-cabeças Cristãos</li>
                <li>✅ Cartões de Versículos</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            {/* Sample order bump product images */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {orderBumpProducts.map((product, index) => (
                <div key={index} className="relative w-full h-16 rounded-lg overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-primary-pink font-semibold">
              ⚡ Aproveite! Valor normal R$ 19,90
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
