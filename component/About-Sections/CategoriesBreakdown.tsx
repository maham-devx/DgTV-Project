'use client';

import Link from 'next/link';

export default function CategoriesBreakdown() {
    const coverageAreas = [
        {
            title: 'Paranormal Investigations',
            category: 'Unexplained Mysteries',
            description: 'On-field investigations uncovering haunted locations, eerie phenomena, and documented entity encounters.',
            image: 'https://barkeaterchocolates.com/wp-content/uploads/2024/04/2024-Haunted-Equipment-on-table-3-scaled.jpg',
            icon: '🔦',
            link: '/ghost-hunting',
        },
        {
            title: 'Rohani Ilm & Wisdom',
            category: 'Spiritual Guidance',
            description: 'Authentic Islamic wazaif, spiritual healing, and deep counseling rooted in traditional faith and wisdom.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80',
            icon: '✨',
            link: '/rohani-ilm',
        },
        {
            title: 'Astrology & Horoscope',
            category: 'Cosmic Predictions',
            description: 'Zodiac insights, planetary alignment impacts, and personalized daily horoscope forecasts by expert astrologers.',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80',
            icon: '🔮',
            link: '/astrology',
        },
        {
            title: 'Exclusive Podcasts',
            category: 'In-Depth Discussions',
            description: 'Unfiltered studio interviews with researchers, scholars, and personalities sharing untold stories and insights.',
            image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
            icon: '🎙️',
            link: '/podcasts',
        },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase border border-amber-200">
                        Core Coverage Areas
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
                        What We Broadcast
                    </h2>
                    <p className="text-gray-600 mt-3 text-base">
                        Exploring the boundaries of spiritual wisdom, cosmic alignments, and real-world mysteries.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coverageAreas.map((area, index) => (
                        <Link
                            key={index}
                            href={area.link}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                        >
                            {/* Image Container with Top Icon Overlay */}
                            <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Floating Icon Badge */}
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm border border-white/50">
                                    {area.icon}
                                </div>

                                <span className="absolute bottom-3 left-4 text-amber-300 text-xs font-bold tracking-wider uppercase">
                                    {area.category}
                                </span>
                            </div>

                            {/* Text Body */}
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>

                                {/* Link Action Indicator */}
                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-gray-900 group-hover:text-amber-600 uppercase tracking-wider transition-colors">
                                    View Shows <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}