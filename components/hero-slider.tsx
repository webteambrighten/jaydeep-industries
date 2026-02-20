"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden font-sans flex flex-col">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/w-main-image.jpeg"
          alt="Jaydeep Industries Manufacturing"
          fill
          priority
          className="object-cover opacity-60 grayscale-[10%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex-grow w-full flex flex-col px-6 md:px-12 py-4 md:py-10">
        {/* Borders - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#da222a] opacity-80" />
        <div className="hidden md:block absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-white/20 opacity-80" />

        {/* BLUE AREA: Reliability Badge (Moved down on Mobile) */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative md:absolute md:top-40 mt-24 md:mt-0 flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-2.5 border-l-4 border-[#da222a] w-fit shadow-2xl z-20"
>
  
<span className="font-playfair text-white text-[13px] md:text-xs font-bold uppercase tracking-[0.3em]">
  Reliability • Quality • After-Sales Service
</span>
</motion.div>

       {/* GREEN AREA: Precision (Adjusted to sit lower on Mobile) */}
<div className="flex-grow flex items-end md:items-center justify-start pb-12 md:pb-0 py-4">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    style={{ fontSize: "clamp(2.5rem, 10vw, 6.5rem)" }}
    className="font-black text-white tracking-tighter leading-[0.95] uppercase"
  >
    Precision{" "}
    <span className="text-[#da222a]">Twin Healds</span>
    <br />
    <span className="text-white/90">for Superior Weaving</span>
  </motion.h1>
</div>

        {/* YELLOW AREA: Info Grid (Closer together and Larger Text) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl pb-10 md:pb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-white/20 pt-6 md:pt-20">
            
            {/* Innovation Range */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-[#da222a]" />
                <p className="text-[#da222a] text-sm md:text-[15px] font-black uppercase tracking-widest">
                  Innovation Range
                </p>
              </div>
              <p className="text-white text-[15px] md:text-lg font-bold uppercase leading-tight">
                Nickel Plated Wire Healds • Flat Steel Healds • Drop Wires
              </p>
            </div>

            {/* Loom Compatibility */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-[#da222a]" />
                <p className="text-[#da222a] text-sm md:text-[15px] font-black uppercase tracking-widest">
                  Loom Compatibility
                </p>
              </div>
              <p className="text-white text-[13px] md:text-base font-bold uppercase leading-snug">
                Sulzer • Rapier • Dornier • Water Jet • Carpet • Jute • Felt • Terry-Towel
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}