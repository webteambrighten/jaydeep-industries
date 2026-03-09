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
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function MetalReedsPage() {
const sizeRangeData = [
{ parameter: "Count", range: "20 to 300" },
{ parameter: "Length", range: "1000 mm to 1700 mm" },
{ parameter: "Binding", range: "Single or Double" },
{ parameter: "Width of Wire", range: "2.2 mm to 4.0 mm" },
{ parameter: "Thickness of Frame", range: "5.0 ± 0.2 mm to 7.0 ± 0.2 mm" },
];

const wireFrameTable = [
{ width: "2.2 mm", thickness: "5.0 ± 0.2 mm" },
{ width: "2.8 mm", thickness: "5.5 ± 0.2 mm" },
{ width: "4.0 mm", thickness: "7.0 ± 0.2 mm" },
];

const productCategories = [
"All Metal Reeds",
"Super Special Reeds",
"Stainless Steel Reeds",
"Synthetic Bound Stainless Steel",
"Aluminium Channel Reeds",
"Ruti 'C' & 'B' Type Reeds",
"Warping Reeds",
"Hard Chrome Plated Warping Reeds",
];

return ( <div className="bg-white min-h-screen font-heading"> <PageHeroTitle
     title="Metal Reeds"
     description="Comprehensive Range of Industrial Weaving Reeds for all global loom standards."
     themeColor="red"
   />

  {/* =====================================================
      HERO + CATEGORY SECTION
  ===================================================== */}
  <section className="py-12 md:py-16 lg:py-20 border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-5 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
      
      {/* ===== PRODUCT IMAGE ===== */}
      <div className="relative aspect-[4/3] md:aspect-square border-[3px] md:border-[6px] border-gray-100 bg-gray-50 p-2 md:p-3">
        <Image
          src="/w-reed.jpeg"
          alt="Metal Reeds Component"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />
      </div>

      {/* ===== TEXT + CATEGORIES ===== */}
      <div className="space-y-8 md:space-y-12">
        <div className="border-l-[4px] md:border-l-[6px] border-[#da222a] pl-6 md:pl-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-6 md:mb-8 leading-[0.95] md:leading-none">
            Institutional <br /> Quality.
          </h2>

          {/* ✅ unified with Twin Wire page */}
          <p className="text-base md:text-xl text-gray-600 leading-tight font-bold italic">
            "Our Metal Reeds are manufactured to satisfy the rigorous demands
            of modern high-speed looms, ensuring absolute precision in fabric
            production."
          </p>
        </div>

        {/* ===== CATEGORY LIST ===== */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 pt-2">
          <h4 className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] border-b-2 pb-3 md:pb-4">
            Available Categories
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-5">
            {productCategories.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#da222a] shrink-0" />
                {/* ✅ softened hierarchy */}
                <span className="text-xs md:text-base font-black text-gray-700 uppercase tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =====================================================
      TECHNICAL CHARACTERISTICS
  ===================================================== */}
  <section className="pt-8 pb-16 lg:py-20 bg-white">
    <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
      
      {/* ===== FEATURES GRID ===== */}
      <div className="mb-8 md:mb-16 lg:mb-20">
        <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 mb-6 md:mb-12 flex items-center gap-4 md:gap-6">
          <span className="h-[2px] md:h-[3px] w-10 md:w-16 bg-[#da222a]" />
          Technical Characteristics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {[
            {
              title: "Hard Chrome Plating",
              desc: "Superior surface hardness and wear resistance for extended service life.",
            },
            {
              title: "Precision Manufacturing",
              desc: "Strict adherence to tolerances ensuring consistency across all batches.",
            },
            {
              title: "Wide Size Range",
              desc: "Comprehensive selection to meet diverse global weaving requirements.",
            },
            {
              title: "Custom Engineering",
              desc: "Tailored specifications available for specialized industrial applications.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 md:p-8 border-t-[3px] border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <h4 className="font-black text-lg md:text-xl uppercase text-[#da222a] mb-3 md:mb-4 tracking-tighter">
                {f.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 font-bold leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          SIZE RANGE TABLE
      ===================================================== */}
      <div className="space-y-16 md:space-y-20 lg:space-y-20">
        <div className="space-y-6 md:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 tracking-tighter leading-none">
              Size Range Specifications
            </h3>

            <div className="flex items-center gap-2 md:hidden text-gray-400">
              <span className="text-[10px] font-black uppercase tracking-widest">
                Swipe for details
              </span>
              <MoveRight size={12} className="animate-pulse" />
            </div>
          </div>

          <div className="border-2 border-gray-200 overflow-x-auto bg-white">
            <div className="min-w-[550px] md:min-w-full">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="font-black text-gray-900 uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] px-6 md:px-10 py-4 md:py-6">
                      Parameter
                    </TableHead>
                    <TableHead className="font-black text-gray-900 uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] px-6 md:px-10 py-4 md:py-6">
                      Standard Range
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {sizeRangeData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="border-b-2 border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                      {/* ✅ tighter rows */}
                      <TableCell className="font-black text-gray-500 uppercase text-xs md:text-base px-6 md:px-10 py-4 md:py-6">
                        {item.parameter}
                      </TableCell>
                      <TableCell className="font-black text-base md:text-xl text-gray-900 px-6 md:px-10 py-4 md:py-6 italic tracking-tight">
                        {item.range}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* =====================================================
            WIRE & FRAME TABLE
        ===================================================== */}
        <div className="space-y-6 md:space-y-10">
          <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 tracking-tighter leading-none">
            Wire (W) & Frame (F) Correlation
          </h3>

          <div className="border-2 border-gray-200 overflow-x-auto bg-white">
            <div className="min-w-[550px] md:min-w-full">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="font-black text-gray-900 uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] px-6 md:px-10 py-4 md:py-6">
                      Width of Wire (W)
                    </TableHead>
                    <TableHead className="font-black text-gray-900 uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] px-6 md:px-10 py-4 md:py-6">
                      Thickness of Frame (F)
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {wireFrameTable.map((item, idx) => (
                    <TableRow
                      key={idx}
                      className="border-b-2 border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                      <TableCell className="font-black text-gray-500 uppercase text-xs md:text-base px-6 md:px-10 py-4 md:py-6">
                        {item.width}
                      </TableCell>
                      <TableCell className="font-black text-base md:text-xl text-gray-900 px-6 md:px-10 py-4 md:py-6 italic tracking-tight">
                        {item.thickness}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          APPLICATION BLOCK
      ===================================================== */}
      <div className="mt-16 md:mt-24 p-8 md:p-12 border-l-[4px] md:border-l-[4px] border-gray-900 bg-gray-50">
        <h4 className="font-black text-lg md:text-xl uppercase text-[#da222a]  mb-4 md:mb-6 tracking-tighter">
          Industrial Applications Protocol
        </h4>

        <p className="text-base md:text-xl text-gray-700 font-bold leading-snug uppercase tracking-tight italic">
          Suitable for cotton, silk, synthetic fibers, carpets, and
          technical textiles. All components are manufactured to precise
          ISO-aligned specifications for optimal high-speed loom
          performance and absolute dimensional stability.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] text-center">
      </div>
    </div>
  </section>
</div>

);
}
