"use client"
import { HoverEffect } from "@/presentation/components/ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="p-6 integrations-title text-4xl font-bold text-center mb-10">¿Qué puede hacer MarIA SALES?</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Disponibilidad",
    description:
      "MarIA esta disponible las 24 horas del día en los 7 días de la semana, despreocupate por atender a tus clientes",
    link: "/",
  },
  {
    title: "Agenca citas",
    description:
      "MarIA agenda tus citas de manera automatica en nuestro sistema ",
    link: "/",
  },
  {
    title: "Responde tu información",
    description:
      "Entrena a MarIA para que responda lo que tu quieras de manera puntual, sinedo una extensión de tu empresa",
    link: "/",
  },
  {
    title: "Pre-califica leads",
    description:
      "Dale un flujo para que precalifique leads y solo tengas que cerrar la venta",
    link: "/",
  },
  {
    title: "Vende por chat",
    description:
      "MarIA tambien tiene acceso a productos que necesitres vender y pueda vender facilmente",
    link: "/",
  },
  {
    title: "Respuestas en tiempo real",
    description:
      "Si es necesario, puedes responder a tus clientes desde la misma interfaz",
    link: "/",
  },
];
