'use client';

import {
    FaSatellite,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaTv,
    FaShieldAlt,
    FaStar,
    FaChevronRight
} from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Top Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">

                    {/* Col 1: Brand & Studio Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-xl bg-white text-black font-black flex items-center justify-center text-xl">
                                DG
                            </div>
                            <span className="text-2xl font-black tracking-wider text-white">DG TV</span>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                            Pakistan's premier broadcast network delivering authentic horoscope readings, rohani guidance, and demystified paranormal investigations nationwide.
                        </p>

                        <div className="space-y-2 pt-2 text-xs text-gray-300">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-gray-500 mt-1 flex-shrink-0" />
                                <span>DG TV Complex, Main Boulevard, Gulberg III, Lahore</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-gray-500 flex-shrink-0" />
                                <span>+92 (42) 3571-0000</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-gray-500 flex-shrink-0" />
                                <span>info@dgtv.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Quick Navigation */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-2.5 text-xs text-gray-300">
                            {['Home', 'Daily Horoscopes', 'Rohani Masail', 'Paranormal Insights', 'Show Schedule'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition flex items-center space-x-1">
                                        <FaChevronRight className="text-[8px] text-gray-600" />
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Technical & Tuning */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                            Tuning Info
                        </h3>
                        <div className="bg-gray-900 border border-gray-800 p-3.5 rounded-2xl text-xs space-y-2">
                            <div className="flex justify-between border-b border-gray-800 pb-1.5 text-gray-400">
                                <span>Satellite</span>
                                <span className="text-white font-bold">Paksat 1R</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-1.5 text-gray-400">
                                <span>Frequency</span>
                                <span className="text-white font-bold">4155 MHz</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Symbol Rate</span>
                                <span className="text-white font-bold">15000 Ksps</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Contact & Sponsorship */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                            Business & Support
                        </h3>
                        <ul className="space-y-2.5 text-xs text-gray-300">
                            <li>
                                <a href="#contact" className="hover:text-white transition">Contact Us</a>
                            </li>
                            <li>
                                <a href="#media-kit" className="hover:text-white transition">Advertisement & Media Kit</a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a>
                            </li>
                            <li>
                                <a href="#guest-booking" className="hover:text-white transition">Guest & Show Booking</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Middle Social Section */}
                <div className="py-8 border-b border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <FaSatellite className="text-gray-500" />
                        <span>Broadcast Available Nationwide via Cable & Satellite</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        {[
                            { icon: FaYoutube, link: 'https://www.youtube.com/@astropalmist727' },
                            { icon: FaFacebookF, link: 'https://facebook.com' },
                            { icon: FaInstagram, link: 'https://instagram.com' },
                            { icon: FaTiktok, link: 'https://tiktok.com' },
                            { icon: FaTv, link: '#' },
                        ].map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black transition text-xs"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Copyright & Legal Terms */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
                    <p>© {currentYear} DG TV Network. All rights reserved.</p>

                    <div className="flex items-center space-x-6">
                        <a href="#privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
                        <a href="#terms" className="hover:text-gray-300 transition">Terms of Service</a>
                        <a href="#disclaimer" className="hover:text-gray-300 transition">Broadcasting Disclaimer</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}