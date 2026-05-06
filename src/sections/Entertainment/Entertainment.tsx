'use client'
import { motion } from "framer-motion";

export default function Entertainment() {
    return (
        <section className="py-24 px-6 bg-[#eeeeee]">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-semibold mb-16"
            >
                Entertainment & Attractions
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Video */}
                <div className="rounded-2xl overflow-hidden h-80">
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/entertainment.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Content */}
                <div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        From world-class attractions to immersive experiences, this destination
                        offers more than shopping — it delivers unforgettable moments at scale.
                    </p>
                </div>

            </div>

        </section>
    );
}