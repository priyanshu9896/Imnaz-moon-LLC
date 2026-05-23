"use client";

import { motion } from "framer-motion";

export default function CompanyInfo() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Company</span>
            <span className="text-sm font-medium text-white">IMNAZ MOON<br/>TECHNICAL SERVICES L.L.C</span>
          </div>
          
          <div className="flex flex-col items-center md:items-start md:border-l border-white/10 md:pl-12">
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</span>
            <span className="text-sm font-medium text-white">Dubai, UAE</span>
          </div>

          <div className="flex flex-col items-center md:items-start md:border-l border-white/10 md:pl-12">
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Status</span>
            <span className="text-sm font-medium text-[#C8A96B]">Website Launching Soon</span>
          </div>
        </motion.div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />
      </div>
    </section>
  );
}
