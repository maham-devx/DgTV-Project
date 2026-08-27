'use client';

import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaTv,
    FaExternalLinkAlt
} from 'react-icons/fa';

interface SocialPlatform {
    name: string;
    category: string;
    followers: string;
    icon: any;
    colorClass: string;
    glowClass: string;
    link: string;
}

export default function SocialHandles() {
    const platforms: SocialPlatform[] = [
        {
            name: 'YouTube',
            category: 'Official Channel & Live Streams',
            followers: '1.2M+ Subscribers',
            icon: FaYoutube,
            colorClass: 'text-red-600 bg-red-50 border-red-100',
            glowClass: 'hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:border-red-500',
            link: 'https://youtube.com',
        },
        {
            name: 'Facebook',
            category: 'Community & Show Updates',
            followers: '850K+ Followers',
            icon: FaFacebookF,
            colorClass: 'text-blue-600 bg-blue-50 border-blue-100',
            glowClass: 'hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:border-blue-500',
            link: 'https://facebook.com',
        },
        {
            name: 'Instagram',
            category: 'BTS & Exclusive Clips',
            followers: '420K+ Followers',
            icon: FaInstagram,
            colorClass: 'text-pink-600 bg-pink-50 border-pink-100',
            glowClass: 'hover:shadow-[0_0_25px_rgba(219,39,119,0.35)] hover:border-pink-500',
            link: 'https://instagram.com',
        },
        {
            name: 'TikTok',
            category: 'Short Clips & Highlights',
            followers: '600K+ Followers',
            icon: FaTiktok,
            colorClass: 'text-black bg-gray-100 border-gray-200',
            glowClass: 'hover:shadow-[0_0_25px_rgba(0,0,0,0.35)] hover:border-black',
            link: 'https://tiktok.com',
        },
        {
            name: 'DG TV Web Portal',
            category: '24/7 Web Live Broadcast',
            followers: 'Live Streaming',
            icon: FaTv,
            colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
            glowClass: 'hover:shadow-[0_0_25px_rgba(5,150,105,0.35)] hover:border-emerald-500',
            link: '#',
        },
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Connect Everywhere
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Social Media & Official Streaming
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Stay updated with live broadcasts, exclusive clips, and paranormal investigation stories across all platforms.
                    </p>
                </div>

                {/* Large Buttons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platforms.map((platform) => {
                        const Icon = platform.icon;

                        return (
                            <a
                                key={platform.name}
                                href={platform.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`group bg-white border border-gray-200 rounded-3xl p-6 transition-all duration-300 flex items-center justify-between shadow-sm ${platform.glowClass}`}
                            >
                                <div className="flex items-center space-x-4">

                                    {/* Large Icon Box */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border text-2xl transition-transform group-hover:scale-110 ${platform.colorClass}`}>
                                        <Icon />
                                    </div>

                                    {/* Text Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 flex items-center space-x-1.5">
                                            <span>{platform.name}</span>
                                            <FaExternalLinkAlt className="text-[10px] text-gray-400 group-hover:text-black transition" />
                                        </h3>
                                        <p className="text-[11px] text-gray-500 mt-0.5">
                                            {platform.category}
                                        </p>
                                        <span className="inline-block text-[10px] font-extrabold text-black bg-gray-100 px-2.5 py-0.5 rounded-md mt-2">
                                            {platform.followers}
                                        </span>
                                    </div>

                                </div>
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}