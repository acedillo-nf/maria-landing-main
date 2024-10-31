import React from 'react';

interface KPIItem {
  name: string;
}

interface KPICategory {
  title: string;
  imageUrl: string;
  items: KPIItem[];
}

const KPISection: React.FC<{ category: KPICategory }> = ({ category }) => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/3 px-4">
      {/* Image Section */}
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Title and List - Moved to separate div for dark background */}
      <div className="text-center w-full bg-transparent px-6 -mb-32 relative z-10">
        <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
        <ul className="text-left text-white space-y-3">
          {category.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2" style={{ color: '#06c7f4' }}>•</span>
              <span className="text-sm">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MARIAKPIDashboard: React.FC = () => {
  const kpiData: KPICategory[] = [
    {
      title: "Eficiencia Operacional",
      imageUrl: "/kpi-1.png",
      items: [
        { name: "Porcentaje de consultas atendidas sin intervención humana" },
        { name: "Rapidez en la resolución de consultas de clientes" },
        { name: "Reducción en Tiempo de Check-in/Check-out" },
      ]
    },
    {
      title: "Satisfacción del cliente",
      imageUrl: "/kpi-2.png",
      items: [
        { name: "Satisfacción con el proceso de reserva" },
        { name: "Efectividad en resolver consultas al primer contacto" },
        { name: "Tasa de recomendación" },
      ]
    },
    {
      title: "Impacto en Ventas",
      imageUrl: "/kpi-3.png",
      items: [
        { name: "Cambio en reservas hecho a través de la plataforma" },
        { name: "Eficacia en promocionar y convertir ofertas especiales" },
        { name: "Retención de clientes" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      
      <div style={{ backgroundColor: '#06c7f4' }} className="pt-8 pb-16">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          KPIs Potenciados por MarIA
        </h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            {kpiData.map((category, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/3 px-4">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-lg">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        style={{ backgroundColor: '#2c2e3a' }}
        className="pt-16 pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            {kpiData.map((category, index) => (
              <div key={index} className="w-full md:w-1/3 px-4">
                <div className="text-center w-full bg-transparent px-6">
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="text-left text-white space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2" style={{ color: '#06c7f4' }}>•</span>
                        <span className="text-sm">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MARIAKPIDashboard;