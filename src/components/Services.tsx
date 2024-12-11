import React from 'react';

const services = [
  {
    image: '/service1.jpg',
    title: 'ALINHAMENTO E BALANCEAMENTO',
    price: 'A partir de R$ 89,90',
  },
  {
    image: '/service2.jpg',
    title: 'SUSPENSÃO',
    price: 'A partir de R$ 149,90',
  },
  {
    image: '/service3.jpg',
    title: 'FREIOS',
    price: 'A partir de R$ 99,90',
  },
  {
    image: '/service4.jpg',
    title: 'TROCA DE ÓLEO',
    price: 'A partir de R$ 199,90',
  },
  {
    image: '/service5.jpg',
    title: 'REVISÃO COMPLETA',
    price: 'A partir de R$ 299,90',
  },
];

export default function Services() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl mb-12">
          SERVIÇOS COMPLETOS PARA <span className="text-orange-500">VOCÊ</span>
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            COMO CHEGAR
          </button>
        </div>
      </div>
    </div>
  );
}