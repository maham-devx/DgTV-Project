'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // 3 VIP Images Slider Data
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
            tag: 'Featured Show',
            title: 'Secrets of the Stars',
            subtitle: 'Episode 12 • Celestial Alignments',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1200&q=80',
            tag: 'New Release',
            title: 'Rohani Safar & Peace',
            subtitle: 'Episode 08 • Spiritual Healing',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&q=80',
            tag: 'Weekly Special',
            title: 'Cosmic Horoscope 2026',
            subtitle: 'Episode 15 • Predictions Revealed',
        },
    ];

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="bg-white text-gray-900 min-h-[90vh] flex items-center py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Main Text Content */}
                    <div className="space-y-6 text-left">
                        <span className="inline-block bg-amber-100 text-amber-900 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide uppercase border border-amber-200">
                            ✨ Explore Astrology & Spirituality
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            Discover Your <span className="text-amber-600">Cosmic Journey</span> & Inner Peace
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl">
                            Watch our latest shows and episodes exploring horoscope insights, spiritual guidance, and ancient wisdom tailored for modern life.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="/shows-and-episodes"
                                className="bg-black text-white text-center px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
                            >
                                Watch Latest Episodes
                            </Link>
                            <Link
                                href="/astrology-and-spirituality"
                                className="bg-gray-100 text-gray-800 text-center px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300 border border-gray-200"
                            >
                                Explore Astrology
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">50+</p>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Episodes Released</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">100k+</p>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Active Viewers</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">24/7</p>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Spiritual Insights</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: VIP 3-Image Slider */}
                    <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                                    } transition-transform duration-1000`}
                            >
                                {/* Background Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay for VIP Look */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Overlay Card Details */}
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg">
                                    <span className="bg-amber-500 text-black text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                                        {slide.tag}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold">{slide.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-200 mt-1">{slide.subtitle}</p>

                                    <div className="mt-4 flex items-center justify-between">
                                        <button className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition">
                                            <span>▶</span> Play Episode
                                        </button>

                                        {/* Manual Indicators */}
                                        <div className="flex gap-1.5">
                                            {slides.map((_, dotIndex) => (
                                                <button
                                                    key={dotIndex}
                                                    onClick={() => setCurrentSlide(dotIndex)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${dotIndex === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}