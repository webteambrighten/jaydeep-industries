"use client";

import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table";
import PageHeroTitle from "@/components/page-hero-title";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function TwinWireHealdsPage() {
const wireGaugeChart = [
{ swg: "18", diameter: "1.219" },
{ swg: "20", diameter: "0.914" },
{ swg: "22", diameter: "0.711" },
{ swg: "24", diameter: "0.558" },
{ swg: "27", diameter: "0.416" },
{ swg: "30", diameter: "0.315" },
{ swg: "32", diameter: "0.274" },
{ swg: "34", diameter: "0.234" },
];

return ( <div className="font-heading bg-white min-h-screen"> <PageHeroTitle
     title="Twin Inserted Twisted Wire Healds"
     description="High-performance weaving accessories manufactured to absolute international standards."
     themeColor="red"
   />

  <section className="py-12 lg:py-24">
    <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
      {/* =====================================================
          01: PRODUCT SUMMARY WITH IMAGE INTERCHANGED
      ===================================================== */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
        {/* ===== PRODUCT IMAGE (LEFT) ===== */}
        <div className="lg:col-span-5 lg:order-1 order-2 relative aspect-square lg:aspect-[4/3] bg-gray-50 border border-gray-200 overflow-hidden group">
          <Image
            src="/w-tween.jpeg"
            alt="Twin Inserted Twisted Wire Healds"
            fill
            className="object-cover hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </div>

        {/* ===== TEXT CONTENT (RIGHT) ===== */}
        <div className="lg:col-span-7 lg:order-2 order-1 border-l-[4px] lg:border-l-[6px] border-[#da222a] pl-6 lg:pl-10 text-left">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4 lg:mb-6 leading-[0.9] lg:leading-none">
            Engineering <br /> Specifications.
          </h2>

          <p className="text-base md:text-xl text-gray-600 leading-relaxed font-bold max-w-4xl italic">
            Jaydeep Industries produces premium Twin Inserted Twisted Wire
            Healds utilizing high-tensile materials and specialized nickel
            plating. Engineered for maximum operational durability and
            low-friction performance.
          </p>
        </div>
      </div>

      {/* =====================================================
          02: TECHNICAL CHARACTERISTICS
      ===================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16 lg:mb-24">
        {/* ===== Manufacturing Range ===== */}
        <div className="p-6 lg:p-8 bg-gray-50 border-t-[3px] border-gray-900">
          <h3 className="text-lg lg:text-xl font-black uppercase text-gray-900 mb-6 lg:mb-8 tracking-tight">
            Manufacturing Range
          </h3>

          <ul className="space-y-4">
            {[
              { label: "Wire Gauges", val: "SWG 18 – 34" },
              { label: "Standard Lengths", val: "100 mm – 1000 mm" },
              {
                label: "Surface Treatment",
                val: "Nickel Plated",
                red: true,
              },
            ].map((spec, i) => (
              <li
                key={i}
                className="flex justify-between border-b border-gray-200 pb-3"
              >
                <span className="font-bold text-gray-400 uppercase text-[9px] lg:text-[10px] tracking-widest">
                  {spec.label}
                </span>

                <span
                  className={`font-black text-sm lg:text-base ${
                    spec.red ? "text-[#da222a]" : "text-gray-900"
                  }`}
                >
                  {spec.val}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Key Advantages ===== */}
        <div className="p-6 lg:p-8 bg-gray-50 border-t-[3px] border-[#da222a]">
          <h3 className="text-lg lg:text-xl font-black uppercase text-gray-900 mb-6 lg:mb-8 tracking-tight">
            Key Advantages
          </h3>

          <div className="space-y-4">
            {[
              "Superior corrosion resistance for industrial lifespan.",
              "Lustrous finish to minimize warp thread friction.",
              "Homogeneous deposit for consistent strength.",
              "Precision engineered mail eyes for accuracy.",
            ].map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#da222a] mt-1.5 shrink-0" />
                <p className="text-sm md:text-base font-bold text-gray-700 leading-snug">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          03: TECHNICAL DATA CHART
      ===================================================== */}
      <div className="space-y-6 lg:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-gray-900 pb-4 gap-2">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 tracking-tighter leading-none">
            Wire Gauge &{" "}
            <span className="text-[#da222a]">Diameter Chart.</span>
          </h3>

          {/* mobile hint */}
          <div className="flex items-center gap-2 md:hidden text-gray-400">
            <span className="text-[10px] font-black uppercase tracking-widest">
              Swipe left
            </span>
            <MoveRight size={12} className="animate-pulse" />
          </div>
        </div>

        <div className="border border-gray-200 overflow-x-auto bg-white">
          <div className="min-w-[500px] md:min-w-full">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="font-black text-gray-900 uppercase text-[10px] lg:text-[11px] tracking-[0.15em] px-6 lg:px-8 py-4 lg:py-5 border-r border-gray-200">
                    SWG (Standard Gauge)
                  </TableHead>
                  <TableHead className="font-black text-gray-900 uppercase text-[10px] lg:text-[11px] tracking-[0.15em] px-6 lg:px-8 py-4 lg:py-5">
                    Diameter (mm)
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {wireGaugeChart.map((gauge, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="font-bold text-gray-500 uppercase text-xs lg:text-sm px-6 lg:px-8 py-4 lg:py-5 border-r border-gray-100">
                      {gauge.swg}
                    </TableCell>

                    <TableCell className="font-black text-base lg:text-lg text-gray-900 px-6 lg:px-8 py-4 lg:py-5 italic tracking-tight">
                      {gauge.diameter}
                      <span className="text-[9px] lg:text-[10px] text-gray-400 not-italic ml-2 uppercase font-mono">
                        mm
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* =====================================================
          04: CORPORATE FOOTER
      ===================================================== */}
    </div>
  </section>
</div>

);
}
