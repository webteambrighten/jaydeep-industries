"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      id: "01",
      name: "Twin Inserted Twisted Wire Healds",
      tagline: "Nickel-Plated Precision",
      description:
        "Engineered for high-speed weaving, featuring uniform nickel deposit (SWG 18–34) for maximum corrosion resistance and low-friction performance.",
      features: [
        "Corrosion Resistant",
        "Low Friction",
        "High Tensile",
      ],
      image: "/w-tween.jpeg",
      link: "/products/twin-wire-healds",
    },
    {
      id: "02",
      name: "Precision Metal Reeds",
      tagline: "High-Count Accuracy",
      description:
        "Available in counts from 4 to 280, ensuring absolute dimensional accuracy and superior surface finish for delicate fabrics.",
      features: [
        "Dimensional Accuracy",
        "Custom Spacing",
        "Loom-Specific",
      ],
      image: "/w-reed.jpeg",
      link: "/products/metal-reeds",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* TOP DECORATIVE LINE - Only visible on Mobile */}
  <div className="lg:hidden w-full h-[1px] bg-gray-100 mb-6" />
      {/* Header */}
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12 py-4 md:py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-[#da222a]" />
          <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-xs">
            Industrial Showcase
          </span>
        </div>
        <h2
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          className="font-black text-gray-900 tracking-tighter leading-none uppercase"
        >
          Product{" "}
          <span className="text-[#da222a]">
            Range.
          </span>
        </h2>
      </div>

      {/* Product Grid */}
      <div className="w-full border-t border-gray-100">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 w-full border-b border-gray-100 bg-white"
          >
            <div className="lg:col-span-5 relative min-h-[350px] lg:h-[500px] overflow-hidden bg-gray-50 border-r border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 bg-[#da222a] text-white font-black text-2xl px-6 py-4 z-10">
                {product.id}
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <span className="text-[#da222a] text-xs font-black uppercase tracking-[0.3em]">
                  {product.tagline}
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-[1.1]">
                  {product.name}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-6">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-700"
                    >
                      <Shield className="w-3 h-3 text-[#da222a]" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={product.link}
                  className="inline-flex items-center gap-6 bg-gray-900 text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-[#da222a] transition-all group"
                >
                  Technical Specs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
