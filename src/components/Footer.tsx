import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto text-center">
        <img 
          src="/logo.png" 
          alt="Ilha Tyres Auto Center" 
          className="h-16 mx-auto mb-6"
        />
        <div className="text-gray-600">
          <p className="font-medium mb-2">FALE CONOSCO</p>
          <div className="flex items-center justify-center gap-2">
            <a href="tel:(21) 3647-6385" className="hover:text-orange-500 transition-colors">
              (21) 3647-6385
            </a>
            <span>|</span>
            <a href="tel:(21) 97947-9900" className="hover:text-orange-500 transition-colors">
              (21) 97947-9900
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}