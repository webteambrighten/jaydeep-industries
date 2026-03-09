"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      return { label, href };
    }),
  ];

  return (
    <nav className="py-4 bg-[#000000]/5" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-gray-600 text-sm md:text-base">
          {breadcrumbs.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              {index > 0 && (
                <ChevronRight
                  className="h-4 w-4 text-gray-400 mx-2 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-semibold text-[#1a1a1a]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-[#da222a] transition-colors duration-200 flex items-center"
                >
                  {item.label === "Home" ? (
                    <Home className="h-4 w-4 mr-1" />
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
