"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Group", href: "/group" },
  { name: "Our Products", href: "/products" },
  { name: "Feedback & Inquiry", href: "/feedback" },
  { name: "We Buy", href: "/we-buy" },
  { name: "Contact", href: "/contact" },
];

export default function ResponsiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar - Responsive */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-2.5 hidden md:block"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center space-x-4 lg:space-x-8"
            >
              <div className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 XXX XXX XXXX</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@jaydeep-industry.com</span>
              </div>
              <div className="hidden xl:flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Manufacturing Unit: India</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 font-medium">
                  ISO 9001:2015 Certified
                </span>
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300 font-medium">Since 1976</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header - Fully Responsive */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-sm shadow-xl border-b-2 border-red-600"
            : "bg-white shadow-lg border-b-3 border-red-600"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-5">
            {/* Logo - Only Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center"
            >
              <Link href="/" className="group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 sm:p-3 bg-gray-50 rounded-xl border-2 border-red-100 group-hover:border-red-300 transition-all duration-300"
                >
                  <Image
                    src="/logo.png"
                    alt="Jaydeep Industries"
                    width={60}
                    height={60}
                    className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Bigger Fonts */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 xl:px-6 py-3 text-gray-800 hover:text-red-600 font-bold text-base xl:text-lg transition-all duration-300 group rounded-lg hover:bg-red-50"
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-8"></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Buttons - Responsive */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden md:flex items-center space-x-2 lg:space-x-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 bg-white font-semibold px-4 lg:px-6 text-sm lg:text-base"
                >
                  <Link href="/feedback">Request Quote</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-black-600 hover:bg-black-700 text-white font-semibold px-4 lg:px-6 text-sm lg:text-base shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-800 hover:text-red-600 p-2"
                  aria-label="Toggle mobile menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu - Enhanced for Mobile & Tablet */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-gray-200 overflow-hidden bg-white"
              >
                <div className="space-y-1 pb-4 pt-4">
                  {/* Mobile Contact Info */}
                  <div className="px-4 py-2 bg-gray-50 mx-2 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span className="font-medium">+91 XXX XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Award className="h-4 w-4 text-black-600" />
                      <span className="font-medium">
                        ISO 9001:2015 Certified
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation - Bigger Fonts */}
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-4 text-lg font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 transition-all duration-300 rounded-lg mx-2 border-l-4 border-transparent hover:border-red-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="px-4 pt-4 space-y-3"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-white font-bold text-base"
                    >
                      <Link
                        href="/feedback"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Request Quote
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-black-600 hover:bg-black-700 text-white font-bold text-base"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
