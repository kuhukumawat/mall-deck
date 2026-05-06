"use client";
import { motion } from "framer-motion";

const topBrands = [
    "Chanel", "Louis Vuitton", "Gucci", "Dior", "Prada", "Hermès", "Rolex", "Cartier"
];
const midBrands = [
    "Apple", "Tesla", "Nike", "Adidas", "Zara", "H&M", "Sephora", "IKEA"
];

export default function Retail() {
    return (
        <section className="py-32 bg-[#050505] text-white overflow-hidden relative border-t border-white/5">

            <div className="px-6 max-w-6xl mx-auto mb-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                >
                    A Curated <span className="text-gradient-gold">Ecosystem</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-white/50 text-base md:text-lg max-w-xl"
                >
                    From haute couture to cutting-edge technology, experience the most coveted brands in the world.
                </motion.p>
            </div>

            {/* Gradient Masks for Marquee */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-0 mt-10 w-[200%]">
                <MarqueeRow brands={[...topBrands, ...topBrands]} direction={-1} speed={40} />
                <MarqueeRow brands={[...midBrands, ...midBrands]} direction={1} speed={35} />
            </div>

        </section>
    );
}

function MarqueeRow({ brands, direction, speed }: { brands: string[], direction: number, speed: number }) {
    return (
        <motion.div
            initial={{ x: direction > 0 ? "-50%" : "0%" }}
            animate={{ x: direction > 0 ? "0%" : "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            className="flex gap-6 whitespace-nowrap"
        >
            {brands.map((name, idx) => (
                <div key={idx} className="glass px-10 py-5 rounded-2xl min-w-[200px] flex items-center justify-center group hover:bg-white/10 transition-colors duration-500 cursor-pointer border border-white/5">
                    <p className="text-xl md:text-2xl font-medium text-white/70 group-hover:text-white transition-colors tracking-wide">{name}</p>
                </div>
            ))}
        </motion.div>
    );
}