import React from 'react';

const brands = [
  { name: 'General Motors', logo: '/gm-logo.png' },
  { name: 'Volkswagen', logo: '/vw-logo.png' },
  { name: 'Fiat', logo: '/fiat-logo.png' },
  { name: 'Ford', logo: '/ford-logo.png' },
];

export default function Brands() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-medium mb-8">TENEMOS LAS MEJORES MARCAS</h2>
        <div className="flex justify-center items-center gap-16">
          {brands.map((brand, index) => (
            <img 
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}