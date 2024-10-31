"use client"
import styles from '@/presentation/styles/hero/HeroSection.module.css';
import {GlobeComponent} from "@/presentation/components/globe/GlobeComponent";
import { useEffect, useState } from 'react';
import { DirectionAwareHoverDemo } from './youtube-card';

const HeroSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this value as needed
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <section>
            <div className={styles.hero}>
                <div className={styles.headerContent}>
                    <p className={styles.textIA}>
                        Mar<span className={styles.gradientText}>IA</span>
                    </p>
                    <p className={styles.description}>
                       El asistente virtual ideal para el sector de la hospitalidad
                    </p>
                    
                    <button
                    className="xl:bg-transparent relative inline-flex items-center justify-center p-0.5 m-0 overflow-hidden border border-#06c7f4 text-sm font-normal text-white rounded-full group bg-transparent"
                    onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                    >
                    <span
                    className="relative inline-flex items-center justify-center w-full h-full px-6 py-3 bg-white dark:bg-white dark:text-gray-900 hover:text-white rounded-full transition-all ease-in duration-75 group-hover:bg-opacity-0">
                    EMPIEZA AHORA
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3.29785 10.2979H15.7234M10.2872 4.86169L15.7234 10.2979L10.2872 15.734"
                    stroke="url(#paint0_linear_3_40)" strokeWidth="1.55319" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_3_40" x1="15.0425" y1="2.22598" x2="0.590441" y2="3.08321"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F0FF"/>
                    <stop offset="0.482483" stopColor="#5200FF"/>
                    <stop offset="1" stopColor="#FF2DF7"/>
                    </linearGradient>
                     </defs>
                    </svg>
                    </span>
                    </button>
                    </div>
                {!isMobile && (
                    <>
                        <div className="relative flex flex-row items-center justify-center max-w-xl mx-auto mb-32">
                            <img className="h-60 w-full object-contain" src="/rectangle.png" alt="image"/>
                            <div className="absolute flex items-center justify-between h-full">
                                <span
                                    className={`${styles.bannerText} text-white text-sm font-medium inset-0 origin-center transform rotate-90 whitespace-nowrap tracking-widest`}>Artificial intelligence</span>
                            </div>
                        </div>

                        
                    </>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
