"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Info,
  ShoppingBag,
  MessageSquare,
  Star,
  Phone,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bottomNavigation = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Product", href: "/products", icon: ShoppingBag },
  { label: "Contact", href: "/contact", icon: Phone },
];

const detailedNavigation = [
  { label: "About Us", href: "/about", icon: Info },
  { label: "Weaving Solutions", href: "/products", icon: ShoppingBag },
  { label: "Feedback & Inquiry", href: "/feedback", icon: MessageSquare },
  { label: "Success Stories", href: "/success", icon: Star },
  { label: "Contact Us", href: "/contact", icon: Phone },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

// Declare global type for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldBeSolid = !isHomePage || scrolled;

  // Load Google Translate script once
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,de,it,zh-CN,ja,ko",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Trigger Google Translate via the hidden combo select
  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);

    // Small delay to ensure Google Translate widget is ready
    setTimeout(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  return (
    <>
      {/* Hidden Google Translate widget — we use our own UI */}
      <div id="google_translate_element" className="hidden" />

      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldBeSolid
            ? "bg-black/95 backdrop-blur-lg shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1800px] px-6 lg:px-12 flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Jaydeep Industries"
              width={120}
              height={120}
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {detailedNavigation.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-3 text-white font-black uppercase tracking-tighter text-sm xl:text-base group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#da222a] group-hover:w-8 transition-all duration-300 rounded-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Language Selector */}
            <select
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
              translate="no"
              className="hidden md:block bg-black border border-white/30 text-white text-xs px-2 py-1 rounded cursor-pointer notranslate"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            {/* Swastik Logo */}
            <div className="relative">
              <Image
                src="/swastik-logo-removebg-preview1.png"
                alt="Brand Logo"
                width={200}
                height={200}
                className="h-20 w-20 md:h-24 lg:h-28 lg:w-28 object-contain brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE FLOATING DOCK */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-md lg:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/85 backdrop-blur-2xl border border-white/20 rounded-full p-2 flex items-center justify-around shadow-2xl"
        >
          {bottomNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center p-3 transition-all ${
                pathname === item.href ? "text-[#da222a]" : "text-white/60"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">
                {item.label}
              </span>
            </Link>
          ))}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center p-3 text-white/60"
          >
            <Menu size={20} />
            <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">
              Menu
            </span>
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col justify-between p-6 md:p-10 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[#da222a] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white bg-white/10 p-3 rounded-full active:scale-90 transition-transform"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 mb-10">
              {detailedNavigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-6 py-6 border-b border-white/5 group active:bg-white/5 transition-colors"
                  >
                    <item.icon className="text-[#da222a] shrink-0" size={26} />
                    <span className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Language Buttons */}
            <div className="space-y-10">
              <div className="grid grid-cols-3 gap-3" translate="no">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    translate="no"
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-4 border font-bold uppercase text-[10px] rounded transition-all
                      ${
                        currentLang === lang.code
                          ? "bg-[#da222a] border-[#da222a] text-white"
                          : "bg-white/[0.03] border-white/10 text-white active:bg-[#da222a]"
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-white/5">
                <div className="space-y-1 text-left">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                    Jaydeep Industries
                  </p>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                    Since 1976
                  </p>
                </div>
                <Image
                  src="/swastik-logo-removebg-preview1.png"
                  alt="Swastik"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain brightness-110 drop-shadow-[0_0_8px_rgba(218,34,42,0.4)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}