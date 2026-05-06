"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Events() {
    return (
        <section id="events" className="relative py-24 md:py-40 px-6 bg-[#0a0a0a] text-white overflow-hidden text-center flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/events_gala.webp"
                    alt="Global Events Platform"
                    fill
                    className="object-cover opacity-30 md:opacity-40 scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0a0a0a]/80 to-[#0a0a0a]/30" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 md:mb-6 flex items-center justify-center gap-4">
                        <div className="w-8 md:w-12 h-[1px] bg-[#D4AF37]" />
                        <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#D4AF37]">Host & Inspire</span>
                        <div className="w-8 md:w-12 h-[1px] bg-[#D4AF37]" />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                        A Global Stage <br className="hidden md:block" />
                        <span className="text-gradient-gold italic pr-2">For Events</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-xl text-white/60 mb-8 md:mb-12 font-light leading-relaxed">
                        From large-scale concerts to exclusive brand activations and product launches,
                        this destination offers unmatched visibility, cutting-edge facilities, and a truly captive audience.
                    </p>

                    <button className="glass-dark w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium tracking-wide text-white hover:bg-white hover:text-black transition-all duration-500 border border-white/20">
                        Inquire About Hosting
                    </button>
                </motion.div>
            </div>
        </section>
    );
}