"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-[#000000] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Let’s Build Success Together
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-100">
            Whether you have an inquiry, need a custom solution, or want to provide feedback, our team is here to assist you. Reach out today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="!bg-[#da222a] hover:bg-[#da222a]/90 text-white font-bold rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Send an Inquiry
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="!border-2 !border-white !text-white !bg-transparent !hover:bg-white !hover:text-[#000000] !font-bold !rounded-xl !px-8 !py-3 !shadow-lg !hover:shadow-xl !transition-all !duration-300"
            >
              <Link href="tel:+91XXXXXXXXXX">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
