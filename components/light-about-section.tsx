"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Users, Globe, Lightbulb } from "lucide-react";

const features = [
  {
    name: "State-of-the-Art Facilities",
    description: "Equipped with the latest technology for superior production.",
    icon: Factory,
  },
  {
    name: "Experienced Team",
    description:
      "A dedicated workforce committed to excellence and innovation.",
    icon: Users,
  },
  {
    name: "Global Presence",
    description: "Serving clients across continents with reliable solutions.",
    icon: Globe,
  },
  {
    name: "Sustainable Practices",
    description:
      "Committed to eco-friendly manufacturing and responsible growth.",
    icon: Lightbulb,
  },
];

export default function LightAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#000000]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/placeholder.svg?height=700&width=1000"
              alt="About Jaydeep Industries"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Driving Industrial Excellence Since 1976
              </h3>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold text-[#000000] mb-4">
                About Jaydeep Industries
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Jaydeep Industries has been a pioneer in the industrial sector
                for over four decades, consistently delivering high-quality
                products and innovative solutions. Our commitment to excellence,
                sustainability, and customer satisfaction has made us a trusted
                name globally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.1,
                  }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-[#da222a]/10 text-[#da222a]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">
                      {feature.name}
                    </h4>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
