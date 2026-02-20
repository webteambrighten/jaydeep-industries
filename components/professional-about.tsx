"use client";

import { motion } from "framer-motion";
import {
  History,
  UserCheck,
  Award,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Quote,
  Briefcase,
  TrendingUp,
  Heart
} from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function ProfessionalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phaseEvents = [
    {
      year: "1976",
      title: "FOUNDATION",
      subtitle: "Manufacturing Genesis",
      description:
        "Jaydeep Industries was established with a strict commitment to reliability. What began as a specialized unit quickly became a trusted name for weaving accessories across India.",
    },
    {
      year: "1985—1999",
      title: "INNOVATION",
      subtitle: "The SWASTIK Era",
      description:
        "Launched the flagship 'SWASTIK' brand. Developed high-quality Nickel Plated Wire Healds featuring GROZ-BECKERT components for high-speed looms.",
    },
    {
      year: "2000—2010",
      title: "EXPANSION",
      subtitle: "Technical Diversity",
      description:
        "Expanded portfolio to include Flat Steel Healds and Drop Wires. Provided full-scale solutions for Sulzer, Rapier, and specialized industrial looms.",
    },
    {
      year: "2011—PRESENT",
      title: "LEADERSHIP",
      subtitle: "Global Benchmarks",
      description:
        "Global launch of Metal Reeds and receipt of multiple Export Excellence Awards. Today, Jaydeep Industries serves clients across India and international markets with rigorous quality management.",
    },
  ];

  const founderStats = [
    { icon: Briefcase, value: "50+", label: "Years of Vision", sub: "Founding to Present" },
    { icon: TrendingUp, value: "Global", label: "Market Presence", sub: "India & International" },
    { icon: Award, value: "8", label: "Export Awards", sub: "Excellence Recognized" },
    { icon: Heart, value: "100%", label: "Product Authenticity", sub: "" },
  ];

  return (
    <section
      ref={ref}
      className="bg-white text-gray-950 antialiased border-t border-gray-200 overflow-hidden"
    >
            {/* 03: FOUNDER DETAILED SECTION */}
      <div className="py-24 border-b border-gray-200">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[3px] w-10 bg-[#da222a]" />
                <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-[10px]">
                  The Man Behind the Mission
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-gray-900">
                The Founder
              </h2>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 max-w-sm md:text-right leading-loose border-r-4 border-gray-200 pr-6">
              A pioneer who transformed a regional workshop into a globally recognized industrial brand through grit, precision, and unwavering vision.
            </p>
          </div>

          {/* DESKTOP: Two-column layout — portrait + story */}
          <div className="hidden lg:grid grid-cols-12 border border-gray-200 bg-white min-h-[700px]">
            {/* Left: Large portrait */}
            <div className="col-span-4 border-r border-gray-200 relative overflow-hidden contrast-125">
              <Image src="/DCD.jpeg" alt="Founder Portrait" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[9px] font-black text-[#da222a] uppercase tracking-[0.4em] mb-2">Jaydeep Industries</p>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Founder </h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Est. 1976 · Surat, India</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#da222a]" />
            </div>

            {/* Center: Story + Quote */}
            <div className="col-span-5 border-r border-gray-200 p-14 flex flex-col justify-between">
              <div className="space-y-8">
                <Quote className="text-gray-100 w-16 h-16" />
                <blockquote className="text-2xl font-black text-gray-800 uppercase tracking-tighter leading-tight italic border-l-[8px] border-[#da222a] pl-8">
                  "I did not build a company. I built a standard — and a standard lives forever."
                </blockquote>
                <div className="space-y-5 pt-4">
                  <p className="text-base text-gray-500 font-medium leading-relaxed">
                    Beginning with nothing more than a vision for manufacturing excellence, our founder laid the cornerstone of Jaydeep Industries in 1976 in Surat, Gujarat. 
                  </p>
                  <p className="text-base text-gray-500 font-medium leading-relaxed">
                    His defining philosophy — that reliability must be engineered into every component, not inspected in at the end — shaped every process, every hire, and every product that left the factory floor. This principle became the DNA of Jaydeep Industries and remains at the heart of everything we do today.
                  </p>
                  <p className="text-base text-gray-500 font-medium leading-relaxed">
  Under his stewardship, the company launched the iconic SWASTIK brand, forged technical partnerships with global leaders like GROZ-BECKERT, and earned Export Excellence Awards that brought the Jaydeep name to international markets. His legacy is not measured merely in revenue or reach — it is measured in the thousands of looms across the world that run flawlessly on Jaydeep precision.
</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-10 border-t border-gray-100 mt-10">
                <div className="w-12 h-12 bg-[#da222a] flex items-center justify-center">
                  <Award className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-gray-900">Multiple Export Excellence Awards</p>
                  <p className="text-[10px] text-[#da222a] font-black uppercase tracking-[0.25em] mt-0.5">Recognized by the Government of India</p>
                </div>
              </div>
            </div>

            {/* Right: Stats column */}
            <div className="col-span-3 flex flex-col divide-y divide-gray-200">
              {founderStats.map((stat, i) => (
                <div key={i} className="flex-1 p-10 flex flex-col justify-center items-start group hover:bg-gray-50 transition-colors duration-300 relative overflow-hidden">
                  <stat.icon className="w-6 h-6 text-gray-300 group-hover:text-[#da222a] transition-colors mb-4" />
                  <span className="text-5xl font-black text-gray-900 tracking-tighter group-hover:text-[#da222a] transition-colors">{stat.value}</span>
                  <p className="text-sm font-black uppercase tracking-widest text-gray-900 mt-1">{stat.label}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{stat.sub}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#da222a] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE: Redesigned founder detail — cinematic & editorial */}
          <div className="lg:hidden">

            {/* Hero portrait block — full bleed with editorial overlay */}
            <div className="relative w-full aspect-[3/4] overflow-hidden contrast-90">
              <Image src="/DCD.jpeg" alt="Founder" fill className="object-cover object-top scale-105" />
              {/* Multi-stop gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
              {/* Red top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#da222a]" />
              {/* Top-left label */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-5 h-[2px] bg-[#da222a]" />
                <span className="text-[8px] font-black text-white/70 uppercase tracking-[0.4em]">Jaydeep Industries</span>
              </div>
              {/* Bottom identity block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
                <p className="text-[9px] font-black text-[#da222a] uppercase tracking-[0.5em] mb-2"></p>
                <h3 className="text-[2.6rem] font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-3">
                  Founder
                </h3>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-[#da222a]" />
                  <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em]">50+ Years of Vision</span>
                </div>
              </div>
              {/* Large ghost number */}
              <span className="absolute top-6 right-5 text-[7rem] font-black text-white/5 italic leading-none pointer-events-none">01</span>
            </div>

            {/* Quote strip — dark, full-width, typographically bold */}
            <div className="bg-gray-950 px-6 py-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#da222a]" />
              <Quote className="text-[#da222a]/30 w-10 h-10 mb-3" />
              <p className="text-[1.35rem] font-black text-white uppercase italic tracking-tighter leading-[1.15] pl-2">
                "I did not build a company. I built a standard — and a standard lives forever."
              </p>
            </div>

            {/* Story block — clean white with strong typographic hierarchy */}
            <div className="bg-white border-b border-gray-100">
              {/* Section label */}
              <div className="px-6 pt-8 pb-4 border-b border-gray-100 flex items-center gap-3">
                <div className="h-[2px] w-6 bg-[#da222a]" />
                <span className="text-[9px] font-black text-[#da222a] uppercase tracking-[0.5em]">His Story</span>
              </div>
              <div className="px-6 py-7 space-y-5">
                <p className="text-[0.9rem] text-gray-600 font-medium leading-[1.75]">
                  Beginning with nothing more than a vision for manufacturing excellence, our founder laid the cornerstone of Jaydeep Industries in 1976. With a background rooted in textile engineering and an unrelenting drive for quality, he pioneered wire healds and weaving accessories at a time when India's textile industry was rapidly expanding.
                </p>
                <p className="text-[0.9rem] text-gray-600 font-medium leading-[1.75]">
                  His defining philosophy — that reliability must be <span className="font-black text-gray-900">engineered into every component</span>, not inspected in at the end — shaped every process, every hire, and every product that left the factory floor.
                </p>
                <p className="text-[0.9rem] text-gray-600 font-medium leading-[1.75]">
                  Under his stewardship, the company launched the iconic SWASTIK brand, forged partnerships with global leaders like GROZ-BECKERT, and earned Export Excellence Awards that brought the Jaydeep name to 25+ countries.
                </p>
              </div>
              {/* Award badge */}
              <div className="mx-6 mb-8 flex items-center gap-4 bg-gray-50 border border-gray-200 p-4">
                <div className="w-10 h-10 bg-[#da222a] flex items-center justify-center flex-shrink-0">
                  <Award className="text-white w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-gray-900 leading-tight">Multiple Export Excellence Awards</p>
                  <p className="text-[9px] text-[#da222a] font-black uppercase tracking-[0.25em] mt-0.5">Recognized by the Government of India</p>
                </div>
              </div>
            </div>

            {/* Stats — 2x2 grid */}
<div className="grid grid-cols-2 border-t border-gray-200">
  {founderStats.map((stat, i) => (
    <div key={i} className="flex flex-col justify-between p-6 relative overflow-hidden bg-white border-b border-r border-gray-200 odd:border-r even:border-r-0">
      <stat.icon className="w-5 h-5 text-[#da222a] mb-5" />
      <div>
        <span className="text-[2.4rem] font-black text-gray-900 tracking-tighter leading-none block">{stat.value}</span>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-900 mt-2 leading-tight">{stat.label}</p>
        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{stat.sub}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#da222a]" />
    </div>
  ))}
</div>

          </div>
        </div>
      </div>                
      {/* 02: PHASES SECTION */}
      <div className="py-24 border-b border-gray-200 bg-gray-50/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[3px] w-10 bg-[#da222a]" />
                <span className="text-[#da222a] font-black uppercase tracking-[0.4em] text-[10px]">
                  Evolutionary Path
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-gray-900 leading-none">
                Phases of Jaydeep.
              </h2>
            </div>
            {/* Mobile Only Hint */}
            <div className="md:hidden flex items-center gap-2 text-gray-400">
               <span className="text-[10px] font-bold uppercase tracking-widest">Slide to explore</span>
               <ArrowRight size={14} className="animate-pulse" />
            </div>
          </div>

          {/* DESKTOP PHASES GRID (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-4 border border-gray-200 bg-white">
            {phaseEvents.map((phase, i) => (
              <div
                key={i}
                className="group relative p-10 border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black text-gray-900 group-hover:text-[#da222a] transition-colors">
                    {phase.year}
                  </span>
                  <div className="w-8 h-[2px] bg-gray-200 group-hover:w-full group-hover:bg-[#da222a] transition-all duration-500 origin-right" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-widest text-gray-900">{phase.title}</h4>
                    <p className="text-[10px] font-bold text-[#da222a] uppercase tracking-[0.2em]">{phase.subtitle}</p>
                  </div>
                  <p className="text-base text-gray-500 font-medium leading-relaxed">{phase.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#da222a] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* MOBILE PHASES SNAP SLIDER (Hidden on Desktop) */}
          <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
             {phaseEvents.map((phase, i) => (
                <div key={i} className="min-w-[85vw] snap-center bg-white p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                   <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-4xl font-black text-gray-900 italic italic">{phase.year}</span>
                      <div className="h-[2px] flex-grow bg-gray-100" />
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xl font-black uppercase tracking-tighter text-gray-900">{phase.title}</h4>
                      <p className="text-[11px] font-black text-[#da222a] uppercase tracking-widest bg-red-50 inline-block px-2 py-1">{phase.subtitle}</p>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{phase.description}</p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>


      {/* 04: VISION & MISSION */}
      <div className="grid lg:grid-cols-2 border-b border-gray-200">
        <div className="p-16 lg:p-28 border-r border-gray-200 flex flex-col justify-center space-y-10">
          <Zap className="w-14 h-14 text-[#da222a]" />
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900">Our Vision.</h3>
          <p className="text-xl md:text-2xl text-gray-500 font-black uppercase leading-tight tracking-tighter">
            To be a globally trusted manufacturer upholding values of precision, quality, and enduring relationships.
          </p>
        </div>

        <div className="p-16 lg:p-28 bg-gray-50 flex flex-col justify-center space-y-10">
          <History className="w-14 h-14 text-[#da222a]" />
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900">Our Mission.</h3>
          <p className="text-xl md:text-2xl text-gray-600 font-black uppercase leading-tight tracking-tighter">
            Blending traditional expertise with modern automation to deliver consistent, first-rate industrial quality.
          </p>
        </div>
      </div>

      {/* 05: CERTIFICATIONS - ENHANCED VERSION */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-white">
        {[
          { 
            label: "50+ Years Experience", 
            sub: "Manufacturing Mastery", 
            icon: Award,
            desc: "Five decades of engineered reliability." 
          },
          { 
            label: "Quality Assured", 
            sub: "Zero-Defect Protocols", 
            icon: Shield,
            desc: "Rigorous testing for high-speed weaving."
          },
          { 
            label: "Global Standards", 
            sub: "International Benchmarks", 
            icon: Globe,
            desc: "Serving 25+ global industrial markets."
          },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 border-r border-gray-200 last:border-r-0 flex flex-col items-center text-center group relative overflow-hidden"
          >
            {/* Subtle background number for industrial feel */}
            <span className="absolute -bottom-4 -right-2 text-8xl font-black text-gray-50 group-hover:text-red-50/50 transition-colors duration-500 italic pointer-events-none">
              0{i + 3}
            </span>

            <div className="relative z-10">
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                <item.icon className="h-12 w-12 text-gray-400 group-hover:text-[#da222a] transition-all duration-300 transform group-hover:scale-110" />
              </div>
              
              <h4 className="font-black text-2xl uppercase tracking-tighter text-gray-900 group-hover:text-[#da222a] transition-colors">
                {item.label}
              </h4>
              
              <p className="text-[11px] font-black text-[#da222a] uppercase tracking-[0.2em] mt-2 mb-4">
                {item.sub}
              </p>

              <p className="text-sm text-gray-400 font-medium max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>

            {/* Bottom active line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#da222a] group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}