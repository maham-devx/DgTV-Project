'use client';

import { useState } from 'react';
import { FaPlay, FaEye, FaCalendarAlt } from 'react-icons/fa';

interface Episode {
    id: number;
    title: string;
    category: string;
    views: string;
    date: string;
    thumbnail: string;
    tags: string[];
    videoUrl: string; // Dynamic link property
}

interface EpisodesGridProps {
    selectedCategory?: string;
    searchQuery?: string;
}

export default function EpisodesGrid({
    selectedCategory = 'All Shows',
    searchQuery = '',
}: EpisodesGridProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const episodesPerPage = 6;

    const allEpisodes: Episode[] = [
        {
            id: 1,
            title: 'Haunted Mansion Investigation - Part 1',
            category: 'Ghost Hunts',
            views: '124K',
            date: 'Aug 15, 2026',
            thumbnail: 'https://barkeaterchocolates.com/wp-content/uploads/2024/04/2024-Haunted-Equipment-on-table-3-scaled.jpg',
            tags: ['Paranormal', 'Investigation', 'Horror'],
            videoUrl: 'https://www.youtube.com/@astropalmist727 ', // Aap yahan apna link add kar sakte hain
        },
        {
            id: 2,
            title: 'Daily Rohani Wazaif & Mental Peace',
            category: 'Rohaniat',
            views: '89K',
            date: 'Aug 14, 2026',
            thumbnail: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTeLeHZTTC_K3NIIMRR4EmgtWsi7Eg0_FlYMxVO8AT7brXNCx8QkMukTkXziyiAoqfIIkz1buEyk5PG4iA',
            tags: ['Wazaif', 'Spiritual', 'Peace'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 3,
            title: 'Full Moon Planetary Shift & Predictions',
            category: 'Astrology',
            views: '210K',
            date: 'Aug 12, 2026',
            thumbnail: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRShe0nQ3Hk_NZ2uLZBc09sLoivHKD9J7tGI4I7LhAJjTgbnrwG2XkUwSLKOF1HkFtpaG7T9mKTnknPOlI',
            tags: ['Astrology', 'Zodiac', 'Horoscope'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 4,
            title: 'Unheard Paranormal Stories with Guest Experts',
            category: 'Podcasts',
            views: '150K',
            date: 'Aug 10, 2026',
            thumbnail: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT0TAWD-EddIsVwtx4Y8-__oe7KQi-kRLtUNMgp9YJEtKsODuB19bSun9zil9jhK-QG-Xd4C3UxWg9oO7I',
            tags: ['Podcast', 'TalkShow', 'Mysteries'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 5,
            title: 'Dark Forest Entity Encounters',
            category: 'Ghost Hunts',
            views: '95K',
            date: 'Aug 08, 2026',
            thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
            tags: ['Entity', 'FieldWork', 'NightVision'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 6,
            title: 'Understanding Cosmic Energies & Mind Healing',
            category: 'Rohaniat',
            views: '78K',
            date: 'Aug 05, 2026',
            thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
            tags: ['Healing', 'Wisdom', 'Faith'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 7,
            title: 'Weekly Horoscope: What Stars Say About You',
            category: 'Astrology',
            views: '180K',
            date: 'Aug 02, 2026',
            thumbnail: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
            tags: ['WeeklyHoroscope', 'Stars', 'Signs'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 8,
            title: 'The Reality of Jinns & Unexplained Phenomena',
            category: 'Podcasts',
            views: '320K',
            date: 'Jul 28, 2026',
            thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
            tags: ['Podcast', 'Unexplained', 'Discussion'],
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
    ];

    // Filtering Logic
    const filteredEpisodes = allEpisodes.filter((episode) => {
        const matchesCategory =
            selectedCategory === 'All Shows' || episode.category === selectedCategory;
        const matchesSearch =
            episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            episode.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            );
        return matchesCategory && matchesSearch;
    });

    // Pagination Calculations
    const totalPages = Math.ceil(filteredEpisodes.length / episodesPerPage);
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = filteredEpisodes.slice(
        indexOfFirstEpisode,
        indexOfLastEpisode
    );

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Empty State */}
                {currentEpisodes.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
                        <p className="text-gray-500 font-semibold text-lg">
                            No episodes found matching your criteria.
                        </p>
                    </div>
                ) : (
                    /* 3-Column Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentEpisodes.map((ep) => (
                            <a
                                key={ep.id}
                                href={ep.videoUrl}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer block"
                            >
                                {/* Thumbnail Container */}
                                <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                                    <img
                                        src={ep.thumbnail}
                                        alt={ep.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-sm shadow-lg pl-0.5">
                                            <FaPlay />
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                        {ep.category}
                                    </span>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {ep.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                                            {ep.title}
                                        </h3>
                                    </div>

                                    {/* Meta Stats (Views & Date) */}
                                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <FaEye className="text-gray-400" />
                                            <span>{ep.views} Views</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FaCalendarAlt className="text-gray-400" />
                                            <span>{ep.date}</span>
                                        </div>
                                    </div>
                                </div>

                            </a>
                        ))}
                    </div>
                )}

                {/* Dynamic Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2 mt-12">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`w-9 h-9 rounded-xl text-xs font-bold transition ${currentPage === index + 1
                                    ? 'bg-black text-white'
                                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}