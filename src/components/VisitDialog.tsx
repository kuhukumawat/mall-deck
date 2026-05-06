"use client";
import { motion, AnimatePresence } from "framer-motion";

type VisitDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VisitDialog({ isOpen, onClose }: VisitDialogProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Dialog Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Plan Your <span className="text-gradient-gold italic">Visit</span></h2>
                                    <p className="text-white/70 text-sm">Experience the pinnacle of luxury and culture.</p>
                                </div>
                                <button 
                                    onClick={onClose}
                                    aria-label="Close dialog"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/60 uppercase tracking-widest ml-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/60 uppercase tracking-widest ml-1">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/60 uppercase tracking-widest ml-1">Date</label>
                                        <input 
                                            type="date" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/60 uppercase tracking-widest ml-1">Message (Optional)</label>
                                    <textarea 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors h-32 resize-none"
                                        placeholder="Tell us about your interests..."
                                    />
                                </div>

                                <button 
                                    className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#D4AF37] transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Confirm Reservation
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
