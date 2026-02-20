"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MessageSquare, Star, Lightbulb } from "lucide-react";
import PageHeroTitle from "@/components/page-hero-title";
import { useState } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "General Feedback",
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
      const response = await fetch("http://127.0.0.1:8000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          type: "General Feedback",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="font-heading">
      <PageHeroTitle
        title="Feedback & Inquiry"
        description="Provide your feedback or send us an inquiry."
        themeColor="black"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4 uppercase tracking-tighter">
              Your Feedback Matters to Us
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
              At Jaydeep Industries, we are constantly striving to improve. Your feedback helps us enhance our products, services, and overall customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* FORM */}
            <motion.div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-left">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
                Share Your Thoughts
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-bold">
                    Thank you for your feedback! We'll review it carefully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-bold">
                    Sorry, there was an error submitting your feedback. Please try again.
                  </p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Your Name
                  </label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Your Email
                  </label>
                  <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Type of Feedback
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="block w-full p-3 border border-gray-200 rounded-lg font-bold"
                  >
                    <option>General Feedback</option>
                    <option>Product Suggestion</option>
                    <option>Service Improvement</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Your Message
                  </label>
                  <Textarea name="message" rows={5} value={formData.message} onChange={handleInputChange} required />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full !bg-[#da222a] !text-white font-black uppercase">
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 space-y-8 text-left">
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Why Your Feedback is Important
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-8 w-8 text-[#da222a]" />
                  <div>
                    <h4 className="text-xl font-black uppercase">
                      Continuous Improvement
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Your insights directly contribute to the ongoing refinement of our industrial offerings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-[#da222a]" />
                  <div>
                    <h4 className="text-xl font-black uppercase">
                      Customer Satisfaction
                    </h4>
                    <p className="text-gray-600 font-medium">
                      We use your comments to ensure our services meet and exceed your professional expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-8 w-8 text-[#da222a]" />
                  <div>
                    <h4 className="text-xl font-black uppercase">
                      Innovation & Growth
                    </h4>
                    <p className="text-gray-600 font-medium">
                      New ideas and suggestions help us innovate and expand our manufacturing capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
