"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { number: "100M+", label: "Annual Visitors", desc: "A constant flow of global consumers.", delay: 0.1, span: "md:col-span-2 md:row-span-2" },
    { number: "1,200+", label: "Retail Stores", desc: "The world's leading brands in one place.", delay: 0.2, span: "md:col-span-1" },
    { number: "Global", label: "Audience Reach", desc: "Connecting cultures and commerce.", delay: 0.3, span: "md:col-span-1" },
];

type StatCardProps = {
    number: string;
    label: string;
    desc: string;
    delay: number;
    span?: string;
}

export default function Why() {
    return (
        <section className="py-32 px-6 relative bg-[#eeeeee] text-black">

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Why This <span className="text-gradient-gold">Destination</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-xl">
                        Unmatched scale, unparalleled luxury, and a continuous pulse of global culture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ number, label, desc, delay, span }: StatCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`bg-[#fafafa] border border-gray-100 shadow-sm p-8 md:p-12 rounded-3xl flex flex-col justify-end relative overflow-hidden group hover:shadow-md transition-shadow duration-500 ${span}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: delay + 0.2 }}
                    className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 mb-2"
                >
                    {number}
                </motion.h3>
                <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-2">{label}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </motion.div>
    );
}