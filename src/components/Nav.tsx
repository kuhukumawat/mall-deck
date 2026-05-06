"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import VisitDialog from "./VisitDialog";

export default function Nav() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true); // Hide on scroll down
        } else {
            setHidden(false); // Show on scroll up
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["why", "luxury", "dining", "retail", "entertainment", "events"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Why", href: "#why", id: "why" },
        { name: "Luxury", href: "#luxury", id: "luxury" },
        { name: "Dining", href: "#dining", id: "dining" },
        { name: "Retail", href: "#retail", id: "retail" },
        { name: "Entertainment", href: "#entertainment", id: "entertainment" },
        { name: "Events", href: "#events", id: "events" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[95%] md:w-auto z-50 max-w-full"
            >
                <div className="bg-black/40 backdrop-blur-xl text-white px-4 md:px-8 py-3 rounded-full flex items-center justify-between gap-4 md:gap-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
                    <Link href="/" aria-label="Home" className="text-white font-bold tracking-widest text-sm md:text-lg border-r border-white/10 pr-4 md:pr-6 hover:text-[#D4AF37] transition-colors whitespace-nowrap flex-shrink-0">
                        THE <span className="text-gradient-gold">MALL</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`transition-all duration-300 relative py-1 ${
                                    activeSection === link.id ? "text-white" : "text-white/60 hover:text-white/90"
                                }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#D4AF37]"
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                        <button 
                            onClick={() => setIsDialogOpen(true)}
                            aria-label="Open visit reservation form"
                            className="bg-white text-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-500 hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            Visit Us
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between items-end">
                                <motion.span 
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                                    className="h-[2px] bg-white rounded-full"
                                />
                                <motion.span 
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, width: "70%" }}
                                    className="h-[2px] bg-white rounded-full"
                                />
                                <motion.span 
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                                    className="h-[2px] bg-white rounded-full"
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-3 lg:hidden"
                        >
                            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                {navLinks.map((link) => (
                                    <a 
                                        key={link.name} 
                                        href={link.href} 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-lg font-bold tracking-tight p-4 rounded-2xl transition-all ${
                                            activeSection === link.id ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            {link.name}
                                            {activeSection === link.id && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <VisitDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </>
    );
}
