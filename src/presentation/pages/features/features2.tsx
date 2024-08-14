"use client"
import React, { ReactNode, useState } from 'react';
import { MessageCircle, Calendar, Star, ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/cards';

interface ExpandableSectionProps {
    title: string;
    children: ReactNode;
  }
  
  const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <Card className="mb-4">
        <CardHeader 
          className="cursor-pointer flex justify-between items-center" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <CardTitle>{title}</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </CardHeader>
        {isExpanded && <CardContent>{children}</CardContent>}
      </Card>
    );
  };
  
  interface FeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
  }
  
  const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start mb-4">
      <Icon className="mr-4 text-white flex-shrink-0" size={24} />
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-white-600">{description}</p>
      </div>
    </div>
  );
  
  const MARIADetailedDashboard: React.FC = () => {
    const features: FeatureProps[] = [
      {
        icon: MessageCircle,
        title: "Respuestas inmediatas",
        description: "Desde consultas sobre reservaciones hasta solicitudes de servicios especiales e información local."
      },
      {
        icon: Calendar,
        title: "Gestión de reservas al instante",
        description: "Reserva, modifica o cancela tu estancia directamente desde el chat, en el momento que lo necesites."
      },
      {
        icon: Star,
        title: "Servicio personalizado",
        description: "Nuestro bot aprende de tus preferencias y necesidades para ofrecerte recomendaciones y asistencia a medida."
      }
    ];
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-whote">MARIA: Tu Asistente de Reservas con IA</h1>
        <p className="text-center mb-8 text-[#06c7f4]">
          Simplificando y optimizando el proceso de reserva de habitaciones en tu hotel.
        </p>
  
        <ExpandableSection title="Plataforma de Asistencia Omnicanal">
          <p className="mb-4">
            Entendemos que la comunicación fluida y accesible es clave para una experiencia de huésped excepcional. 
            Es por eso que hemos implementado nuestra avanzada Plataforma de Asistencia Omnicanal, diseñada para 
            asegurar que cada interacción con nosotros sea sencilla, rápida y eficiente, sin importar el canal que elijas.
          </p>
          <p className="mb-4">
            Nuestro chatbot de IA, integrado en esta plataforma, te ofrece asistencia instantánea 24/7 a través de 
            múltiples canales de comunicación. Ya sea que prefieras enviar un mensaje de texto, usar WhatsApp, 
            interactuar a través de redes sociales o simplemente necesitar ayuda en nuestra página web, MARIA está 
            siempre lista y equipada para ofrecerte:
          </p>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </ExpandableSection>
  
        <ExpandableSection title="¿Cómo funciona MARIA?">
          <p className="mb-4">
            MARIA es una herramienta tecnológica avanzada diseñada para simplificar y optimizar el proceso de reserva 
            de habitaciones en tu hotel. Gracias a la inteligencia artificial, este asistente puede interactuar contigo 
            en tiempo real, proporcionando un servicio eficiente y personalizado las 24 horas del día, los 7 días de la semana.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Interacción Instantánea:</strong> Solo envía un mensaje con tus preferencias de viaje, 
            y el asistente te mostrará opciones de habitaciones, precios y ofertas especiales adecuadas a tus necesidades.</li>
            <li className="mb-2"><strong>Reservas Fáciles y Rápidas:</strong> Puedes completar tu reserva directamente a través 
            de este sistema interactivo sin necesidad de llamadas telefónicas o esperas prolongadas.</li>
            <li><strong>Soporte Continuo:</strong> Desde preguntas sobre tu reserva hasta cambios de última hora, nuestro 
            asistente está aquí para ayudarte en cada paso.</li>
          </ul>
        </ExpandableSection>
  
        <ExpandableSection title="Beneficios para tu Hotel">
          <p className="mb-4">
            Esta integración de tecnología no solo optimiza tus interacciones con tus huéspedes, sino que también asegura 
            que recibirás más likes de tus instalaciones. Con MARIA aseguras que cada momento del huésped sea tan relajado 
            y disfrutable como solo ellos lo merecen.
          </p>
          <p className="mb-4">
            El objetivo de MARIA es hacer que planificar la estancia de los huéspedes sea tan relajante como sus vacaciones mismas. 
            Esta herramienta no solo mejora la eficiencia de las operaciones de los hoteles, sino que también asegura que cada 
            huésped reciba atención inmediata y personalizada, mejorando su experiencia general y fomentando una mayor 
            satisfacción del cliente.
          </p>
          <p>
            Tu hotel necesita aumentar las reservas, y MARIA te dice cómo hacerlo, ofreciendo una experiencia de reserva 
            sin igual que atrae y retiene a más huéspedes.
          </p>
        </ExpandableSection>
      </div>
    );
  };
  
  export default MARIADetailedDashboard;