import React from 'react';
import Image from 'next/image';

const LastSection: React.FC = () => {
  return (
    <div className="w-full">
      <Image
        src="/ultima-seccion.png"
        width={1200}
        height={600}
        alt="Última Sección"
        className="w-full object-contain"
      />
    </div>
  );
};

export default LastSection;