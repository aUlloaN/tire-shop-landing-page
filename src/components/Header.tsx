import React from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Ilha Pneus" className="h-12" />
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Phone className="w-5 h-5" />
        <span>FALE CONOSCO:</span>
        <a href="tel:(21) 2824-9295" className="hover:text-orange-500">(21) 2824-9295</a>
        <span>|</span>
        <a href="tel:(21) 99647-9505" className="hover:text-orange-500">(21) 99647-9505</a>
      </div>
    </header>
  );
}