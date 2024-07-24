"use client"
import React from "react";
import styles from "@/presentation/styles/vortex/Global.module.css";
import InfoCards from "@/presentation/components/cards/InfoCards";

const ContactUsSection = () => {
    return (
        <section className="width-full bg-[linear-gradient(180deg,rgba(0,0,0,1)0%,rgba(74,60,155,1)90%,rgba(162,80,76,1)100%)] pt-32 pb-24">
            <div className="mx-auto flex items-center justify-center mx-4 md:mx-32 mb-36">
                <div className="w-full grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-1 flex flex-col justify-center md:items-start items-center px-4 md:pl-24">
                        <h2 className="text-4xl font-bold mb-5 text-center md:text-left">Your Digital<br/>Concierge During<br/>Guest Stays</h2>

                        <div className={`${styles.sectionContent} text-[0.96rem] md:ml-4 text-center md:text-left`}>
                            MarIA, the ideal virtual assistant for the hospitality sector,<br/>employs a combination of
                            conversational and
                            generative<br/>artificial intelligence. She manages interactions efficiently and<br/>automatically
                            offers personalized service. Additionally,
                            she<br/>communicates with teams through email notifications.<br/>Requests of greater
                            importance are directed to the
                            appropriate<br/>team member for quick processing.
                        </div>
                        <hr className={`${styles.solid} md:ml-4 w-full md:w-auto`}/>
                        <button 
                            type="button"
                            className="bg-[#06C7F4] text-white hover:bg-[#169dbd] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 z-10 md:ml-4"
                            onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                        >
                            View Demo
                        </button>
                    </div>

                    <div className="md:col-span-1 flex justify-center items-start mt-8 md:mt-0">
                        <img 
                            className="object-contain" 
                            style={{width: '22rem', height: '22rem'}} 
                            src="/figure.png"
                            alt="image"
                        />
                    </div>
                </div>
            </div>

            <InfoCards/>

            <div className="flex justify-center mt-28">
                <button 
                    type="button"
                    className="bg-[#06C7F4] text-white hover:bg-[#169dbd] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-5 py-3 text-center me-2 mb-2 z-10"
                    onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default ContactUsSection;
