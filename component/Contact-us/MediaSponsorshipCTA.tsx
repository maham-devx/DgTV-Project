'use client';

import { FaHandshake, FaEnvelope, FaPhoneAlt, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function MediaSponsorshipCTA() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Full-Width Banner Container */}
                <div className="relative overflow-hidden bg-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-2xl">

                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gray-800/40 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6">

                            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-300">
                                <FaHandshake className="text-amber-400 text-sm" />
                                <span>Partner With DG TV</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                                Advertise Your Brand On Satellite TV
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                                Reach millions of engaged viewers across satellite and digital networks. Explore TV commercial slots, show sponsorships, and branded segment integrations with our dedicated marketing team.
                            </p>

                            {/* Marketing Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 flex items-center space-x-3">
                                    <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-xs" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-500 block">Marketing Desk</span>
                                        <a href="mailto:ads@dgtv.com" className="text-xs font-bold text-white hover:underline">
                                            ads@dgtv.com
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 flex items-center space-x-3">
                                    <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center flex-shrink-0">
                                        <FaPhoneAlt className="text-xs" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-500 block">Direct Sales Line</span>
                                        <a href="tel:+924235710002" className="text-xs font-bold text-white hover:underline">
                                            +92 (42) 3571-0002
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right CTAs */}
                        <div className="lg:col-span-5 flex flex-col space-y-4 lg:items-end justify-center">

                            <a
                                href="#contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-black font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl hover:bg-gray-200 transition shadow-lg"
                            >
                                <span>Request Media Kit</span>
                                <FaArrowRight className="text-xs" />
                            </a>

                            <a
                                href="/rate-card.pdf"
                                target="_blank"
                                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 font-bold text-xs py-3.5 px-6 rounded-2xl transition"
                            >
                                <FaDownload className="text-xs" />
                                <span>Download Broadcast Rate Card</span>
                            </a>

                            <p className="text-[10px] text-gray-500 text-center lg:text-right">
                                Custom sponsorship packages available for prime-time shows.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}