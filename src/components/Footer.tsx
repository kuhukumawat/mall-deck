import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-2 md:col-span-2">
                    <Link href="/" className="text-3xl font-bold tracking-widest mb-6 inline-block">
                        THE <span className="text-gradient-gold">MALL</span>
                    </Link>
                    <p className="text-white/70 max-w-sm mb-8 leading-relaxed font-light">
                        The ultimate destination where luxury, culture, and entertainment converge. Experience a new standard of global retail.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors group">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </Link>
                        <Link href="#" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors group">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </Link>
                        <Link href="#" aria-label="Follow us on X (Twitter)" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors group">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium mb-6 text-lg tracking-wide">Explore</h4>
                    <ul className="space-y-4 text-white/70 font-light text-sm md:text-base">
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Directory</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Dining Experiences</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Events & Attractions</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">The Luxury Collection</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-6 text-lg tracking-wide">Information</h4>
                    <ul className="space-y-4 text-white/70 font-light text-sm md:text-base">
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Opening Hours</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Getting Here</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Guest Services</Link></li>
                        <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/60 font-light">
                <p>&copy; {new Date().getFullYear()} The Mall Destination. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
