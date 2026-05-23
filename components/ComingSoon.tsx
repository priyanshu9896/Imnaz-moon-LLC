"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

/* ─── animation helpers ─── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/* ─── Live countdown logic ─── */
const LAUNCH_DATE = new Date("2026-06-06T00:00:00+04:00"); // Dubai timezone

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, LAUNCH_DATE.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function ComingSoon() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = time
    ? [
        { value: pad(time.days), label: "Days", progress: (time.days % 30) / 30 },
        { value: pad(time.hours), label: "Hours", progress: time.hours / 24 },
        { value: pad(time.minutes), label: "Minutes", progress: time.minutes / 60 },
        { value: pad(time.seconds), label: "Seconds", progress: time.seconds / 60 },
      ]
    : [
        { value: "--", label: "Days", progress: 0 },
        { value: "--", label: "Hours", progress: 0 },
        { value: "--", label: "Minutes", progress: 0 },
        { value: "--", label: "Seconds", progress: 0 },
      ];

  return (
    <div className="page-wrapper">
      {/* ─── Animated background blobs ─── */}
      <div aria-hidden className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ─── Floating card ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="card"
      >
        {/* ── soft inner glow ── */}
        <div aria-hidden className="card-glow" />

        {/* ─── Logo + Company Name ─── */}
        <motion.header {...fade(0.15)} className="card-header">
          <div className="logo-mark">
            <span className="logo-text">IM</span>
          </div>
          <h2 className="company-name">Imnaz Moon</h2>
          <p className="company-sub">Technical Services L.L.C</p>
          <div className="divider" />
        </motion.header>

        {/* ─── Hero heading ─── */}
        <motion.div {...fade(0.3)} className="hero-section">
          <h1 className="hero-heading">
            We Are
            <br />
            <span className="hero-highlight">
              Coming Soon
              <span aria-hidden className="highlight-bar" />
            </span>
          </h1>
        </motion.div>

        <motion.p {...fade(0.4)} className="hero-subtitle">
          Our digital experience is currently being crafted.
        </motion.p>

        <motion.p {...fade(0.45)} className="launch-label">
          Launching Soon
        </motion.p>

        {/* ─── Countdown ─── */}
        <motion.div {...fade(0.55)} className="countdown-row">
          {countdown.map((item) => (
            <div key={item.label} className="countdown-item">
              <div className="countdown-ring-wrapper">
                <svg className="countdown-ring" viewBox="0 0 80 80">
                  <circle
                    className="ring-bg"
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    strokeWidth="2.5"
                  />
                  <circle
                    className="ring-progress"
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    strokeWidth="2.5"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - item.progress)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="countdown-value">{item.value}</span>
              </div>
              <span className="countdown-label">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── Contact info ─── */}
        <motion.div {...fade(0.65)} className="contact-section">
          <div className="contact-row">
            <a
              href="https://maps.google.com/?q=Dubai,UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                <MapPin size={16} strokeWidth={1.8} />
              </span>
              <span className="contact-text">Dubai, UAE</span>
            </a>

            <a href="tel:+971589329577" className="contact-link">
              <span className="contact-icon">
                <Phone size={16} strokeWidth={1.8} />
              </span>
              <span className="contact-text">+971 58 932 9577</span>
            </a>

            <a
              href="mailto:mohdimranshekh8@gmail.com"
              className="contact-link"
            >
              <span className="contact-icon">
                <Mail size={16} strokeWidth={1.8} />
              </span>
              <span className="contact-text">mohdimranshekh8@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* ─── Footer ─── */}
        <motion.footer {...fade(0.75)} className="card-footer">
          <p className="footer-copyright">
            © 2026 Imnaz Moon Technical Services L.L.C
          </p>
          <p className="footer-credit">Designed with Precision</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
