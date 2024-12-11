import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="relative">
      <div className="h-[600px] grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.3073!3d-22.8897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzIyLjkiUyA0M8KwMTgnMjYuMyJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-orange-500 text-white px-8 py-6 rounded shadow-lg min-w-[400px]">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6" />
            <h3 className="text-xl font-bold tracking-wide">ESTRADA DO DENDÊ, 905</h3>
          </div>
          <p className="text-sm mb-4 pl-9">
            PRAIA DA BANDEIRA, ILHA DO GOVERNADOR<br />
            RIO DE JANEIRO - R.J.
          </p>
          <div className="flex justify-end">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors flex items-center gap-2">
              VEJA NO MAPA
              <span className="inline-block transform -rotate-45">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}