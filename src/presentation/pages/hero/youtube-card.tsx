"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { DirectionAwareHover } from "@/presentation/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
    const imageUrl = "/fondoyt.png";
    const videoUrl = "https://www.youtube.com/watch?v=AC_A-YYdM1E";

    return (
        <div className="h-[25rem] relative flex items-center justify-center">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Discover MarIA</p>
        <p className="font-normal text-sm">Unleash the power of AI</p>
        </DirectionAwareHover>
      </a>
    </div>
  );
}