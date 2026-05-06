"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Why() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why" className="py-20 md:py-32 px-6 relative bg-[#eeeeee] text-black overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-20"
                >
                    <div className="mb-4 md:mb-6 flex items-center gap-4">
                        <div className="w-8 md:w-12 h-[1px] bg-[#D4AF37]" />
                        <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#D4AF37]">The Benchmark</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                        Why This <span className="text-gradient-gold italic pr-2">Destination</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-xl max-w-2xl font-light leading-relaxed">
                        Unmatched scale, unparalleled luxury, and a continuous pulse of global culture. We redefine the physical retail experience.
                    </p>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[600px]">

                    {/* Main Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-2 relative rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 min-h-[400px] lg:min-h-full"
                    >
                        <Image
                            src="/images/why_architecture.webp"
                            alt="Luxury Architecture"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            sizes="(max-w-width: 1024px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                        <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12">
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 drop-shadow-lg">100M+</h3>
                            <h4 className="text-lg md:text-2xl font-medium text-[#D4AF37] mb-2 tracking-wide">Annual Visitors</h4>
                            <p className="text-white/85 text-sm md:text-lg max-w-md font-light">A constant flow of global consumers converging at the intersection of commerce and culture.</p>
                        </div>
                    </motion.div>

                    {/* Secondary Cards Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow border border-black/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-6xl md:text-8xl font-bold">01</div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 mb-2 relative z-10">1,200+</h3>
                            <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-2 relative z-10">Retail Stores</h4>
                            <p className="text-gray-700 text-sm md:text-base font-light relative z-10">The world&#39;s leading luxury and lifestyle brands curated in one sprawling ecosystem.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow border border-black/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-6xl md:text-8xl font-bold">02</div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] mb-2 relative z-10">Global</h3>
                            <h4 className="text-xl font-medium text-gray-900 mb-2 relative z-10">Audience Reach</h4>
                            <p className="text-gray-700 text-sm md:text-base font-light relative z-10">A nexus connecting diverse cultures, international tourists, and premium demographics.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}