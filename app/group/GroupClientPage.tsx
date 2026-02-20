"use client";

import { useState } from "react";
import { Users, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import PageHeroTitle from "@/components/page-hero-title"; // New import

interface Company {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

const groupCompanies: Company[] = [
  {
    name: "JAYDEEP INDUSTRIES",
    subtitle: "Manufacturers of all types of Wire Healds",
    description:
      "The Moto of a Company established in India way back in 1976 - Reliability, Consistent Quality & After Sales Service - has driven to a high degree of 'SWASTIK' Brand-Loyalty of its product 'WIRE HEALDS' - widely used in the Weaving Industries of Textile Engineering. The usage of Imported raw Material from MALAYSIA, JAPAN & SWITZERLAND has created tremendous confidence amongst the valued customers on the product quality for the past 23 years. The modern machinery & equipment have further strengthen the image of the company. Today the company can boast of the leading Manufacturers of WIRE HEALDS in the country. Twin Twisted & Inserted Twin Twisted Wire Healds with BRACKER - Switzerland Mail Eyes in a vide size-range are being manufactured in Millions every month. Electro-Nickel Plated Wire Healds are also manufactured in the Factory on its Modern Plating Plant.",
    image: "/placeholder.svg?height=200&width=300",
    details: [
      "Established in 1976",
      "Specializes in SWASTIK brand Wire Healds",
      "Uses imported raw materials from Malaysia, Japan & Switzerland",
      "Modern machinery and equipment",
      "Leading manufacturer of Wire Healds in India",
      "Manufactures Twin Twisted & Inserted Twin Twisted Wire Healds",
      "Produces Electro-Nickel Plated Wire Healds",
    ],
  },
  {
    name: "SHREE SAINATH INDUSTRIES",
    subtitle: "Manufacturers of all types of Metal Reeds",
    description:
      "The proven quality of 'S.S.I.' Metal Reeds has earned respectable image amongst the Weavers for the past 14 years. The relentless efforts of continuous Upgradation of the product with respect to Quality & the Custom-Built Products according to the change in demand have reinforced the confidence of the Customers. The excellent quality of the product is backed by the best quality of Reed Wire from TATAS, MALAYSIAN TIN & AUSTRIALIAN LEAD used in the manufacturing process. The set of Modern Machinery and Expertise of Skilled working staff-members also ascertain the required satisfactory quality of the product for Weaving Industries. The Development of Metal Reeds has been kept in mind day to day, meeting the requirements of upgraded High-Speed & Automatic Weaving Machines and also the Superfine Quality of Clothes. The wide range of Reeds is being offered to suit the Power Looms.",
    image: "/placeholder.svg?height=200&width=300",
    details: [
      "Proven quality of 'S.S.I.' Metal Reeds",
      "Continuous product upgradation",
      "Uses high-quality Reed Wire from TATAS, Malaysian Tin & Australian Lead",
      "Modern machinery and skilled staff",
      "Meets requirements for upgraded High-Speed & Automatic Weaving Machines",
      "Offers wide range of Reeds for Power Looms",
    ],
  },
  {
    name: "JAYDEEP REED MFG. CO.",
    subtitle:
      "Manufacturers of all types of Stainless Steel & Special Metal Reeds",
    description:
      "The conventional Metal Reeds manufactured by the Jaydeep Group of company can not cope with the changing Demand. Jaydeep Reed Manufacturing Company has started last year primarily to meet the changing demands of superfine clothes of the weaving Industries. The fine count Reeds including CHANNEL REEDS, STAINLESS STEEL REEDS, NEEDLE LOOM REEDS & BOLTING REEDS are being manufactured by JAYDEEP REED MFG.CO. in various sizes.",
    image: "/placeholder.svg?height=200&width=300",
    details: [
      "Established to meet demands for superfine clothes",
      "Manufactures CHANNEL REEDS",
      "Manufactures STAINLESS STEEL REEDS",
      "Manufactures NEEDLE LOOM REEDS",
      "Manufactures BOLTING REEDS",
      "Available in various sizes",
    ],
  },
];

export default function GroupClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const openCompanyDetails = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  return (
    <main>
      <PageHeroTitle
        title="Our Group Companies"
        description="Jaydeep Industries is part of a strong network of companies dedicated to excellence in textile manufacturing and weaving accessories."
        themeColor="black"
      />

      {/* Company Cards Section */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        {/* Decorative Shadow Element (black themed) - Increased size and blur */}
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-black-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openCompanyDetails(company)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{company.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collective Strength Section */}
          <div className="bg-white rounded-2xl p-8 mt-16 shadow-2xl border border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-8">
              Our Collective Strength
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#000000]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#000000]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Quality Excellence
                </h3>
                <p className="text-gray-600">
                  Combined expertise ensures superior quality products across
                  all our brands
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#da222a]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#da222a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Our network spans across India and international markets
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a1a1a]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                  Customer Focus
                </h3>
                <p className="text-gray-600">
                  Dedicated to meeting exact requirements of our valued
                  customers
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We are always looking for strategic partnerships and
              collaborations that can help us serve our customers better and
              expand our reach in the textile industry.
            </p>
            <div className="bg-[#da222a] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Joining Our Network?
              </h3>
              <p className="text-white/90 mb-6">
                Contact us to explore partnership opportunities and learn how we
                can work together to serve the textile industry better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-6">
          {selectedCompany && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-[#1a1a1a] mb-2">
                  {selectedCompany.name}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-600 mb-4">
                  {selectedCompany.subtitle}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-60 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedCompany.image || "/placeholder.svg"}
                  alt={selectedCompany.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{selectedCompany.description}</p>
                {selectedCompany.details.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedCompany.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
