"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function InsertedWireHealdsPage() {
  const wireGauges = [
    { type: "O Series", size: "25", length: "330mm" },
    { type: "O Series", size: "28", length: "280mm" },
    { type: "H Series", size: "30", length: "260mm" },
  ];

  const oSeriesMailEyes = [
    { length: "100mm", type: "Round" },
    { length: "120mm", type: "Oval" },
    { length: "150mm", type: "Round" },
  ];

  const hSeriesMailEyes = [
    { length: "80mm", type: "Round" },
    { length: "100mm", type: "Oval" },
    { length: "130mm", type: "Round" },
  ];

  const loopTypes = [
    { type: "Double Loop", feature: "Increased durability" },
    { type: "Single Loop", feature: "Economical and easy fitting" },
  ];

  const largeWireSpecs = [
    { swg: "5¼", diaInch: "0.207", diaMM: "5.26", wtPer100M: "99.23" },
    { swg: "5/2", diaInch: "0.131", diaMM: "3.33", wtPer100M: "8.90" },
    { swg: "13", diaInch: "0.086", diaMM: "2.18", wtPer100M: "5.13" },
    { swg: "22", diaInch: "0.028", diaMM: "0.71", wtPer100M: "0.31" },
    { swg: "8.5", diaInch: "0.165", diaMM: "4.19", wtPer100M: "5.00" },
    { swg: "13.75", diaInch: "0.093", diaMM: "2.36", wtPer100M: "0.83" },
    { swg: "24", diaInch: "0.022", diaMM: "0.56", wtPer100M: "0.21" },
    { swg: "18.4", diaInch: "0.048", diaMM: "1.22", wtPer100M: "0.43" },
    { swg: "13.4", diaInch: "0.092", diaMM: "2.34", wtPer100M: "0.25" },
    { swg: "10.4", diaInch: "0.128", diaMM: "3.25", wtPer100M: "0.94" },
    { swg: "16.4", diaInch: "0.064", diaMM: "1.63", wtPer100M: "0.31" },
    { swg: "20.4", diaInch: "0.036", diaMM: "0.91", wtPer100M: "0.36" },
    { swg: "18.5", diaInch: "0.048", diaMM: "1.22", wtPer100M: "0.64" },
    { swg: "22.5", diaInch: "0.028", diaMM: "0.71", wtPer100M: "0.22" },
  ];

  return (
    <>
      <PageHeroTitle
        title="Inserted Wire Healds"
        description="With Groz-Beckert Mail Eyes – Premium quality healds with multiple loop configurations"
        themeColor="red"
      />

      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[520px] bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
          >
            <Image
              src="/w-tween.jpeg"
              alt="Inserted Wire Healds"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">

          {/* Table Sections Wrapped in Horizontal Scroll for Mobile */}
          {[
            { title: "Wire Gauges", desc: "O & H series wire gauges", data: wireGauges, headers: ["Type", "Size", "Length"] },
            { title: "O-Series Mail Eyes", data: oSeriesMailEyes, headers: ["Length", "Type"] },
            { title: "H-Series Mail Eyes", data: hSeriesMailEyes, headers: ["Length", "Type"] },
            { title: "Loop Types", data: loopTypes, headers: ["Type", "Feature"] },
          ].map((section, idx) => (
            <Card key={idx} className="shadow-lg border-none bg-gray-50 md:bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl text-[#da222a] font-black uppercase tracking-tight">
                  {section.title}
                </CardTitle>
                {section.desc && <CardDescription className="font-bold uppercase text-[10px] tracking-widest text-gray-400">{section.desc}</CardDescription>}
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-b-2 border-gray-200">
                        {section.headers.map((h) => (
                          <TableHead key={h} className="font-black text-gray-900 uppercase text-[10px] tracking-wider">{h}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {section.data.map((item: any, i) => (
                        <TableRow key={i} className="border-b border-gray-100">
                          {Object.values(item).map((val: any, j) => (
                            <TableCell key={j} className="font-bold text-gray-700 text-sm">{val}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Large Technical Table with Swipe Indicator */}
          <Card className="shadow-xl border-none bg-gray-900 text-white overflow-hidden">
            <CardHeader className="border-b border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl md:text-2xl text-[#da222a] font-black uppercase tracking-tight">
                    Wire Specifications
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Technical Data Chart</CardDescription>
                </div>
                <div className="md:hidden flex items-center gap-2 text-[#da222a]">
                  <span className="text-[10px] font-black uppercase tracking-widest">Swipe</span>
                  <MoveRight size={14} className="animate-pulse" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  <Table>
                    <TableHeader className="bg-white/5">
                      <TableRow className="hover:bg-transparent border-none">
                        <TableHead className="text-gray-300 font-black uppercase text-[10px] py-5 px-6">SWG</TableHead>
                        <TableHead className="text-gray-300 font-black uppercase text-[10px] py-5 px-6">Dia (inch)</TableHead>
                        <TableHead className="text-gray-300 font-black uppercase text-[10px] py-5 px-6">Dia (mm)</TableHead>
                        <TableHead className="text-gray-300 font-black uppercase text-[10px] py-5 px-6">Wt / 100m</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {largeWireSpecs.map((item, i) => (
                        <TableRow key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <TableCell className="font-black text-[#da222a] py-4 px-6">{item.swg}</TableCell>
                          <TableCell className="font-bold text-gray-300 py-4 px-6">{item.diaInch}</TableCell>
                          <TableCell className="font-bold text-gray-300 py-4 px-6 italic">{item.diaMM} <span className="text-[9px] not-italic opacity-50">MM</span></TableCell>
                          <TableCell className="font-bold text-gray-300 py-4 px-6">{item.wtPer100M}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}