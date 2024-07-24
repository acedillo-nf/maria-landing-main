"use client"
import React from "react";
import styles from '@/presentation/styles/vortex/Global.module.css';
import { Vortex } from "@/presentation/components/vortex/Vortex";
import {FloatingImage} from "@/presentation/components/vortex/FloatingImage";

export function VortexSection() {
  return (
    <div className="mx-auto h-[60rem] overflow-hidden flex items-center content-center pt-64 md:pt-64 pt-16"> {/* Changed pt-32 to pt-16 */}
          <Vortex
              backgroundColor="black"
              className="w-full h-full inset-0 "
          />
          <div className="absolute flex items-center justify-center w-full h-full px-16 md:mt-0 -mt-64"> {/* Changed -mt-32 to -mt-64 */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2">
                  <div className="md:col-span-1 flex justify-center items-center">
                      <FloatingImage />
                  </div>

                  <div className="md:col-span-1 flex flex-col justify-center items-start">
                      <h2 className="text-4xl font-bold mb-5">Your AI Sales Agent</h2>

                      <div className={`${styles.sectionContent} text-[0.96rem]`}>
                          MarIA, the ideal virtual assistant for the hospitality sector,<br/>employs a combination of
                          conversational and
                          generative<br/>artificial intelligence. She manages interactions efficiently and<br/>automatically
                          offers personalized service. Additionally,
                          she<br/>communicates with teams through email notifications.<br/>Requests of greater
                          importance are directed to the
                          appropriate<br/>team member for quick processing.
                      </div>
                      <hr className={styles.solid}/>
                      <button type="button"
                              className="bg-[#06C7F4] text-white hover:bg-[#169dbd] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 z-10"
                              onClick={() => window.open('https://calendar.app.google/ywZ6zNjrN1uWHXCs7', '_blank')}>View
                          Demo
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}
