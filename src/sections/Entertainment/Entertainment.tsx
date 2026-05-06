"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Entertainment() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="entertainment" ref={ref} className="py-20 md:py-32 px-6 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative h-[350px] md:h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden group order-2 lg:order-1 shadow-2xl"
                    >
                        <Image 
                            src="/images/entertainment_art.webp" 
                            alt="Entertainment & Attractions" 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            sizes="(max-w-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                        
                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/20">
                            <p className="text-black text-sm md:text-base font-medium tracking-wide">Immersive Experiences</p>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 order-1 lg:order-2"
                    >
                        <div className="mb-4 md:mb-6 flex items-center gap-4">
                            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#D4AF37]">Beyond Retail</span>
                            <div className="w-8 md:w-12 h-[1px] bg-[#D4AF37]" />
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
                            Spectacle & <br className="hidden md:block" />
                            <span className="text-gradient-gold italic pr-2">Attractions</span>
                        </h2>
                        
                        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10 max-w-xl font-light">
                            From world-class kinetic art installations to breathtaking immersive environments, discover spaces designed to captivate your senses and elevate every visit.
                        </p>

                        <button 
                            aria-label="Explore mall attractions and entertainment"
                            className="bg-black text-white w-full md:w-auto px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
                        >
                            Explore Attractions
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}