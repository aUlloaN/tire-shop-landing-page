import React from 'react';
import { Calendar, UserCheck, Wrench, CheckCircle, Tag } from 'lucide-react';

const features = [
  { icon: Calendar, text: '5 ANOS DE HISTÓRIA' },
  { icon: UserCheck, text: 'ATENDIMENTO PERSONALIZADO' },
  { icon: Wrench, text: 'RAPIDEZ NA TROCA DE PEÇAS' },
  { icon: CheckCircle, text: 'RESULTADO GARANTIDO' },
  { icon: Tag, text: 'MELHOR PREÇO DA REGIÃO' },
];

export default function Features() {
  return (
    <div className="bg-orange-500 text-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">QUALIDADE NO ATENDIMENTO</h2>
          <p className="text-xl">SEGURANÇA PARA O SEU VEÍCULO</p>
        </div>
        <div className="flex justify-between items-center px-16">
          {features.map((Feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Feature.icon className="w-12 h-12 mb-4" />
              <span className="text-sm font-medium max-w-[120px]">{Feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}