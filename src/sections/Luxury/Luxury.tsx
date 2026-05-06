"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Luxury() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-[#D4AF37]" />
                            <span className="text-sm font-medium tracking-widest uppercase text-[#D4AF37]">The Experience</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                            A Destination for <br className="hidden md:block" />
                            <span className="text-gradient-gold italic pr-2">True Luxury</span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl font-light">
                            Home to the world’s most prestigious brands, offering an unmatched
                            luxury retail experience in the heart of a global destination. Step into an environment meticulously crafted for the elite.
                        </p>

                        <button className="glass-dark px-8 py-4 rounded-full font-medium tracking-wide text-white hover:bg-white hover:text-black transition-all duration-500 border border-white/20">
                            Discover The Collection
                        </button>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden group"
                    >
                        {/* Image overlay to ensure it blends nicely */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                        
                        <Image 
                            src="/images/luxury_interior.webp" 
                            alt="Luxury Interior" 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            sizes="(max-w-width: 1024px) 100vw, 50vw"
                        />
                        
                        <div className="absolute bottom-8 left-8 z-20 glass px-6 py-4 rounded-2xl border-white/10">
                            <p className="text-white font-medium tracking-wide">Opulence Perfected.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}