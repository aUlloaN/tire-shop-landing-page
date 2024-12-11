import React from 'react';

const carBrands = [
  {
    name: 'GENERAL MOTORS',
    models: [
      { name: 'Monza/Kadett/Ipanema', price: '89.89' },
      { name: 'Corsa/Sedan/Pick-up', price: '104.89' },
      { name: 'Celta', price: '106.65' },
    ]
  },
  {
    name: 'WOLKSVAGEM',
    models: [
      { name: 'Gol (Exceto G6)', price: '266.86' },
      { name: 'Parati/Versailles', price: '856.65' },
      { name: 'Apollo/Pointer/Logus', price: '856.58' },
    ]
  },
  {
    name: 'FORD',
    models: [
      { name: 'Escort/Verona', price: '114.88' },
      { name: 'Escort 2000 SW/SW', price: '114.15' },
      { name: 'Fiesta até 98', price: '132.89' },
    ]
  },
  {
    name: 'FIAT',
    models: [
      { name: 'Palio até 00', price: '103.14' },
      { name: 'Tempra BV/AV', price: '104.68' },
      { name: 'Tipo Tempra SW', price: '104.68' },
    ]
  }
];

export default function Shocks() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl">AMORTECEDORES</h2>
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
            PAGUE 6X SEM JUROS
          </span>
        </div>
        
        <div className="grid grid-cols-4 gap-8">
          {carBrands.map((brand, index) => (
            <div key={index} className="bg-gray-800 text-white p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">{brand.name}</h3>
              <div className="space-y-4">
                {brand.models.map((model, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-400">{model.name}</span>
                    <span className="text-orange-500">R$ {model.price}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm w-full hover:bg-orange-500 hover:text-white transition-colors">
                VEJA TODOS OS VALORES
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6">
            <img src="/alignment-icon.png" alt="Alignment" className="w-16 h-16" />
            <div>
              <h3 className="text-xl font-medium">ALINHAMENTO GRÁTIS</h3>
              <p className="text-gray-600">na troca de 4 amortecedores</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6 relative">
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm transform rotate-12">
              OFERTA ESPECIAL
            </div>
            <img src="/shock-icon.png" alt="Shock absorber" className="w-16 h-16" />
            <div>
              <h3 className="text-xl font-medium">AMORTECEDORES RETIFICADOS</h3>
              <p className="text-gray-600">a partir de R$ 149,90 o par!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}