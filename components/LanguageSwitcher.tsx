"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { locales, languageNames, languageFlags, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  variant?: "select" | "buttons"; // select = dropdown, buttons = grid of buttons
  className?: string;
}

export default function LanguageSwitcher({
  variant = "select",
  className = "",
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // Strip current locale prefix from path if present
    let newPath = pathname;
    for (const l of locales) {
      if (pathname.startsWith(`/${l}/`)) {
        newPath = pathname.replace(`/${l}`, "");
        break;
      } else if (pathname === `/${l}`) {
        newPath = "/";
        break;
      }
    }

    // Add new locale prefix (skip for English since it's the default)
    const finalPath =
      newLocale === "en" ? newPath || "/" : `/${newLocale}${newPath || "/"}`;

    router.push(finalPath);
  };

  if (variant === "buttons") {
    return (
      <div className={`grid grid-cols-3 gap-3 ${className}`}>
        {locales.map((lang) => (
          <button
            key={lang}
            onClick={() => handleChange(lang)}
            className={`py-4 border font-bold uppercase text-[10px] rounded transition-all
              ${
                locale === lang
                  ? "bg-[#da222a] border-[#da222a] text-white"
                  : "bg-white/[0.03] border-white/10 text-white active:bg-[#da222a]"
              }`}
          >
            {languageFlags[lang]} {lang.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  // Default: select dropdown
  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value as Locale)}
      className={`bg-black border border-white/30 text-white text-xs px-2 py-1 rounded cursor-pointer ${className}`}
    >
      {locales.map((lang) => (
        <option key={lang} value={lang}>
          {languageFlags[lang]} {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
