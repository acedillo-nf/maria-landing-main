"use client";

import React from 'react';

const ContactUsSection = () => {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#2c2e3a' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-16 relative">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Geometric Frame */}
              <div className="absolute inset-0 border-2 border-white/10 transform -skew-x-6">
                <div className="absolute top-0 right-0 w-32 h-1 bg-white transform translate-x-4"></div>
                <div className="absolute bottom-0 left-0 w-32 h-1 bg-white transform -translate-x-4"></div>
              </div>
              <img
                src="/contacto.jpg"
                alt="Digital Concierge"
                className="relative z-10 rounded-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#06c7f4' }}>
              Su conserje digital durante la estancia de sus huéspedes
            </h1>
            
            <div className="space-y-6 text-white/90">
              <p className="text-lg">
                MarIA la asistente virtual ideal para el sector de la hotelería, 
                emplea una combinación de inteligencia artificial conversacional 
                y generativa.
              </p>

              <p className="text-lg">
                Gestiona las interacciones de forma eficiente 
                y ofrece automáticamente un servicio personalizado. Además, 
                se comunica con los equipos mediante notificaciones por correo 
                electrónico.
              </p>

              <p className="text-lg">
                Las solicitudes de mayor importancia se dirigen 
                al miembro del equipo adecuado para su rápida tramitación.
              </p>

                <button 
                    className="mt-8 px-6 py-3 rounded-full text-white border-2 border-[#06c7f4] hover:bg-[#06c7f4] transition-colors duration-300"
                    onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                >
                VER DEMOSTRACIÓN
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-32 h-8">
            <div className="h-1 w-full bg-white transform -skew-x-12"></div>
            <div className="h-1 w-3/4 bg-white transform -skew-x-12 mt-2"></div>
            <div className="h-1 w-1/2 bg-white transform -skew-x-12 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
                        {/* <button 
                            type="button"
                            className="bg-[#06C7F4] text-white hover:bg-[#169dbd] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 z-10 md:ml-4"
                            onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                        >
                            View Demo
                        </button> */}
                    
