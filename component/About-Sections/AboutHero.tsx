'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

// Animated Counter Sub-Component
function AnimatedCounter({ value }: { value: string }) {
    const [displayValue, setDisplayValue] = useState(0);
    const [isVisible, setIsValueVisible] = useState(false);
    const countRef = useRef<HTMLParagraphElement>(null);

    // Extract number and suffix (e.g., '2.5M+' -> number: 2.5, suffix: 'M+')
    const numericMatch = value.match(/[\d.]+/);
    const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
    const suffix = value.replace(/[\d.]+/, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsValueVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds animation duration
        const steps = 60;
        const stepTime = duration / steps;
        const increment = targetNumber / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
                setDisplayValue(targetNumber);
                clearInterval(timer);
            } else {
                setDisplayValue(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    // Format decimal if number has fraction
    const formattedNumber = Number.isInteger(targetNumber)
        ? Math.floor(displayValue).toString()
        : displayValue.toFixed(1);

    return (
        <p ref={countRef} className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {formattedNumber}{suffix}
        </p>
    );
}

export default function AboutHero() {
    const stats = [
        { label: 'YouTube Subscribers', value: '2.5M+' },
        { label: 'Monthly Reach', value: '15M+' },
        { label: 'Satellite TV Viewers', value: '5M+' },
        { label: 'Original Shows', value: '120+' },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Top Header Badge & Main Title */}
                <div className="text-center max-w-4xl mx-auto space-y-4">
                    <span className="inline-block bg-gray-100 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                        Our Journey & Vision
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none">
                        From YouTube Pioneer <br className="hidden sm:inline" />
                        <span className="text-gray-500">To Satellite News Giant</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal pt-2">
                        DG TV started with a vision to revolutionize independent media. Today, we bridge digital broadcasting with satellite reach to bring authentic shows, spiritual wisdom, and news straight to your screens.
                    </p>
                </div>

                {/* Visual Showcase (Images Section) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">

                    {/* Main Hero Image */}
                    <div className="md:col-span-2 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1000&q=80"
                            alt="DG TV Studio Setup"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                            <span className="text-white font-semibold text-sm sm:text-base">
                                State-of-the-Art Broadcasting Studio
                            </span>
                        </div>
                    </div>

                    {/* Secondary Satellite Image */}
                    <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80"
                            alt="Satellite Transmission"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                            <span className="text-white font-semibold text-sm sm:text-base">
                                Global Satellite Connectivity
                            </span>
                        </div>
                    </div>

                </div>

                {/* Sleek High-Contrast Stats Bar */}
                <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
                        {stats.map((stat, index) => (
                            <div key={index} className={index !== 0 ? 'pt-6 md:pt-0' : ''}>
                                <AnimatedCounter value={stat.value} />
                                <p className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}