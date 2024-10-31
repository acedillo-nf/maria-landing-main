import Image from 'next/image';
import styles from './LogoGrid.module.css';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "/logo-pepem-hd.webp", alt: "Pepem Logo" },
  { src: '/logo-palace-resorts.png', alt: 'Palace Resorts Logo' },
  { src: '/hyatt-logo.png', alt: 'Hyatt Logo' },
];

const LogoGrid: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;