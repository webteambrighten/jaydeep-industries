"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Users, Globe, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      name: "Advanced Manufacturing",
      description: "Equipped with state-of-the-art precision machinery for high-tolerance weaving accessories.",
      icon: Factory,
    },
    {
      name: "Engineering Expertise",
      description: "A specialized workforce dedicated to innovation in twin wire and metal reed technology.",
      icon: Users,
    },
    {
      name: "Global Export Network",
      description: "Serving textile hubs across international markets with Govt. recognized excellence.",
      icon: Globe,
    },
    {
      name: "Uncompromising Quality",
      description: "Rigorous testing protocols ensuring durability and superior surface finish.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative pt-8 md:pt-0 pb-12 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />

      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Mobile: flex-col with tight gap | Desktop: Original lg:grid with xl:gap-24 */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-12 xl:gap-24 items-start">

          {/* 1. MOBILE HEADER - Hidden on Desktop */}
          <div className="lg:hidden flex flex-col mt-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#da222a]" />
              <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-sm">
                The SWASTIK Legacy
              </span>
            </div>

            <h2 className="text-[32px] font-black text-gray-900 tracking-tighter leading-[1.1] mb-4">
              Reliability. Quality. <span className="text-[#da222a]">Service.</span>
            </h2>

            <div className="text-lg text-gray-600 font-medium leading-snug mb-4">
              <p>
                Established in 1976, Jaydeep Industries has been at the forefront of the textile industry. Our SWASTIK brand products are trusted globally for their precision, durability, and superior performance on high-speed looms.
              </p>
            </div>
          </div>

          {/* 2. IMAGE BLOCK - Restored Original Desktop Width/Pos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full group"
          >
            {/* Desktop-only Title Header (RE-ENABLED) */}
            <div className="hidden lg:flex items-center gap-4 mb-6 lg:pt-10">
              <div className="h-[2px] w-12 bg-[#da222a]" />
              <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-base">
                The SWASTIK Legacy
              </span>
            </div>

            <div className="relative z-10">
              {/* Border: 8px on mobile, original 12px on desktop */}
              <div className="relative aspect-[4/5] md:aspect-auto h-[450px] md:h-[650px] w-full overflow-hidden border-[8px] lg:border-[12px] border-gray-100 shadow-2xl">
                <Image
                  src="/w-main-image2.jpeg"
                  alt="Jaydeep Industries Manufacturing"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between">
                  <div className="space-y-2">
                    <div className="h-1.5 w-16 bg-[#da222a]" />
                    <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter">
                      Since 1976
                    </h3>
                  </div>
                  {/* Restored Badge - Hidden only on smallest mobile */}
                  <div className="bg-[#da222a] p-4 md:p-8 rounded-sm shadow-xl hidden sm:block">
                    <p className="text-white font-black text-4xl md:text-5xl italic leading-none">50+</p>
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest mt-2">Years of Excellence</p>
                  </div>
                </div>
              </div>
              {/* Red decorative border - Restored for Desktop only */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-[10px] border-b-[10px] border-[#da222a] -z-10 opacity-100 hidden lg:block" />
            </div>
          </motion.div>

          {/* 3. FEATURES BLOCK - Restored Desktop Layout */}
          <div className="w-full lg:pt-24 mt-4 lg:mt-0">
            {/* Desktop-only Heading & Para (RE-ENABLED) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <h2
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
                className="font-black text-gray-900 tracking-tighter leading-none mb-10"
              >
                Reliability. Quality. <span className="text-[#da222a]">Service.</span>
              </h2>
              <div className="text-xl text-gray-600 font-medium leading-relaxed max-w-xl mb-10">
                <p>
                  Established in 1976, Jaydeep Industries has been at the forefront of the textile industry. Our SWASTIK brand products are trusted globally for their precision, durability, and superior performance on high-speed looms.
                </p>
              </div>
            </motion.div>

            {/* Features Grid - Restored Hover & Padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 md:p-6 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#da222a] hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-white shadow-sm group-hover:bg-[#da222a] transition-colors">
                      <feature.icon className="h-5 w-5 text-[#da222a] group-hover:text-white" />
                    </div>
                    <h4 className="font-black text-gray-900 uppercase tracking-tight text-lg">{feature.name}</h4>
                  </div>
                  <p className="text-base text-gray-500 font-medium leading-snug">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}