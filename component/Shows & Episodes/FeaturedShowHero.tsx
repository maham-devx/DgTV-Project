'use client';

import { useState } from 'react';
import { FaPlay, FaShareAlt, FaHeart, FaRegHeart, FaCheck } from 'react-icons/fa';

export default function FeaturedShowHero() {
    const [liked, setLiked] = useState(false);
    const [copied, setCopied] = useState(false);

    const showDetails = {
        title: 'Real Ghost Hunting: Haunted Haveli Investigation',
        seasonEpisode: 'Season 3 • Episode 12 (Finale)',
        duration: '48 Mins',
        airDate: 'August 18, 2026',
        description:
            'In this gripping season finale, Dawood Gee and the investigation team venture into a 150-year-old abandoned estate following reports of unexplainable nocturnal activities and thermal anomalies.',
        cast: [
            { name: 'Dawood Gee', role: 'Lead Investigator' },
            { name: 'Zainab Fatima', role: 'Field Researcher' },
            { name: 'Syed Ali Raza', role: 'Technical Specialist' },
        ],
        videoEmbedUrl: 'https://www.youtube.com/embed/-yrKnlpEXwc', // Replace with your actual video/embed link
    };

    const handleShare = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header Badge */}
                <div className="flex items-center justify-between mb-6">
                    <span className="bg-black text-white text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                        🔥 Featured Show • Season Finale
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                        Aired: {showDetails.airDate}
                    </span>
                </div>

                {/* Main Grid: Video Player + Episode Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Side: Large Video Embed Container (2 Columns on Large Screens) */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="relative w-full h-[320px] sm:h-[450px] bg-black rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                            <iframe
                                src={showDetails.videoEmbedUrl}
                                title={showDetails.title}
                                className="w-full h-full rounded-3xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Quick Interactive Controls */}
                        <div className="flex items-center justify-between bg-gray-50 px-6 py-3.5 rounded-2xl border border-gray-200">
                            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-600">
                                <span>⏱️ {showDetails.duration}</span>
                                <span>•</span>
                                <span className="text-emerald-600 font-bold">Ultra HD 4K</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                {/* Like Button */}
                                <button
                                    onClick={() => setLiked(!liked)}
                                    className={`flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition ${liked
                                        ? 'bg-red-50 text-red-600 border border-red-200'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                                    <span>{liked ? 'Liked' : 'Like'}</span>
                                </button>

                                {/* Share Button */}
                                <button
                                    onClick={handleShare}
                                    className="flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition"
                                >
                                    {copied ? <FaCheck className="text-emerald-600" /> : <FaShareAlt />}
                                    <span>{copied ? 'Link Copied!' : 'Share'}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Episode Details & Cast Panel */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">

                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                {showDetails.seasonEpisode}
                            </p>
                            <h1 className="text-2xl font-black text-gray-900 mt-1 leading-snug">
                                {showDetails.title}
                            </h1>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            {showDetails.description}
                        </p>

                        {/* Featured Cast Info */}
                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">
                                Featured Team & Cast
                            </h3>
                            <div className="space-y-2.5">
                                {showDetails.cast.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-xs"
                                    >
                                        <span className="font-bold text-gray-900">{member.name}</span>
                                        <span className="text-gray-500">{member.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subscribe Action */}
                        <div className="pt-2">
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition"
                            >
                                <FaPlay className="text-xs" />
                                <span>Watch On YouTube</span>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}