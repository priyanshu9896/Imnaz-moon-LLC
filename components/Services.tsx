"use client";

import { motion } from "framer-motion";
import { Zap, HardHat, PaintRoller, Hammer, Wrench, Grid2x2 } from "lucide-react";

const services = [
  {
    title: "Electromechanical Installation",
    icon: <Zap className="w-5 h-5" />,
    description: "Expert MEP solutions for commercial and residential projects."
  },
  {
    title: "Technical Contracting",
    icon: <HardHat className="w-5 h-5" />,
    description: "Comprehensive technical management and execution."
  },
  {
    title: "Painting & Finishing",
    icon: <PaintRoller className="w-5 h-5" />,
    description: "Premium surface treatments and protective coatings."
  },
  {
    title: "Carpentry & Flooring",
    icon: <Hammer className="w-5 h-5" />,
    description: "Custom woodwork and high-quality floor installations."
  },
  {
    title: "Maintenance Services",
    icon: <Wrench className="w-5 h-5" />,
    description: "Reliable ongoing maintenance and facility management."
  },
  {
    title: "Interior Fit-Out",
    icon: <Grid2x2 className="w-5 h-5" />,
    description: "Complete interior transformations and space planning."
  }
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-zinc-400">Delivering excellence across a comprehensive range of technical services.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96B] mb-6 group-hover:scale-110 group-hover:bg-[#C8A96B]/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
