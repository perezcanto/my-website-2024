"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return

    let newPath = ""

    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    }
    else if (pathname === "/") {
      newPath = `/${newLocale}`
    }
    else {
      newPath = `/${newLocale}${pathname}`
    }

    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1 shadow-sm">
      <button
        onClick={() => changeLanguage("en")}
        className={`relative flex h-8 items-center justify-center rounded-md px-3 text-xs md:text-sm font-medium transition-all ${
          locale === "en" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("es")}
        className={`relative flex h-8 items-center justify-center rounded-md px-3 text-xs md:text-sm font-medium transition-all ${
          locale === "es" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  )
}
