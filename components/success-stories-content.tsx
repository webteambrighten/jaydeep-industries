"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, Globe, ExternalLink, X } from "lucide-react";

// Types for better safety
interface AwardItem {
  year: string;
  title: string;
  image: string;
  auth: string;
}

const sgcciAwards: AwardItem[] = [
  { year: "2001–02", title: "Export Excellence Award", image: "/export-award.jpeg", auth: "SGCCI" },
  { year: "2004–05", title: "Export Excellence Award", image: "/export-award.jpeg", auth: "SGCCI" },
  { year: "2005–06", title: "Export Excellence Award", image: "/export-award.jpeg", auth: "SGCCI" },
  { year: "2006–07", title: "Export Excellence Award", image: "/export-award.jpeg", auth: "SGCCI" },
];

const eepcAwards: AwardItem[] = [
  { year: "2021–22", title: "National Award for Export Excellence", image: "/national.jpeg", auth: "EEPC India" },
  { year: "2021–22", title: "Western Region Export Award", image: "/regional.jpeg", auth: "EEPC India" },
  { year: "2022–23", title: "National Award for Export Excellence", image: "/national2.jpeg", auth: "EEPC India" },
  { year: "2022–23", title: "Western Region Export Award", image: "/regional.jpeg", auth: "EEPC India" },
];

export default function SuccessStoriesContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Narrative Section */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 text-gray-900">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1] md:leading-[0.9]">
                A Legacy of <br /> 
                <span className="text-[#da222a]">Global Recognition.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-6 font-medium italic border-l-4 border-[#da222a] pl-6">
                "Early recognitions reinforced our growing position as a dependable exporter within the textile accessory sector."
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Jaydeep Industries has consistently demonstrated international quality standards, leading to prestigious accolades from the South Gujarat Chamber of Commerce & Industry and EEPC India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SGCCI Section */}
      <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto px-0 md:px-8">
          <div className="flex items-end justify-between mb-10 md:mb-16 border-l-8 border-[#da222a] ml-6 md:ml-0 pl-6 md:pl-8">
            <div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Foundational Years</p>
              <h3 className="text-3xl md:text-6xl font-black uppercase text-gray-900">SGCCI Awards</h3>
            </div>
            <Award className="text-gray-200 w-12 h-12 md:w-16 md:h-16 mr-6 md:mr-0" />
          </div>

          {/* MOBILE: Horizontal Scroll | DESKTOP: Grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-6 md:px-0 snap-x snap-mandatory no-scrollbar">
            {sgcciAwards.map((award, i) => (
              <motion.div 
                key={`sgcci-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(award.image)}
                className="group bg-white border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative min-w-[280px] md:min-w-0 snap-center"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-6 md:mb-8 border border-gray-100">
                  <Image 
                    src={award.image} 
                    alt={award.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-[#da222a]/0 group-hover:bg-[#da222a]/5 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      <ExternalLink className="text-[#da222a] w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white px-3 py-1 md:px-4 md:py-2 font-black text-[#da222a] text-sm md:text-lg shadow-md z-20">
                    {award.year}
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-[#da222a] transition-colors">{award.title}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Issued by {award.auth}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EEPC Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-0 md:px-8">
          <div className="flex items-end justify-between mb-10 md:mb-16 border-l-8 border-gray-900 ml-6 md:ml-0 pl-6 md:pl-8">
            <div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#da222a] mb-2">Modern Excellence</p>
              <h3 className="text-3xl md:text-6xl font-black uppercase text-gray-900">EEPC India</h3>
            </div>
            <Globe className="text-gray-200 w-12 h-12 md:w-16 md:h-16 mr-6 md:mr-0" />
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-6 md:px-0 snap-x snap-mandatory no-scrollbar">
            {eepcAwards.map((award, i) => (
              <motion.div 
                key={`eepc-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(award.image)}
                className="group bg-white border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative min-w-[280px] md:min-w-0 snap-center"
              >
<div className="relative w-full overflow-hidden bg-white mb-6 md:mb-8 border border-gray-100">
  <Image
    src={award.image}
    alt={award.title}
    width={500}
    height={600}
    className="w-full h-auto object-contain"
  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#da222a]/5 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      <ExternalLink className="text-[#da222a] w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gray-900 text-white px-3 py-1 md:px-4 md:py-2 font-black text-sm md:text-lg z-20">
                    {award.year}
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-[#da222a] transition-colors">{award.title}</h4>
                  <div className="flex items-center gap-2 mt-4">
                    <ShieldCheck className="w-4 h-4 text-[#da222a]" />
                    <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest leading-none">Verified Record</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#da222a] transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-[70vh] md:h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Award Certificate"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}