'use client';

import { useState } from 'react';
import { FaBookmark, FaRegBookmark, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

interface WazaifCard {
    id: number;
    title: string;
    category: string;
    purpose: string;
    repetition: string;
    description: string;
    arabicText: string;
    thumbnail: string;
}

export default function RohaniWazaifSection() {
    const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

    const wazaifList: WazaifCard[] = [
        {
            id: 1,
            title: 'Ayet-ul-Kursi for Daily Protection',
            category: 'Protection against Jinnat & Magic',
            purpose: 'Complete house and personal safeguard',
            repetition: '3 times after every Salah',
            description:
                'Reciting Ayet-ul-Kursi creates an impenetrable spiritual shield against negative energies, bad spirits, and evil eyes.',
            arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
            thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
        },
        {
            id: 2,
            title: 'Manzil Recitation for Kaala Jadu Shield',
            category: 'Kaala Jadu Defense',
            purpose: 'Neutralizing spiritual affliction and black magic',
            repetition: 'Once daily (Morning or Evening)',
            description:
                'A collection of specific Verses from the Quran that provide relief and long-term security from dark arts and supernatural disturbances.',
            arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
            thumbnail: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
        },
        {
            id: 3,
            title: 'Authentic Azeemat for Peace & Tranquility',
            category: 'Mental Peace & Wazaif',
            purpose: 'Relief from anxiety and negative thoughts',
            repetition: '100 times daily',
            description:
                'Focusing on authentic Quranic supplications clears mental clutter, brings inner calm, and removes spiritual heaviness.',
            arabicText: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
        },
    ];

    const toggleBookmark = (id: number) => {
        setBookmarkedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gray-100 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-800 mb-3">
                        <FaShieldAlt className="text-gray-600" />
                        <span>Spiritual Guidance</span>
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">
                        Rohani Ilm & Authentic Wazaif
                    </h2>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        Prescribed Quranic verses and authentic supplications for protection, peace, and spiritual well-being.
                    </p>
                </div>

                {/* Blog-Style Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wazaifList.map((item) => {
                        const isBookmarked = bookmarkedIds.includes(item.id);

                        return (
                            <article
                                key={item.id}
                                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                {/* Image & Category Overlay */}
                                <div className="relative h-48 bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                        {item.category}
                                    </span>

                                    {/* Bookmark Action */}
                                    <button
                                        onClick={() => toggleBookmark(item.id)}
                                        className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:text-black transition shadow-sm"
                                        aria-label="Bookmark Wazaif"
                                    >
                                        {isBookmarked ? (
                                            <FaBookmark className="text-xs text-black" />
                                        ) : (
                                            <FaRegBookmark className="text-xs" />
                                        )}
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Arabic Highlight Box */}
                                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center">
                                        <p className="text-lg font-serif text-gray-800 tracking-wide dir-rtl">
                                            {item.arabicText}
                                        </p>
                                    </div>

                                    {/* Purpose & Repetition Info */}
                                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <FaBookOpen className="text-gray-400" />
                                            <span>{item.repetition}</span>
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.purpose}</span>
                                    </div>
                                </div>

                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
