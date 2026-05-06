"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const topBrands = [
    { name: "Chanel", image: "/images/brand_chanel.webp" },
    { name: "Louis Vuitton", image: "/images/brand_lv.webp" },
    { name: "Rolex", image: "/images/brand_rolex.webp" }
];
const midBrands = [
    { name: "Apple", image: "/images/brand_apple.webp" },
    { name: "Tesla", image: "/images/brand_tesla.webp" },
    { name: "Nike", image: "/images/brand_nike.webp" }
];

export default function Retail() {
    return (
        <section id="retail" className="py-20 md:py-32 bg-[#050505] text-white overflow-hidden relative border-t border-white/5">

            <div className="px-6 max-w-6xl mx-auto mb-12 md:mb-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4"
                >
                    A Curated <span className="text-gradient-gold">Ecosystem</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-white/50 text-sm md:text-lg max-w-xl font-light leading-relaxed"
                >
                    From haute couture to cutting-edge technology, experience the most coveted brands in the world.
                </motion.p>
            </div>

            {/* Gradient Masks for Marquee */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4 md:gap-6 relative z-0 mt-6 md:mt-10 overflow-hidden">
                <MarqueeRow brands={topBrands} direction={-1} speed={40} />
                <MarqueeRow brands={midBrands} direction={1} speed={35} />
            </div>

        </section>
    );
}

interface CardProps {
    brands: {
        name: string;
        image: string;
    }[];
    direction: number;
    speed: number;
}
function MarqueeRow({ brands, direction, speed }: CardProps) {

    const repeatedBrands = Array(12).fill(brands).flat();

    return (
        <motion.div
            initial={{ x: direction > 0 ? "-50%" : "0%" }}
            animate={{ x: direction > 0 ? "0%" : "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            className="flex whitespace-nowrap w-max"
        >
            {repeatedBrands.map((brand, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl min-w-[280px] h-[160px] cursor-pointer border border-white/5 mr-6">
                    {/* Background Image */}
                    <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                        sizes="300px"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <p className="text-xl md:text-2xl font-medium text-white/90 group-hover:text-white transition-colors tracking-wide relative z-10">{brand.name}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}