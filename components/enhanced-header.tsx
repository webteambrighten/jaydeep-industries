"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
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

export default function EnhancedHeader() {
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
      {/* Top Contact Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-3"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2 hover:text-red-300 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 XXX XXX XXXX</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 hover:text-red-300 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@jaydeep-industry.com</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 hover:text-red-300 transition-colors cursor-pointer">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">India</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <span className="text-red-200 font-medium">
                ISO 9001:2015 Certified
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-red-200 font-medium">Since 1976</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-red-100"
            : "bg-white shadow-lg border-b-2 border-red-600"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-4 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 bg-gradient-to-br from-red-50 to-black-50 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src="/logo.png"
                    alt="Jaydeep Industries"
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                </motion.div>
                <div>
                  <motion.h1
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-bold bg-gradient-to-r from-red-600 via-black-600 to-black bg-clip-text text-transparent"
                  >
                    JAYDEEP INDUSTRIES
                  </motion.h1>
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                    Weaving Excellence Since 1976
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
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
                      className="relative px-4 py-3 text-gray-700 hover:text-red-600 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group rounded-lg hover:bg-red-50"
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-black-600 transition-all duration-300 group-hover:w-8"></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:flex items-center space-x-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 bg-transparent font-semibold shadow-md hover:shadow-lg"
                >
                  <Link href="/feedback">Request Quote</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-red-600 to-black-600 hover:from-red-700 hover:to-black-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-red-600 p-2"
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

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-200 overflow-hidden bg-gradient-to-br from-white to-red-50"
              >
                <div className="space-y-1 pb-4 pt-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 rounded-lg mx-2 border-l-4 border-transparent hover:border-red-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="px-4 pt-4 space-y-3"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent font-semibold"
                    >
                      <Link href="/feedback">Request Quote</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-red-600 to-black-600 hover:from-red-700 hover:to-black-700 text-white font-semibold"
                    >
                      <Link href="/contact">Contact Us</Link>
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
