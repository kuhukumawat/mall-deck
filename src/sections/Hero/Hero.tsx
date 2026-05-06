"use client";

import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
    return (
        <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">

            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Premium Glassmorphic & Gradient Overlays */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div variants={fadeUp} className="mb-6">
                    <span className="glass-dark px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-white/80">
                        Welcome to the Future
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-4xl md:text-9xl font-bold leading-[1.1] tracking-tight text-white mb-6"
                >
                    A Global Stage <br className="hidden md:block" />
                    <span className="text-gradient-gold italic pr-2">for Brands</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-base md:text-xl max-w-2xl text-white/70 font-light leading-relaxed"
                >
                    Where retail, entertainment, and culture converge at an unprecedented scale. Experience the pinnacle of modern luxury.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-12 flex gap-4">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-[#F3E5AB] transition-colors duration-300">
                        Explore Directory
                    </button>
                    <button className="glass px-8 py-4 rounded-full font-medium tracking-wide text-white hover:bg-white/10 transition-colors duration-300">
                        VIP Access
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
                />
            </motion.div>
        </section>
    );
}