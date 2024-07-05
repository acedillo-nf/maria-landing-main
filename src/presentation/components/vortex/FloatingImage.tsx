"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function FloatingImage() {
    return (
        <motion.img
            src="/square.png"
            alt="Floating Image"
            className="object-contain"
            style={{ width: '30rem', height: '30rem' }}
            animate={{
                y: [0, -20, 0]
            }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }}
        />
    );
}
