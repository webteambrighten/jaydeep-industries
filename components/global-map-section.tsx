"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ================= PROJECTION (Desktop) ================= */
function project(lat: number, lon: number) {
  const rawX = (lon + 180) / 360;
  const x = rawX * 96 + 2;
  const rawY = (90 - lat) / 180;
  const y = rawY * 85.7 + 7.15;
  return { x, y };
}

/* ================= DATA ================= */
type Country = {
  name: string;
  code: string;
  lat: number;
  lon: number;
  img: string;
};

const countries: Country[] = [
  { name: "Belgium", code: "BE", lat: 50.85, lon: 4.35, img: "/partners/belgium.jpg" },
  { name: "Canada", code: "CA", lat: 56.13, lon: -106.35, img: "/partners/canada.jpg" },
  { name: "China", code: "CN", lat: 35.86, lon: 104.19, img: "/partners/china.jpg" },
  { name: "Egypt", code: "EG", lat: 26.82, lon: 30.80, img: "/partners/egypt.jpg" },
  { name: "Germany", code: "DE", lat: 51.16, lon: 10.45, img: "/partners/germany.jpg" },
  { name: "Indonesia", code: "ID", lat: -0.79, lon: 113.92, img: "/partners/indonesia.jpg" },
  { name: "Italy", code: "IT", lat: 41.87, lon: 12.56, img: "/partners/italy.jpg" },
  { name: "Japan", code: "JP", lat: 36.20, lon: 138.25, img: "/partners/japan.jpg" },
  { name: "South Korea", code: "KR", lat: 35.91, lon: 127.77, img: "/partners/korea.jpg" },
  { name: "Mexico", code: "MX", lat: 23.63, lon: -102.55, img: "/partners/mexico.jpg" },
  { name: "Tunisia", code: "TN", lat: 33.89, lon: 9.54, img: "/partners/tunisia.jpg" },
  { name: "Turkey", code: "TR", lat: 38.96, lon: 35.24, img: "/partners/turkey.jpg" },
  { name: "UAE", code: "AE", lat: 23.42, lon: 53.85, img: "/partners/uae.jpg" },
  { name: "United Kingdom", code: "GB", lat: 55.38, lon: -3.44, img: "/partners/uk.jpg" },
  { name: "United States", code: "US", lat: 37.09, lon: -95.71, img: "/partners/usa.jpg" },
  { name: "Russia", code: "RU", lat: 75.52, lon: 95.32, img: "/partners/russia.jpg" },
  { name: "Sri Lanka", code: "LK", lat: -7.87, lon: 82.77, img: "/partners/srilanka.jpg" },
  { name: "Australia", code: "AU", lat: -55.27, lon: 135.77, img: "/partners/australia.jpg" },
];

export default function GlobalMapSection() {
  const [active, setActive] = useState<Country | null>(null);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== HEADER ===== */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-[11px] font-black tracking-[0.35em] text-[#da222a] uppercase mb-4">
            Global Presence
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Engineered Reliability Across
            <span className="block text-[#da222a]">International Markets</span>
          </h2>
        </div>

        {/* =========================================================
            MOBILE VERSION: Info at Top, Grid below
            ========================================================= */}
        <div className="block md:hidden">
          {/* Mobile Detail Panel (Now at the TOP) */}
          <div className="min-h-[140px] mb-8">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.code}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="border-l-4 border-[#da222a] bg-gray-50 p-6 shadow-sm"
                >
                  <p className="text-[10px] font-black text-[#da222a] uppercase tracking-widest mb-1">
                    Currently Viewing
                  </p>
                  <h3 className="text-2xl font-black text-gray-900 uppercase">{active.name}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Jaydeep Industries provides precision-engineered weaving solutions across {active.name}.
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl p-8"
                >
                  <p className="text-gray-400 text-sm font-medium italic">Tap a country below to view details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Grid selection */}
          <div className="grid grid-cols-2 gap-3">
            {countries.map((c) => (
              <motion.button
                key={c.code}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActive(c)}
                className={`p-4 text-left border transition-all ${
                  active?.code === c.code
                    ? "bg-[#da222a] border-[#da222a] shadow-md"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className={`text-[10px] font-bold uppercase ${
                  active?.code === c.code ? "text-white/60" : "text-gray-400"
                }`}>
                  {c.code}
                </p>
                <p className={`text-sm font-black uppercase mt-0.5 ${
                  active?.code === c.code ? "text-white" : "text-gray-900"
                }`}>
                  {c.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* =========================================================
            DESKTOP VERSION (Exact same as before)
            ========================================================= */}
        <div className="hidden md:block">
          <div className="relative w-full aspect-[2000/857] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_65%)] pointer-events-none" />
            <img src="/world.svg" className="w-full h-full object-contain opacity-40 grayscale pointer-events-none" alt="World map" />
            
            <div className="absolute inset-0">
              {countries.map((c) => {
                const pos = project(c.lat, c.lon);
                return (
                  <div
                    key={c.code}
                    className="absolute"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setActive(c)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="relative flex items-center justify-center">
                      {active?.code === c.code && (
                        <motion.div
                          className="absolute rounded-full bg-[#da222a]/40"
                          style={{ width: 30, height: 30 }}
                          animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity }}
                        />
                      )}
                      <div className="absolute w-5 h-5 rounded-full bg-[#da222a]/20 blur-[2px]" />
                      <div className="relative z-10 w-4 h-4 rounded-full bg-[#da222a] border border-white shadow-lg" />
                    </div>
                  </div>
                );
              })}
            </div>

            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 right-6 w-64 bg-white border border-gray-200 shadow-2xl p-4"
                >
                  <p className="text-sm font-black tracking-widest text-gray-900 uppercase">{active.name}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c.code}
                onMouseEnter={() => setActive(c)}
                onMouseLeave={() => setActive(null)}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider border transition ${
                  active?.code === c.code
                    ? "bg-[#da222a] text-white border-[#da222a]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}