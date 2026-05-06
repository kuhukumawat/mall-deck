'use client'
import { motion } from "framer-motion";

export default function Events() {
    return (
        <section className="py-24 px-6 bg-white text-black text-center">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-semibold mb-10"
            >
                A Global Platform for Events
            </motion.h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
                From large-scale concerts to brand activations and product launches,
                this destination offers unmatched visibility and engagement.
            </p>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition">
                Host Your Event
            </button>

        </section>
    );
}