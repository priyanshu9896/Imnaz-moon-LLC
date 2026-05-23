"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A96B]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
            <Building2 className="w-6 h-6 text-[#C8A96B]" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold tracking-widest text-white">IMNAZ MOON</span>
            <span className="text-xs text-zinc-400 font-medium tracking-wider">TECHNICAL SERVICES L.L.C</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8A96B] animate-pulse" />
          <span className="text-xs font-medium text-zinc-300">Building Excellence Across Technical Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6 leading-tight"
        >
          Our Digital Experience <br className="hidden md:block" />
          Is Under Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          We&apos;re creating a modern experience to better showcase our technical services and solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="mailto:info@imnazmoon.com"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-[#0F172A] font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
          <div className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full cursor-default backdrop-blur-sm">
            Coming Soon
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white rounded-full opacity-50" />
        <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-[#C8A96B] rounded-full opacity-40" />
        <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white rounded-full opacity-20" />
        <div className="absolute top-[30%] right-[10%] w-1 h-1 bg-white rounded-full opacity-40" />
      </div>
    </section>
  );
}
