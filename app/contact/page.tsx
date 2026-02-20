"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import PageHeroTitle from "@/components/page-hero-title";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
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

  return (
    <div className="font-heading">
      <PageHeroTitle
        title="Contact Us"
        description="Get in touch with Jaydeep Industries for inquiries, support, or feedback."
        themeColor="black"
      />

      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[900px] h-[900px] bg-gradient-to-r from-black-100 to-black-200 shadow-2xl blur-3xl rounded-full z-0 -translate-x-1/2"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              Contact Jaydeep Industries
            </h2>

            <p className="text-lg text-gray-600 mt-4 font-medium max-w-2xl mx-auto">
              We are here to assist you with any inquiries, support, or feedback you may need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight border-b-2 border-gray-900 pb-2">
                Send Us a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-sm">
                  <p className="text-green-800 font-bold uppercase text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-sm">
                  <p className="text-red-800 font-bold uppercase text-sm">
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} required className="h-12 font-bold" />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Your Email
                  </label>
                  <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="h-12 font-bold" />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <Input name="subject" value={formData.subject} onChange={handleInputChange} required className="h-12 font-bold" />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    Your Message
                  </label>
                  <Textarea name="message" rows={5} value={formData.message} onChange={handleInputChange} required className="font-bold" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full !bg-[#000000] hover:!bg-[#da222a] text-white font-black uppercase tracking-widest h-14">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* DETAILS */}
            <motion.div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 space-y-8">
              <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
                Our Contact Details
              </h3>

              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#da222a]" />
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="font-bold">info@jaydeep-industry.com</p>
                    <p className="font-bold">akd.jaydeep@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#da222a]" />
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="font-bold">+91 9825311311</p>
                    <p className="font-bold">+91 2612912700</p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#da222a]" />
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
                      Address
                    </p>
                    <p className="font-bold">
                      Plot no. D2/92-95 & E1/96-99, Bhagwati Nagar Industrial Estate, Bhestan, Surat - 395023, Gujarat, India
                    </p>
                  </div>
                </li>
              </ul>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  Business Hours
                </h3>
                <p className="font-bold uppercase text-sm">
                  Monday - Saturday: <span>11:00 AM - 5:00 PM</span>
                </p>
              </div>

              <div>
  <h3 className="text-2xl font-black uppercase tracking-tight">
    Find Us on Map
  </h3>

  <div className="relative h-64 w-full bg-gray-50 border-2 border-gray-100 rounded-sm overflow-hidden">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5583465525865!2d72.858464!3d21.130167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05144c8e188f5%3A0x7f28fd279109aa9d!2sJAYDEEP%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1759749248066!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
