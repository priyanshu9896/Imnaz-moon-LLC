"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

/* ─── tiny stagger helper ─── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const COUNTDOWN = [
  { value: "14", label: "Days" },
  { value: "08", label: "Hours" },
  { value: "45", label: "Minutes" },
  { value: "22", label: "Seconds" },
];

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 py-12">
      {/* ─── Animated background blobs ─── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="blob-1 absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#CFE8AE]/40 blur-[100px]" />
        <div className="blob-2 absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-[#E7F4D8]/50 blur-[110px]" />
        <div className="blob-3 absolute -bottom-20 left-1/3 h-[360px] w-[360px] rounded-full bg-[#CFE8AE]/30 blur-[120px]" />
      </div>

      {/* ─── Floating card ─── */}
      <div className="card-float w-full max-w-[780px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[2rem] border border-white/80 bg-white/70 px-8 py-14 shadow-[0_8px_60px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:px-16 sm:py-20"
        >
          {/* ── soft inner top glow ── */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#E7F4D8]/70 to-transparent blur-[50px]"
          />

          {/* ─── Logo + Company Name ─── */}
          <motion.header
            {...fade(0.15)}
            className="relative z-10 mb-14 flex flex-col items-center text-center"
          >
            {/* logo placeholder */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7F4D8] bg-gradient-to-br from-[#F0F9E4] to-white shadow-sm">
              <span className="text-xl font-bold text-[#5A8A2E]">IM</span>
            </div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              Imnaz Moon
            </h2>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#94A3B8]">
              Technical Services L.L.C
            </p>
            {/* divider */}
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-transparent via-[#CFE8AE] to-transparent" />
          </motion.header>

          {/* ─── Hero heading ─── */}
          <motion.div
            {...fade(0.3)}
            className="relative z-10 mb-5 text-center"
          >
            <h1 className="text-[2.6rem] font-extrabold leading-[1.1] tracking-tight text-[#0F172A] sm:text-[3.6rem]">
              WE ARE
              <br />
              <span className="relative inline-block">
                COMING SOON
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 -z-10 h-3.5 w-full -rotate-[0.8deg] rounded bg-[#CFE8AE]/60 sm:h-4"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            {...fade(0.4)}
            className="relative z-10 mx-auto mb-3 max-w-md text-center text-[15px] leading-relaxed text-[#64748B]"
          >
            Our digital experience is currently being crafted.
          </motion.p>

          <motion.p
            {...fade(0.45)}
            className="relative z-10 mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]"
          >
            Launching Soon
          </motion.p>

          {/* ─── Countdown circles ─── */}
          <motion.div
            {...fade(0.55)}
            className="relative z-10 mb-14 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {COUNTDOWN.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#CFE8AE]/70 bg-white shadow-sm sm:h-[78px] sm:w-[78px]">
                  <span className="text-[1.35rem] font-bold text-[#0F172A] sm:text-[1.55rem]">
                    {item.value}
                  </span>
                </div>
                <span className="mt-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ─── Contact info ─── */}
          <motion.div
            {...fade(0.65)}
            className="relative z-10 mb-12 border-t border-[#F1F5F9] pt-10"
          >
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10">
              <a
                href="https://maps.google.com/?q=Dubai,UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7F4D8] bg-[#F7FBF0] text-[#64748B] transition-colors group-hover:border-[#CFE8AE] group-hover:text-[#5A8A2E]">
                  <MapPin size={15} strokeWidth={2} />
                </span>
                <span className="text-[13px] font-medium text-[#0F172A]">
                  Dubai, UAE
                </span>
              </a>

              <a
                href="tel:+971589329577"
                className="group flex items-center gap-2.5 transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7F4D8] bg-[#F7FBF0] text-[#64748B] transition-colors group-hover:border-[#CFE8AE] group-hover:text-[#5A8A2E]">
                  <Phone size={15} strokeWidth={2} />
                </span>
                <span className="text-[13px] font-medium text-[#0F172A]">
                  +971 58 932 9577
                </span>
              </a>

              <a
                href="mailto:mohdimranshekh8@gmail.com"
                className="group flex items-center gap-2.5 transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7F4D8] bg-[#F7FBF0] text-[#64748B] transition-colors group-hover:border-[#CFE8AE] group-hover:text-[#5A8A2E]">
                  <Mail size={15} strokeWidth={2} />
                </span>
                <span className="text-[13px] font-medium text-[#0F172A]">
                  mohdimranshekh8@gmail.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* ─── Footer ─── */}
          <motion.footer
            {...fade(0.75)}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <p className="text-[11px] text-[#94A3B8]">
              © 2026 IMNAZ MOON TECHNICAL SERVICES L.L.C
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-wide text-[#CBD5E1]">
              Designed with Precision
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}
