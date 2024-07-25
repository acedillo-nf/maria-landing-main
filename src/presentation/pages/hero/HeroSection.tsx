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
                        The ideal virtual assistant for the hospitality sector
                    </p>
                    
                    <button
                    className="xl:bg-transparent relative inline-flex items-center justify-center p-0.5 m-0 overflow-hidden text-sm font-normal text-gray-900 rounded-full group bg-gradient-to-br from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                    onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                    >
                    <span
                    className="relative inline-flex items-center justify-center w-full h-full px-6 py-3 bg-white dark:bg-gray-900 rounded-full transition-all ease-in duration-75 group-hover:bg-opacity-0">
                    Empieza ahora
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

                        <div
                            className={`${styles.contentGlobe} flex flex-row  h-[26rem] pl-5 absolute bottom-0 left-0 right-0 justify-between  transform translate-y-3/4 bg-black mx-36 text-white text-sm font-light max-w-full z-10`}>
                            <div className="relative w-1/2">
                                <div className="flex items-center justify-center absolute inset-x-0 top-[20%] mx-auto">
                                    <img className="h-52 object-contain" src="/border.svg" alt="Random image"/>
                                    <div
                                        className="absolute inset-0 flex items-center justify-start pl-16 text-[0.96rem] px-[1rem]">
                                        The chatbot MarIA assists visitors to the hotel website<br/>by providing answers to
                                        their
                                        inquiries and guiding them<br/>step-by-step through the purchase of their
                                        vacations.<br/>If the user
                                        does not complete the purchase process,<br/>MarIA collects all relevant data and refers
                                        them to
                                        the<br/>sales department, which takes over the follow-up and<br/>closes the sale.
                                    </div>
                                </div>
                            </div>

                            <div className=" w-1/2 h-[89%] pr-28">
                                <DirectionAwareHoverDemo/>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
