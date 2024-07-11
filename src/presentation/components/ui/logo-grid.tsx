import Image from 'next/image';
import styles from './LogoGrid.module.css';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
    { src: "/casa-ofelia-logo.png", alt: "Casa Ofelia Logo" },
    { src: "/logo-pepem-hd.webp", alt: "Pepem Logo" },
    { src: "/mlh-logo.png", alt: "MLH Logo" },
  { src: '/logo-palace-resorts.png', alt: 'Palace Resorts Logo' },
  { src: '/hyatt-logo.png', alt: 'Hyatt Logo' },
];

const LogoGrid: React.FC = () => {
  return (
    <div className={styles.logoGrid}>
      {logos.map((logo, index) => (
        <div key={index} className={styles.logoItem}>
          <Image src={logo.src} alt={logo.alt} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;