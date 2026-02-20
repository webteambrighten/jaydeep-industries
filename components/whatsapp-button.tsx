"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.me/919429621290"
        target="_blank"
        className="flex items-center gap-3
                   bg-[#25D366] text-white
                   px-5 py-4 rounded-full
                   shadow-2xl
                   hover:bg-[#1DA851] hover:scale-105
                   transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold text-base">
          Chat with us
        </span>
      </Link>
    </motion.div>
  );
}
