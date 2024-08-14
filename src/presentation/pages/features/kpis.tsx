"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/cards';
import { BarChart, Heart, Activity, LucideIcon } from 'lucide-react';

interface KPIItem {
  name: string;
}

interface KPICategory {
  title: string;
  icon: LucideIcon;
  items: KPIItem[];
}

const KPICard: React.FC<{ category: KPICategory }> = ({ category }) => {
  const Icon = category.icon;
  return (
    <Card className="w-full sm:w-[calc(33.333%-1rem)] m-2">
      <CardHeader>
        <Icon className="w-10 h-10 text-[#06c7f4] mb-4" />
        <CardTitle>{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {category.items.map((item, index) => (
            <li key={index} className="text-sm">{item.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const MARIAKPIDashboard: React.FC = () => {
  const kpiData: KPICategory[] = [
    {
      title: "Eficiencia Operacional",
      icon: BarChart,
      items: [
        { name: "Porcentaje de consultas atendidas sin intervención humana" },
        { name: "Rapidez en la resolución de consultas de clientes" },
        { name: "Reducción en Tiempo de Check-in/Check-out" },
      ]
    },
    {
      title: "Satisfacción del Cliente",
      icon: Heart,
      items: [
        { name: "Satisfacción con el proceso de reserva" },
        { name: "Efectividad en resolver consultas al primer contacto" },
        { name: "Tasa de Recomendación" },
      ]
    },
    {
      title: "Impacto en Ventas",
      icon: Activity,
      items: [
        { name: "Cambio en reservas hechas a través de la plataforma" },
        { name: "Eficacia en promocionar y convertir ofertas especiales" },
        { name: "Retención de Clientes" },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">KPIs Potenciados por MARIA</h1>
      <div className="flex flex-wrap -mx-2">
        {kpiData.map((category, index) => (
          <KPICard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MARIAKPIDashboard;