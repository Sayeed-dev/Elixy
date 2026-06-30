"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen mesh-gradient grid-pattern overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass max-w-2xl rounded-3xl p-8 sm:p-10 lg:p-12"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Connection Intelligence
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stay close to the people{" "}
              <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-sky-300 bg-clip-text text-transparent">
                who matter
              </span>
            </h1>

            <p className="mb-10 max-w-lg text-base leading-relaxed text-blue-100/70 sm:text-lg">
              Track your relationships, log interactions, and never let meaningful
              connections slip away. Built for the way you actually stay in touch.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-royal px-8 py-3.5"
              >
                Add Friend
              </motion.button>
              <motion.a
                href="#friends"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-royal-outline px-8 py-3.5"
              >
                View Network
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
