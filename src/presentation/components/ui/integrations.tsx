"use client";

import React from "react";
import Image from "next/image";

const IntegrationsLandingPage: React.FC = () => {
  return (
    <div className="integrations-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="integrations-title py-4 text-4xl font-bold text-center text-[#06c7f4] mb-10">Algunas de nuestras integraciones</h1>
      <div className="flex justify-center">
        <Image
          src="/integraciones.png"
          width={1200}
          height={600}
          alt="Integraciones"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default IntegrationsLandingPage;