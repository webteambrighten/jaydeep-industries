"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Shield, ExternalLink, X, Award } from "lucide-react";

export default function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievements = [
    { id: "01", year: "2001–02", title: "Export Excellence Award", auth: "SGCCI", image: "/export-award.jpeg" },
    { id: "02", year: "2004–05", title: "Export Excellence Award", auth: "SGCCI", image: "/export-award.jpeg" },
    { id: "03", year: "2005–06", title: "Export Excellence Award", auth: "SGCCI", image: "/export-award.jpeg" },
    { id: "04", year: "2006–07", title: "Export Excellence Award", auth: "SGCCI", image: "/export-award.jpeg" },
    { id: "05", year: "2021–22", title: "National Export Award", auth: "EEPC India", image: "/national.jpeg" },
    { id: "06", year: "2021–22", title: "Western Region Export Award", auth: "EEPC India", image: "/regional.jpeg" },
    { id: "07", year: "2022–23", title: "National Export Award", auth: "EEPC India", image: "/national2.jpeg" },
    { id: "08", year: "2022–23", title: "Western Region Export Award", auth: "EEPC India", image: "/regional.jpeg" },
  ];

  return (
    <section className="relative pt-0 pb-16 md:pb-32 bg-white border-t border-gray-200 overflow-hidden font-heading">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        
        {/* Header with full narrative text */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 md:gap-10 mb-8 md:mb-16 pt-12 md:pt-20">
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#da222a]" />
              <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-[10px] md:text-sm">
                Accreditations & Recognition
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.85] uppercase">
              Proven <br />
              <span className="text-gray-400">Excellence.</span>
            </h2>
            <div className="space-y-4 pt-4 border-l-4 border-gray-100 pl-6">
              <p className="text-gray-600 text-lg md:text-xl font-bold leading-tight uppercase italic">
                "Our commitment to quality, consistency, and international competitiveness has been recognized by esteemed industry bodies over the years."
              </p>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                We are proud recipients of the Export Excellence Awards from the <span className="text-gray-900 font-bold">South Gujarat Chamber of Commerce & Industry (SGCCI)</span>. 
                These early recognitions reinforced our growing position as a dependable exporter within the textile accessory sector.
              </p>
            </div>
          </div>
          
          <div className="lg:max-w-xs space-y-4">
            <div className="lg:hidden flex items-center gap-2 text-gray-400">
              <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view</span>
              <div className="h-[1px] w-8 bg-gray-200" />
            </div>
            <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed italic">
              Recent accolades from <span className="text-[#da222a] font-bold">EEPC India</span> reflect our sustained performance, international quality standards, and contribution to India’s export growth.
            </p>
          </div>
        </div>

        {/* ACHIEVEMENTS CONTAINER */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item.image)}
              className="
                flex-shrink-0 w-[85vw] md:w-auto snap-center
                group relative p-8 md:p-10 border-r border-b border-gray-200 bg-white cursor-pointer transition-all duration-500 overflow-hidden 
                min-h-[500px] md:min-h-[600px] flex flex-col justify-between
              "
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover grayscale opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-110 group-hover:scale-100"
                />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-[#da222a] text-3xl md:text-4xl font-black tracking-tighter italic">
                    {item.year}
                  </div>
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-gray-200 group-hover:text-[#da222a] transition-colors" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-2 uppercase tracking-tighter group-hover:text-[#da222a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">
                    {item.auth}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 h-56 md:h-80 w-full border border-gray-100 overflow-hidden bg-gray-50 flex items-center justify-center group-hover:border-[#da222a]/30 transition-all duration-500 shadow-sm group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt="Certificate Preview"
                  fill
                  className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#da222a]/5 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <ExternalLink className="text-[#da222a] w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 flex items-center gap-2 border-t border-gray-50 mt-4">
                <Shield className="w-3 h-3 text-[#da222a]" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Verified Institutional Record
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#da222a] transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-[80vh] md:h-[90vh]"
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
    </section>
  );
}