'use client';

import { useState } from 'react';
import { FaTimes, FaHeart, FaBriefcase, FaHeartbeat, FaStar } from 'react-icons/fa';

interface HoroscopeDetail {
    love: string;
    career: string;
    health: string;
    luckyNumber: number;
    luckyColor: string;
}

interface ZodiacSign {
    id: string;
    name: string;
    dates: string;
    element: string;
    icon: string;
    dailyReading: HoroscopeDetail;
}

export default function HoroscopeHub() {
    const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

    const zodiacList: ZodiacSign[] = [
        {
            id: 'aries',
            name: 'Aries',
            dates: 'Mar 21 - Apr 19',
            element: 'Fire',
            icon: '♈',
            dailyReading: {
                love: 'Communications will be smooth today. Expressing feelings will strengthen your connection.',
                career: 'A new project opportunity might present itself. Stay proactive.',
                health: 'Energy levels are high. Great day for physical activity.',
                luckyNumber: 7,
                luckyColor: 'Red',
            },
        },
        {
            id: 'taurus',
            name: 'Taurus',
            dates: 'Apr 20 - May 20',
            element: 'Earth',
            icon: '♉',
            dailyReading: {
                love: 'Focus on patience. Small disagreements can be resolved with understanding.',
                career: 'Financial planning should be your focus today. Avoid impulse choices.',
                health: 'Ensure adequate rest and stay hydrated.',
                luckyNumber: 4,
                luckyColor: 'Green',
            },
        },
        {
            id: 'gemini',
            name: 'Gemini',
            dates: 'May 21 - Jun 20',
            element: 'Air',
            icon: '♊',
            dailyReading: {
                love: 'Social encounters bring joy. Networking could lead to meaningful connections.',
                career: 'Multitasking comes naturally today. Complete pending tasks.',
                health: 'Mindfulness and meditation will help balance mental energy.',
                luckyNumber: 3,
                luckyColor: 'Yellow',
            },
        },
        {
            id: 'cancer',
            name: 'Cancer',
            dates: 'Jun 21 - Jul 22',
            element: 'Water',
            icon: '♋',
            dailyReading: {
                love: 'Family and close bonds take priority. Plan a quiet evening.',
                career: 'Trust your intuition when solving complex work challenges.',
                health: 'Pay attention to diet and nutrition.',
                luckyNumber: 2,
                luckyColor: 'Silver',
            },
        },
        {
            id: 'leo',
            name: 'Leo',
            dates: 'Jul 23 - Aug 22',
            element: 'Fire',
            icon: '♌',
            dailyReading: {
                love: 'Your charm shines brightly. Great time for social gatherings.',
                career: 'Leadership qualities will be recognized by seniors.',
                health: 'Maintain a balanced routine to preserve stamina.',
                luckyNumber: 1,
                luckyColor: 'Gold',
            },
        },
        {
            id: 'virgo',
            name: 'Virgo',
            dates: 'Aug 23 - Sep 22',
            element: 'Earth',
            icon: '♍',
            dailyReading: {
                love: 'Meaningful conversations deepen trust in personal relationships.',
                career: 'Attention to detail brings positive feedback on current projects.',
                health: 'Incorporate light stretching or yoga into your daily schedule.',
                luckyNumber: 5,
                luckyColor: 'Navy',
            },
        },
        {
            id: 'libra',
            name: 'Libra',
            dates: 'Sep 23 - Oct 22',
            element: 'Air',
            icon: '♎',
            dailyReading: {
                love: 'Balance is key. Focus on mutual give-and-take.',
                career: 'Collaborative work will yield favorable results.',
                health: 'Focus on posture and regular breaks during work hours.',
                luckyNumber: 6,
                luckyColor: 'Pink',
            },
        },
        {
            id: 'scorpio',
            name: 'Scorpio',
            dates: 'Oct 23 - Nov 21',
            element: 'Water',
            icon: '♏',
            dailyReading: {
                love: 'Deep conversations lead to clarity in relationships.',
                career: 'Focus on strategic planning rather than immediate action.',
                health: 'Prioritize consistent sleep patterns.',
                luckyNumber: 9,
                luckyColor: 'Maroon',
            },
        },
        {
            id: 'sagittarius',
            name: 'Sagittarius',
            dates: 'Nov 22 - Dec 21',
            element: 'Fire',
            icon: '♐',
            dailyReading: {
                love: 'Spontaneity adds excitement to personal life.',
                career: 'Broaden your skill set through online learning or research.',
                health: 'Outdoor activities will boost your mood.',
                luckyNumber: 8,
                luckyColor: 'Purple',
            },
        },
        {
            id: 'capricorn',
            name: 'Capricorn',
            dates: 'Dec 22 - Jan 19',
            element: 'Earth',
            icon: '♑',
            dailyReading: {
                love: 'Reliability and loyalty strengthen your closest bonds.',
                career: 'Long-term goals receive steady progress. Stay focused.',
                health: 'Incorporate strength training or structured workouts.',
                luckyNumber: 10,
                luckyColor: 'Brown',
            },
        },
        {
            id: 'aquarius',
            name: 'Aquarius',
            dates: 'Jan 20 - Feb 18',
            element: 'Air',
            icon: '♒',
            dailyReading: {
                love: 'Open-mindedness encourages positive exchanges with others.',
                career: 'Innovative thinking helps overcome roadblocks.',
                health: 'Ensure proper hydration throughout the day.',
                luckyNumber: 11,
                luckyColor: 'Blue',
            },
        },
        {
            id: 'pisces',
            name: 'Pisces',
            dates: 'Feb 19 - Mar 20',
            element: 'Water',
            icon: '♓',
            dailyReading: {
                love: 'Empathy brings warmth to personal interactions.',
                career: 'Creative pursuits are highlighted today.',
                health: 'Rest and mental relaxation are vital.',
                luckyNumber: 12,
                luckyColor: 'Sea Green',
            },
        },
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Astrology Guidance
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Zodiac Readings & Daily Horoscope
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Select your sign to view today’s detailed breakdown for Love, Career, and Health.
                    </p>
                </div>

                {/* 12 Zodiac Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {zodiacList.map((zodiac) => (
                        <div
                            key={zodiac.id}
                            onClick={() => setSelectedSign(zodiac)}
                            className="bg-gray-50 hover:bg-black hover:text-white border border-gray-200 rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 group flex flex-col items-center justify-between shadow-sm hover:shadow-md"
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                                {zodiac.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">{zodiac.name}</h3>
                                <p className="text-[10px] text-gray-400 group-hover:text-gray-300 mt-0.5">
                                    {zodiac.dates}
                                </p>
                            </div>
                            <span className="mt-3 text-[10px] font-semibold px-2 py-0.5 bg-gray-200 text-gray-700 rounded-md group-hover:bg-gray-800 group-hover:text-gray-200">
                                {zodiac.element}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Modal Popup for Detailed Reading */}
                {selectedSign && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedSign(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-black transition text-sm"
                            >
                                <FaTimes />
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                                    {selectedSign.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900">
                                        {selectedSign.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {selectedSign.dates} • Element: {selectedSign.element}
                                    </p>
                                </div>
                            </div>

                            {/* Love, Career, Health Readings */}
                            <div className="space-y-4">

                                {/* Love */}
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <div className="flex items-center space-x-2 text-xs font-bold text-gray-900 mb-1">
                                        <FaHeart className="text-red-500" />
                                        <span>Love & Relationships</span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {selectedSign.dailyReading.love}
                                    </p>
                                </div>

                                {/* Career */}
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <div className="flex items-center space-x-2 text-xs font-bold text-gray-900 mb-1">
                                        <FaBriefcase className="text-blue-500" />
                                        <span>Career & Finances</span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {selectedSign.dailyReading.career}
                                    </p>
                                </div>

                                {/* Health */}
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <div className="flex items-center space-x-2 text-xs font-bold text-gray-900 mb-1">
                                        <FaHeartbeat className="text-emerald-500" />
                                        <span>Health & Vitality</span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {selectedSign.dailyReading.health}
                                    </p>
                                </div>

                                {/* Lucky Indicators */}
                                <div className="flex items-center justify-between pt-2 text-xs font-bold text-gray-700">
                                    <div className="flex items-center space-x-1">
                                        <FaStar className="text-amber-400" />
                                        <span>Lucky Number: {selectedSign.dailyReading.luckyNumber}</span>
                                    </div>
                                    <div>
                                        <span>Lucky Color: {selectedSign.dailyReading.luckyColor}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}