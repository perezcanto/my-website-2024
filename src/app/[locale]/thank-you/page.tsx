"use client"

import { Container, Button, FadeIn } from "@/components"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export default function ThankYouPage() {
  const t = useTranslations("metadata.thankYou")

  return (
    <main className="">
      <Container className="py-20 md:py-32">
        <div className="flex flex-col md:flex-row   md:justify-center md:gap-12">
          {/* Left Column - Success Animation */}
          <div className="flex items-center justify-center md:justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full bg-green-50 opacity-30 blur-xl"></div>
              <div className="relative flex h-36 md:h-64 w-36 md:w-64 items-center justify-center rounded-full border-4 border-green-100 bg-white shadow-xl">
                <svg
                  className="h-20 md:h-32 w-20 md:w-32 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <FadeIn className="flex flex-col items-center py-4 sm:py-10 md:py-44 justify-center text-center md:items-start md:text-left">
       
            <h1 className="mt-6 font-title text-4xl font-bold text-black md:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="mt-6 max-w-lg text-lg text-gray-600 md:text-xl">{t("description")}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/" className="group relative overflow-hidden">
                <span className="relative z-10">{t("returnHome", { ns: "common" })}</span>
              </Button>
            
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  )
}
