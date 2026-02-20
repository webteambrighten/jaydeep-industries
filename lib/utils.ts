export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// optional but recommended for translations
export function t(dict: any, key: string, fallback?: string) {
  return dict?.[key] ?? fallback ?? key;
}