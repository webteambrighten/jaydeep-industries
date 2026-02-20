"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function MailEyesPage() {
  const specifications = [
    { type: "1010 R", thickness: "0.3 / 0.4", innerDiameter: "2.6 × 2.9" },
    {
      type: "1015 R",
      thickness: "0.35 / 0.5 / 0.4",
      innerDiameter: "3.2 × 1.3",
    },
    { type: "1020 R", thickness: "0.35 / 0.5", innerDiameter: "4.0 × 1.5" },
    { type: "328 R", thickness: "0.5 / 0.9", innerDiameter: "4.2 × 2.3" },
    { type: "355 R", thickness: "0.55 / 0.8", innerDiameter: "5.2 × 2.3" },
    { type: "380 R", thickness: "0.6 / 0.8 / 1.2", innerDiameter: "5.6 × 2.7" },
    { type: "420 R", thickness: "1.0 / 1.4", innerDiameter: "9.4 × 3.0" },
    { type: "480 R", thickness: "1.5", innerDiameter: "13.5 × 7.5" },
  ];

  return (
    <>
      <PageHeroTitle
        title="Mail Eyes"
        description="Hardened and Tinned, for Twin Wire Healds"
        themeColor="red"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative Shadow Element (Red themed) */}
        {/* <div className="absolute top-1/4 right-0 w-[900px] h-[900px] bg-gradient-red-shadow shadow-2xl blur-3xl rounded-full z-0 translate-x-1/2"></div> */}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="flex justify-center gap-2 flex-wrap mb-8">
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Hardened Construction
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Tinned Finish
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-[#da222a] border-red-200"
              >
                Multiple Sizes
              </Badge>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Card className="mb-8 shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Key Features
                </CardTitle>
                <CardDescription>
                  Advanced mail eyes designed for superior performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Special Hardened and Tinned Construction
                        </h3>
                        <p className="text-gray-600">
                          Enhanced durability and corrosion resistance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Twin Wire Heald Compatibility
                        </h3>
                        <p className="text-gray-600">
                          Specifically designed for weaving looms with twin wire
                          healds
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Multiple Shape Options
                        </h3>
                        <p className="text-gray-600">
                          Available in Round, Oval, and Oblong configurations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#da222a] rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold">
                          Smooth Warp Thread Passage
                        </h3>
                        <p className="text-gray-600">
                          Optimized design for efficient weaving operations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="shadow-xl border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#da222a]">
                  Technical Specifications
                </CardTitle>
                <CardDescription>
                  Detailed dimensions and specifications for all available types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[#da222a]">
                          Type
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Approx. Thickness (mm)
                        </TableHead>
                        <TableHead className="font-semibold text-[#da222a]">
                          Approx. Inner Ø (mm)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {specifications.map((spec, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {spec.type}
                          </TableCell>
                          <TableCell>{spec.thickness}</TableCell>
                          <TableCell>{spec.innerDiameter}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Additional sizes available for circular and oblong types.
                  Contact us for complete specifications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
