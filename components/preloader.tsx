"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => setLoading(false), 1800);
return () => clearTimeout(timer);
}, []);

return ( <AnimatePresence>
{loading && (
<motion.div
initial={{ opacity: 1 }}
exit={{ opacity: 0, transition: { duration: 0.5 } }}
className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
> <div className="flex flex-col items-center">
{/* LOGO */}
<motion.div
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="mb-6"
> <Image
             src="/logo.png"
             alt="Jaydeep Industries"
             width={110}
             height={110}
             className="object-contain"
           />
</motion.div>

        {/* COMPANY NAME */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-xl md:text-2xl font-bold tracking-[0.25em] uppercase"
        >
          Jaydeep Industries
        </motion.h1>

        {/* ===== CONTINUOUS INDUSTRIAL LINE ===== */}
        <div className="w-56 h-[2px] bg-gray-800 mt-8 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-140%", "140%"] }}
            transition={{
              duration: 1.6,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute top-0 bottom-0 w-28 bg-[#da222a]"
          />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

);
}
