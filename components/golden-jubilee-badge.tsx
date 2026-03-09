"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function GoldenJubileeBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="fixed bottom-6 left-6 z-[90] group cursor-default"
        >
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 p-[2px] rounded-full shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 bg-gray-950 rounded-full pl-2 pr-5 py-2 h-full w-full">
                    <div className="flex items-center justify-center bg-gradient-to-tr from-yellow-500 to-yellow-200 rounded-full w-10 h-10 shadow-inner text-gray-900 flex-shrink-0">
                        <Award size={22} className="opacity-90 drop-shadow-sm" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 font-black tracking-widest uppercase text-[11px] md:text-xs leading-none mb-1">
                            50 Years
                        </span>
                        <span className="text-white/80 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase leading-none">
                            Golden Jubilee
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
