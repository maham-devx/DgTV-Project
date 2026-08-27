'use client';

import { useState } from 'react';

export default function HoroscopeWidget() {
    const [selectedSign, setSelectedSign] = useState(null);

    const zodiacSigns = [
        { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈', image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&q=80', prediction: 'Today is a great day for new beginnings. Focus your energy on your primary goals.', wazifa: 'Surah Al-Inshirah (3 Times after Fajr)' },
        { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&q=80', prediction: 'Financial stability is highlighted today. Patience will bring positive outcomes.', wazifa: 'Ya Razzaqu (100 Times daily)' },
        { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', prediction: 'Communication brings clarity today. Express your thoughts openly.', wazifa: 'Ya Alimu (11 Times before studying/work)' },
        { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80', prediction: 'Focus on family and inner peace. Trust your intuition in key decisions.', wazifa: 'Ayat-ul-Kursi (Once before sleeping)' },
        { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌', image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&q=80', prediction: 'Your leadership qualities shine. Positive opportunities lie ahead.', wazifa: 'Ya Aziz (100 Times after Isha)' },
        { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&q=80', prediction: 'Organization and attention to detail bring success in personal matters.', wazifa: 'Darood Shareef (11 Times before starting any task)' },
        { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', prediction: 'Balance and harmony will define your day. Clear out misunderstandings.', wazifa: 'Ya Salamu (111 Times daily)' },
        { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80', prediction: 'Deep reflection brings clarity. Focus on spiritual growth today.', wazifa: 'Astaghfar (100 Times daily)' },
        { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐', image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&q=80', prediction: 'A great day for learning and exploring new perspectives.', wazifa: 'Ya Hadi (21 Times daily)' },
        { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&q=80', prediction: 'Hard work will pay off soon. Stay persistent with your long-term goals.', wazifa: 'Ya Qadiyal Hajat (100 Times daily)' },
        { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', prediction: 'Innovative ideas will flow smoothly. Share your visions with others.', wazifa: 'Ya Latifu (129 Times after Maghrib)' },
        { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80', prediction: 'Spiritual connection is strong today. Protect your calm energy.', wazifa: 'Surah Al-Fatiha (3 Times with Bismillah)' },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Daily Guidance
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
                        Daily Horoscope & Rohani Mashware
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Select your Zodiac sign below to read today’s cosmic prediction and spiritual advice.
                    </p>
                </div>

                {/* Zodiac Icon Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {zodiacSigns.map((sign, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSign(sign)}
                            className="group bg-gray-50 hover:bg-amber-50/50 border border-gray-200 hover:border-amber-300 rounded-2xl p-5 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer"
                        >
                            <div className="text-4xl mb-2 text-amber-700 group-hover:scale-110 transition-transform">
                                {sign.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 text-base group-hover:text-amber-900">
                                {sign.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{sign.date}</p>
                        </button>
                    ))}
                </div>

                {/* Modal Popup for Details */}
                {selectedSign && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                        <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 relative">

                            {/* Image Banner */}
                            <div className="relative h-48 w-full">
                                <img
                                    src={selectedSign.image}
                                    alt={selectedSign.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedSign(null)}
                                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-sm"
                                >
                                    ✕
                                </button>
                                <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-900">
                                    {selectedSign.icon} {selectedSign.name} ({selectedSign.date})
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-6 space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                                        Daily Horoscope
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {selectedSign.prediction}
                                    </p>
                                </div>

                                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/60">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1">
                                        ✨ Rohani Mashwara & Wazifa
                                    </h4>
                                    <p className="text-amber-950 font-medium text-sm">
                                        {selectedSign.wazifa}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedSign(null)}
                                    className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}