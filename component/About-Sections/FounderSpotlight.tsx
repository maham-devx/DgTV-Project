export default function FounderSpotlight() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Split-Screen Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side: High-Quality Image Card */}
                    <div className="relative">
                        <div className="relative h-[480px] sm:h-[560px] w-full rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
                            <img
                                src="87.png"
                                alt="Dawood Gee - Founder & Owner"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Image Badge/Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="text-2xl font-black tracking-tight">Dawood Gee</p>
                                <p className="text-sm text-gray-300 font-medium">Founder & CEO, DG TV Network</p>
                            </div>
                        </div>

                        {/* Subtle Decorative Backdrop Card */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-900 rounded-3xl -z-10 hidden sm:block" />
                    </div>

                    {/* Right Side: Detailed Profile & Vision Content */}
                    <div className="space-y-6">

                        {/* Header Badge */}
                        <span className="inline-block bg-gray-100 text-gray-900 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                            Leadership Spotlight
                        </span>

                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Pioneering Media, <br />
                            <span className="text-gray-500">Unveiling Mysteries.</span>
                        </h2>

                        {/* Detailed Bio */}
                        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                            <p>
                                <strong className="text-gray-900 font-bold">Dawood Gee</strong> is the visionary mind behind DG TV Network. Driven by a deep commitment to authentic storytelling, he transitioned DG TV from a digital YouTube channel into a premier satellite television network.
                            </p>
                            <p>
                                With years of dedicated research in <strong className="text-gray-900 font-semibold">Rohaniat (Spirituality)</strong> and <strong className="text-gray-900 font-semibold">Paranormal Investigations</strong>, Dawood Gee has brought ancient wisdom and real-world mysteries to mainstream audiences, bridging the gap between faith, exploration, and modern broadcasting.
                            </p>
                        </div>

                        {/* Key Expertise / Role Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Focus Area</p>
                                <p className="text-sm font-bold text-gray-900 mt-1">Spiritual Research & Wazaif</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Field Work</p>
                                <p className="text-sm font-bold text-gray-900 mt-1">Paranormal Investigations</p>
                            </div>
                        </div>

                        {/* Signature Quote Card */}
                        <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-md border border-gray-800 space-y-2 mt-6">
                            <p className="text-sm italic font-light text-gray-200">
                                "Our mission is not just to entertain, but to enlighten mindsets through spiritual clarity and unvarnished truth."
                            </p>
                            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest text-right">
                                — Dawood Gee
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}