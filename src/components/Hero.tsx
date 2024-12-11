import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <img 
              src="/tires.png" 
              alt="Premium Tires" 
              className="max-w-xl"
            />
          </div>
          <div className="w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">
              ENCONTRE <br />
              O PNEU IDEAL
            </h1>
            <div className="text-5xl font-bold text-orange-500">
              A PARTIR DE <br />
              R$<span className="text-7xl">89</span>
            </div>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              COMO CHEGAR
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between">
            <div>PAGUE EM ATÉ <span className="text-2xl font-bold">10x</span></div>
            <div>MONTAGEM <span className="text-2xl font-bold">GRÁTIS</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}