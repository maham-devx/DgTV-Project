'use client';

import { useState } from 'react';
import { FaPlay, FaChevronDown, FaLightbulb, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface InsightItem {
    id: number;
    title: string;
    category: string;
    myth: string;
    reality: string;
    explanation: string;
    videoUrl: string;
    thumbnail: string;
}

export default function ParanormalInsights() {
    const [openId, setOpenId] = useState<number | null>(1);

    const insights: InsightItem[] = [
        {
            id: 1,
            title: 'Unexplained Cold Spots in Haunted Houses',
            category: 'Paranormal Science',
            myth: 'Cold spots are always caused by ghosts drawing thermal energy from the environment.',
            reality: 'Most sudden temperature drops are caused by natural drafts, air leaks, or HVAC system fluctuations.',
            explanation:
                'While thermal anomalies are tracked during investigations, scientific measurements show that 90% of localized cold drafts stem from poor insulation or pressure imbalances in older buildings. True paranormal thermal shifts remain consistent even when airflow is blocked.',
            videoUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
        },
        {
            id: 2,
            title: 'Sleep Paralysis vs. Spiritual Affliction',
            category: 'Rohaniat & Mind Science',
            myth: 'Waking up unable to move always means a supernatural entity is pressing on your chest.',
            reality: 'Sleep paralysis is a natural neurological phenomenon occurring during the REM sleep cycle transition.',
            explanation:
                'During REM sleep, your body enters a state of muscle atonia (paralysis) to prevent you from acting out dreams. If you wake up before the cycle finishes, your mind becomes conscious while your body remains locked. Spiritual guidance emphasizes calmness and reciting protection wazaif to ease anxiety.',
            videoUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
        },
        {
            id: 3,
            title: 'Electronic Voice Phenomena (EVP) & Audio Artifacts',
            category: 'Investigation Tech',
            myth: 'Every unexpected whisper caught on recording devices is a voice from the unseen world.',
            reality: 'Radio frequency interference, white noise distortion, and stray background sounds cause most EVPs.',
            explanation:
                'Audio recorders often pick up distant stray signals or ambient frequencies that human ears miss. The human brain naturally tries to find recognizable speech patterns in random sound (pareidolia). Genuine EVPs require controlled environments with isolated audio frequencies.',
            videoUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
        },
        {
            id: 4,
            title: 'Horoscope Predictions & Free Will',
            category: 'Astrology Demystified',
            myth: 'Zodiac signs completely control your destiny and eliminate personal choice.',
            reality: 'Astrology reflects environmental and cosmic timing tendencies, not unchangeable fate.',
            explanation:
                'Vedic and Western astrology provide insight into personal traits, behavioral patterns, and cosmic cycles. Authentic scholars emphasize that personal choices, actions, and spiritual discipline play the dominant role in shaping individual outcomes.',
            videoUrl: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
        },
    ];

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gray-100 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-800 mb-3">
                        <FaLightbulb className="text-gray-600" />
                        <span>Demystifying the Unseen</span>
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">
                        Myth vs. Reality & Paranormal Insights
                    </h2>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        Separating superstition from genuine spiritual guidance and scientific investigation principles.
                    </p>
                </div>

                {/* Interactive Accordion Listing */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {insights.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div
                                key={item.id}
                                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
                            >
                                {/* Accordion Header Bar */}
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/80 transition"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-[10px] font-bold px-2.5 py-1 bg-black text-white rounded-md uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <h3 className="text-base font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div
                                        className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gray-200 text-black' : ''
                                            }`}
                                    >
                                        <FaChevronDown className="text-xs" />
                                    </div>
                                </button>

                                {/* Accordion Body Content */}
                                {isOpen && (
                                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                                        {/* Text Section (Myth, Reality, Explanation) */}
                                        <div className="md:col-span-7 space-y-4">

                                            {/* Myth Box */}
                                            <div className="bg-red-50 border border-red-100 p-3.5 rounded-2xl flex items-start space-x-3">
                                                <FaTimesCircle className="text-red-500 text-sm mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <span className="text-[11px] font-bold text-red-900 uppercase block">
                                                        Common Myth
                                                    </span>
                                                    <p className="text-xs text-red-800 mt-0.5 leading-snug">
                                                        {item.myth}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Reality Box */}
                                            <div className="bg-emerald-50 border border-emerald-100 p-3.5 rounded-2xl flex items-start space-x-3">
                                                <FaCheckCircle className="text-emerald-600 text-sm mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <span className="text-[11px] font-bold text-emerald-900 uppercase block">
                                                        Scientific / Spiritual Reality
                                                    </span>
                                                    <p className="text-xs text-emerald-800 mt-0.5 leading-snug">
                                                        {item.reality}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Deep Dive Explanation */}
                                            <p className="text-xs text-gray-600 leading-relaxed pt-1">
                                                {item.explanation}
                                            </p>
                                        </div>

                                        {/* Side Video Snippet Card */}
                                        <div className="md:col-span-5">
                                            <div className="relative rounded-2xl overflow-hidden group border border-gray-200 bg-gray-900 h-48">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                                />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center p-4 text-center">
                                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform pl-0.5 mb-2">
                                                        <FaPlay className="text-xs" />
                                                    </div>
                                                    <span className="text-white text-xs font-bold">
                                                        Watch Video Explainer
                                                    </span>
                                                    <span className="text-[10px] text-gray-300 mt-0.5">
                                                        2 min breakdown
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}