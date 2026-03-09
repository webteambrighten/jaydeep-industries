"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Users, Handshake } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title"; // New import

export default function ResellerProgramClientPage() {
  return (
    <main>
      <PageHeroTitle
        title="Reseller Program"
        description="Partner with Jaydeep Industries and grow your business with our high-quality products."
        themeColor="black"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative Shadow Element (black themed) - Increased size and blur */}
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-black-shadow shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold text-[#000000] mb-4">
              Join Our Reseller Network
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Become a valued partner and expand your product offerings with
              Jaydeep Industries trusted weaving accessories and industrial
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <CheckCircle className="h-10 w-10 text-[#da222a] mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                High-Quality Products
              </h3>
              <p className="text-gray-700">
                Offer your customers top-tier weaving accessories and industrial
                components known for durability and performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <Users className="h-10 w-10 text-[#da222a] mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Dedicated Support
              </h3>
              <p className="text-gray-700">
                Receive comprehensive support, marketing materials, and training
                to help you succeed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left"
            >
              <Handshake className="h-10 w-10 text-[#da222a] mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-700">
                Benefit from attractive pricing models that ensure profitability
                for your business.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-16 bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Reseller Application Form
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your Company Name"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>
              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact Person
                </label>
                <Input
                  id="contactPerson"
                  type="text"
                  placeholder="John Doe"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell us about your business and why you want to partner with
                  us.
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your business..."
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>
              <Button
                type="submit"
                className="w-full !bg-[#da222a] !hover:bg-[#da222a]/90 !text-white font-bold rounded-lg py-3"
              >
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
