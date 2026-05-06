"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const diningCategories = [
    {
        title: "Fine Dining",
        desc: "Michelin-starred excellence and unparalleled gastronomy.",
        image: "/images/dining_fine_1778068318438.webp",
        span: "lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[500px]",
        delay: 0.1
    },
    {
        title: "Casual Eats",
        desc: "Gourmet flavors in a relaxed setting.",
        image: "/images/dining_casual_1778068343261.webp",
        span: "min-h-[300px]",
        delay: 0.2
    },
    {
        title: "Cafés & Social Spaces",
        desc: "Artisanal coffee and elegant conversation.",
        image: "/images/dining_cafe_1778068361560.webp",
        span: "min-h-[300px]",
        delay: 0.3
    }
];
interface CardProps {
    title: string;
    desc: string;
    image: string;
    span: string;
    delay: number;
}
export default function Dining() {
    return (
        <section id="dining" className="py-20 md:py-32 px-6 bg-[#fafafa] text-black relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <div className="mb-4 flex items-center gap-4">
                            <div className="w-8 md:w-12 h-[1px] bg-[#D4AF37]" />
                            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-[#D4AF37]">Taste & Refinement</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                            Dining & <span className="text-gradient-gold italic pr-2">Lifestyle</span>
                        </h2>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg max-w-sm md:text-right font-light leading-relaxed">
                        Savor a world of culinary masterpieces curated for the most discerning palates.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {diningCategories.map((category, idx) => (
                        <DiningCard key={idx} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DiningCard({ title, desc, image, span, delay }: CardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${span}`}
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-width: 1024px) 100vw, 33vw"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 w-full transform translate-y-2 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/85 text-xs md:text-base font-light opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{desc}</p>
            </div>
        </motion.div>
    );
}