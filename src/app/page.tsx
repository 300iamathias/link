"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Music2,
  Share2,
  ChevronRight,
} from "lucide-react";
import { useCallback } from "react";

const socialLinks = [
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@jimbrapc",
    icon: Music2,
    color: "from-[#00f2ea] to-[#ff0050]",
    hoverColor: "hover:shadow-[#00f2ea]/30",
    description: "Síguenos en TikTok",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCM4kmcDRpe3hBHCMURTmohQ",
    icon: Youtube,
    color: "from-[#ff0000] to-[#cc0000]",
    hoverColor: "hover:shadow-red-500/30",
    description: "Mira nuestros videos",
  },
  {
    name: "Sitio Web",
    url: "https://www.jimbra.net",
    icon: Globe,
    color: "from-emerald-400 to-emerald-600",
    hoverColor: "hover:shadow-emerald-500/30",
    description: "Visita nuestro sitio web",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jimbra_tech",
    icon: Instagram,
    color: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
    hoverColor: "hover:shadow-pink-500/30",
    description: "Síguenos en Instagram",
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/jimbra_2",
    icon: Twitter,
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/30",
    description: "Síguenos en X",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/JimbraTech/",
    icon: Facebook,
    color: "from-[#1877f2] to-[#0d5bbd]",
    hoverColor: "hover:shadow-blue-500/30",
    description: "Síguenos en Facebook",
  },
];

const socialIcons = [
  { icon: Music2, url: "https://www.tiktok.com/@jimbrapc", label: "TikTok" },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCM4kmcDRpe3hBHCMURTmohQ",
    label: "YouTube",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/jimbra_tech",
    label: "Instagram",
  },
  { icon: Twitter, url: "https://twitter.com/jimbra_2", label: "X" },
  {
    icon: Facebook,
    url: "https://www.facebook.com/JimbraTech/",
    label: "Facebook",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Home() {
  const handleLinkClick = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background - CSS only, no JS overhead */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 sm:py-12 max-w-lg mx-auto w-full">
        <motion.div
          className="flex flex-col items-center mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={textVariants} className="mb-4">
            <div
              className="rounded-2xl overflow-hidden shadow-xl shadow-black/40 bg-white"
              style={{ width: 100, height: 100 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jimbra-logo.png"
                alt="JIMBRA"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            JIMBRA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-emerald-400 font-semibold text-sm sm:text-base mt-1 tracking-wide uppercase"
          >
            Todo lo que necesitas
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={textVariants}
            className="text-slate-400 text-center text-sm sm:text-base mt-3 max-w-xs leading-relaxed"
          >
            Páginas que venden. Sistemas que trabajan solos. IA que atiende
            24/7. Todo lo que necesitas para dejar de llevar tu negocio a mano.
          </motion.p>
        </motion.div>

        {/* Link Buttons */}
        <motion.div
          className="w-full space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.button
              key={link.name}
              variants={itemVariants}
              onClick={() => handleLinkClick(link.url)}
              className={`group relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-left transition-all duration-200 hover:border-white/20 hover:bg-white/10 ${link.hoverColor} hover:shadow-lg cursor-pointer active:scale-[0.98]`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`}
              />
              <div
                className={`relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} shrink-0 shadow-lg`}
              >
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {link.name}
                </h3>
                <p className="text-slate-400 text-xs truncate">
                  {link.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </motion.button>
          ))}
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-110 active:scale-90"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.3 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Share button */}
        <motion.button
          className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer active:scale-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "JIMBRA - Todo lo que necesitas",
                text: "Páginas que venden. Sistemas que trabajan solos. IA que atiende 24/7.",
                url: "https://link.jimbra.net",
              });
            } else {
              navigator.clipboard.writeText("https://link.jimbra.net");
            }
          }}
        >
          <Share2 className="w-3.5 h-3.5" />
          Compartir perfil
        </motion.button>
      </main>

      {/* Footer */}
      <footer className="mt-auto pb-6 pt-8 text-center">
        <motion.a
          href="https://www.jimbra.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 text-xs flex items-center justify-center gap-1 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Desarrollado por{" "}
          <span className="text-emerald-400 font-semibold">Jimbra</span>
        </motion.a>
        <motion.p
          className="text-slate-600 text-[10px] mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          © {new Date().getFullYear()} Jimbra
        </motion.p>
      </footer>
    </div>
  );
}
