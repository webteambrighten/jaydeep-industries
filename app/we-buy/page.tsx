"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title";
import { useState } from "react";

export default function WeBuyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    material: "",
    quantity: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/we-buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          material: "",
          quantity: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <PageHeroTitle
        title="We Buy"
        description="Information about materials or products Jaydeep Industries is interested in purchasing."
        themeColor="black"
      />

      {/* ✅ Fullscreen centered form */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-16 md:py-24">
        {/* Background gradient */}
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-to-r from-black-100 to-black-200 shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        {/* Centered container */}
        <div className="relative z-10 w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
              Inquire About Selling Your Materials:
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="material"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Type of Material
                </label>
                <Input
                  id="material"
                  name="material"
                  type="text"
                  value={formData.material}
                  onChange={handleInputChange}
                  placeholder="e.g., Copper Scrap, HDPE Plastic"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Quantity (approx.)
                </label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g., 5 tons, 100 kg"
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any other relevant information..."
                  className="border-gray-300 focus:border-[#000000] focus:ring-[#000000]"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you! Your inquiry has been submitted successfully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Sorry, there was an error submitting your inquiry. Please
                    try again.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full !bg-[#da222a] !hover:bg-[#da222a]/90 !text-white !rounded-lg py-3 font-bold disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </motion.div>

          {/* Buttons below form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="!bg-[#000000] !hover:bg-[#000000]/90 !text-white font-bold rounded-xl px-8 py-3 shadow-lg"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="!border-2 !border-[#000000] !text-[#000000] !bg-transparent !hover:bg-[#000000] !hover:text-white !font-bold !rounded-xl !px-8 !py-3 !shadow-xl !hover:shadow-2xl !transition-all !duration-300"
            >
              <Link
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Directly
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
