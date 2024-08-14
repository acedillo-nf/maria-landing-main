"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface Integration {
  name: string;
  description: string;
  logo: string;
}

const integrations: Integration[] = [
  { name: "Integración META", description: "Habilitar flujos de comunicación a través de Messenger de Facebook e Instagram", logo: "/meta-logo.png" },
  { name: "Integración WhatsApp", description: "Habilitar comunicación a través de WhatsApp", logo: "/whatsapp-logo.png" },
  { name: "Integración CloudBeds PMS", description: "Consultar información del PMS, como habitaciones disponible, reportes a mantenimiento entre otras funcionalidades", logo: "/cloudbeds-logo.jpg" },
  { name: "Integración OpenTable", description: "Poder revisar mesas disponibles en establecimientos y restaurantes, permitiendo generar reservas.", logo: "/opentable-logo.webp" },
  { name: "Integración Tripadvisor", description: "Calificar la experiencia en lugares turísticos y hoteles", logo: "/tripadvisor-logo.png" },
  { name: "Integración TCA PMS", description: "Consultar información del PMS, como habitaciones disponibles, reportes a mantenimiento entre otras funcionalidades", logo: "/tca-logo.png" },
  { name: "Integración Twilio", description: "Integración de funcionalidad SMS", logo: "/twilio-logo.svg" },
  { name: "Integración Sendgrid", description: "Envío de correos electrónicos", logo: "/sendgrid-logo.svg" },
  { name: "Integración WEB", description: "Integrar el Chat en cualquier página web que el hotel requiera.", logo: "/embedding-logo.png" },
  { name: "Integración Wordpress", description: "Integración a paginas web desarrolladas en WordPress a través de un Plug-in", logo: "/wp-logo2.webp" },
  { name: "Integración Opera Oracle PMS", description: "Consultar información del PMS, como habitaciones disponibles, reportes a mantenimiento entre otras funcionalidades", logo: "/oracle-hospitality-logo.webp" },
];

const IntegrationCard: React.FC<Integration> = ({ name, description, logo }) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[400px] rounded-xl p-6 border flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 flex-grow flex items-center justify-center">
          <Image
            src={logo}
            height={150}
            width={150}
            className="object-contain rounded-xl group-hover/card:shadow-xl"
            alt={`${name} logo`}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const IntegrationsLandingPage: React.FC = () => {
  return (
    <div className="integrations-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="integrations-title py-4 text-4xl font-bold text-center mb-10">Algunas de nuestras integraciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {integrations.map((integration, index) => (
          <IntegrationCard key={index} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default IntegrationsLandingPage;