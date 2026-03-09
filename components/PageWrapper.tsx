"use client";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  return (
    <main className={isHomePage ? "" : "pt-[80px] md:pt-[96px] lg:pt-[100px]"}>
      {children}
    </main>
  );
}