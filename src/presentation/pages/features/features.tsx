"use client"
import React from 'react';
import { Clock, Calendar, MessageSquare, BarChart2, DollarSign, Clock as ClockReal } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  darkBg = false 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  darkBg?: boolean;
}) => (
  <div className={`p-8 ${darkBg ? 'bg-slate-800' : 'bg-sky-400'} text-white relative overflow-hidden`}>
    <div className="mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl mb-3">{title}</h3>
    <p className="text-sm leading-relaxed">{description}</p>
  </div>
);

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Disponibilidad",
      description: "MarIA está disponible las 24 horas del día en los 7 días de la semana, despreocupate por atender a tus clientes",
      darkBg: true
    },
    {
      icon: Calendar,
      title: "Agenca citas",
      description: "MarIA agenda tus citas de manera automatica en nuestro sistema",
      darkBg: false
    },
    {
      icon: MessageSquare,
      title: "Responde tu información",
      description: "Entrena a MarIA para que responda lo que tu quieras de manera puntual, sinedo una extensión de tu empresa",
      darkBg: true
    },
    {
      icon: BarChart2,
      title: "Pre-califica leads",
      description: "Dale un flujo para que precalifique leads y solo tengas que cerrar la venta",
      darkBg: false
    },
    {
      icon: DollarSign,
      title: "Vende por chat",
      description: "MarIA tambien tiene acceso a productos que necesitres vender y pueda vender facilmente",
      darkBg: true
    },
    {
      icon: ClockReal,
      title: "Respuestas en tiempo real",
      description: "Si es necesario, puedes responder a tus clientes desde la misma interfaz",
      darkBg: false
    },
  ];

  return (
    <div className="bg-white max-w-5xl mx-auto px-8 pt-10">
      <h1 className="p-2 integrations-title text-4xl font-bold text-center text-[#2c2e3a] mb-2">
        Alivia la carga de trabajo de todos tus equipos
      </h1>
      <h2 className="p-2 integrations-title text-4xl font-bold text-center text-[#06c7f4] mb-10">
        ¿Qué puede hacer MarIA por tu hotel?
      </h2>
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              darkBg={feature.darkBg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
