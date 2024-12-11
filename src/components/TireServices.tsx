import React from 'react';

const tireTypes = [
  {
    title: 'PNEUS ECOLÓGICOS',
    subtitle: 'COM 5 ANOS DE GARANTIA',
    price: '89',
  },
  {
    title: 'PNEUS NACIONAIS E IMPORTADOS',
    sizes: [
      { size: '13', price: '140' },
      { size: '14', price: '160' },
      { size: '15', price: '180' },
    ]
  },
  {
    title: 'PNEUS DUNLOP',
    size: '175/65/14',
    price: '169,90',
  }
];

const brands = ['pirelli', 'firestone', 'goodyear'];

export default function TireServices() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div className="relative">
          <img 
            src="/mechanic-working.jpg" 
            alt="Mechanic installing tire" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-0 left-0 bg-orange-500 text-white p-8 max-w-[300px]">
            <h2 className="text-2xl font-bold mb-2">
              PNEUS ECOLÓGICOS E IMPORTADOS COM MONTAGEM GRÁTIS
            </h2>
          </div>
          <div className="mt-8 flex justify-center gap-12">
            {brands.map((brand, index) => (
              <img 
                key={index}
                src={`/${brand}-logo.png`}
                alt={`${brand} logo`}
                className="h-8 opacity-70"
              />
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 text-white p-8">
          {tireTypes.map((type, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-gray-700 last:border-0">
              <h3 className="text-lg font-medium mb-2">{type.title}</h3>
              {type.subtitle && <p className="text-sm text-gray-400 mb-2">{type.subtitle}</p>}
              
              {'sizes' in type ? (
                <div className="space-y-4">
                  {type.sizes.map((size, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
                        {size.size}
                      </div>
                      <span>A partir de R$ {size.price} à vista</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  {type.size && <span className="text-gray-400">{type.size}</span>}
                  <span>A partir de R$ {type.price} à vista</span>
                </div>
              )}
            </div>
          ))}
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors w-full">
            COMO CHEGAR
          </button>
        </div>
      </div>
    </div>
  );
}