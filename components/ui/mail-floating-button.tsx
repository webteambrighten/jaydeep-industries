"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUtilities() {
  const [showMobileButtons, setShowMobileButtons] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Logic for Mobile disappearing act
      setShowMobileButtons(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* --- DESKTOP VERSION: ALWAYS VISIBLE (Static) --- */}
      {/* No Scroll Logic here so it stays fixed like your original design */}
      <div className="hidden md:block">
        {/* Email - Fixed Middle Right */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
          <Link
            href="mailto:info@jaydeep-industry.com"
            className="group flex items-center justify-center w-12 h-12 rounded-lg bg-[#1a1a1a] text-white shadow-lg border border-white/10 hover:bg-[#da222a] transition-all"
          >
            <Mail className="h-5 w-5" />
            <span className="absolute right-14 whitespace-nowrap text-xs bg-black text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Email Us
            </span>
          </Link>
        </div>

        {/* WhatsApp - Fixed Bottom Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="https://wa.me/919429621290"
            target="_blank"
            className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="font-semibold">Chat with us</span>
          </Link>
        </div>
      </div>

      {/* --- MOBILE VERSION: DISAPPEARING ON SCROLL --- */}
      <div className="md:hidden">
        <AnimatePresence>
          {showMobileButtons && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="fixed bottom-28 right-4 z-[60] flex flex-col gap-3 items-end"
            >
              {/* Mobile Email Icon */}
              <Link
                href="mailto:info@jaydeep-industry.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/20 text-white shadow-xl active:bg-[#da222a]"
              >
                <Mail size={20} />
              </Link>

              {/* Mobile WhatsApp Button */}
              <Link
                href="https://wa.me/919429621290"
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-2xl active:scale-95 transition-transform"
              >
                <MessageCircle size={22} />
                <span className="text-sm font-black uppercase tracking-tighter italic">Chat</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}