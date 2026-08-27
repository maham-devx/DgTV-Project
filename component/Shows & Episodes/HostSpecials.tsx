'use client';

import { useRef } from 'react';
import { FaPodcast, FaVideo, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

interface SpecialEpisode {
    id: number;
    title: string;
    guest: string;
    role: string;
    duration: string;
    type: 'Video Podcast' | 'Audio Only';
    thumbnail: string;
    tag: string;
    videoUrl: string; // Dynamic URL property
}

export default function HostSpecials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const specials: SpecialEpisode[] = [
        {
            id: 1,
            title: 'Secrets of the Unseen World & Parapsychology',
            guest: 'Dr. Tariq Hashmi',
            role: 'Paranormal Researcher',
            duration: '1h 15m',
            type: 'Video Podcast',
            thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
            tag: 'Special Guest',
            videoUrl: 'https://www.youtube.com/@astropalmist727', // AAP YAHAN APNA LINK ADD KAR SAKTE HAIN
        },
        {
            id: 2,
            title: 'Planetary Alignments & 2027 Global Predictions',
            guest: 'Master Pandit Sharma',
            role: 'Vedic Astrologer',
            duration: '52m',
            type: 'Video Podcast',
            thumbnail: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
            tag: 'Astrology Exclusive',
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 3,
            title: 'Spiritual Healing & Mental Fortitude in Modern Times',
            guest: 'Allama Syed Zameer',
            role: 'Islamic Scholar',
            duration: '45m',
            type: 'Audio Only',
            thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
            tag: 'Rohaniat',
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 4,
            title: 'Real Encounters: Eyewitnesses Speak Out',
            guest: 'Dawood Gee & Panel',
            role: 'Host & Experts',
            duration: '1h 30m',
            type: 'Video Podcast',
            thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
            tag: 'Season Special',
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
        {
            id: 5,
            title: 'Cosmic Frequencies & Ancient Mysticism',
            guest: 'Dr. Ayesha',
            role: 'Metaphysics Expert',
            duration: '58m',
            type: 'Audio Only',
            thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
            tag: 'Audio Special',
            videoUrl: 'https://www.youtube.com/@astropalmist727',
        },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">

                {/* Header with Navigation Controls */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Exclusive Content
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
                            Host Specials & Long-Form Podcasts
                        </h2>
                    </div>

                    <div className="hidden sm:flex items-center space-x-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-black hover:text-white transition shadow-sm"
                            aria-label="Previous Specials"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-black hover:text-white transition shadow-sm"
                            aria-label="Next Specials"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none scroll-smooth"
                >
                    {specials.map((item) => (
                        <a
                            key={item.id}
                            href={item.videoUrl}
                            className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group flex-shrink-0 cursor-pointer block"
                        >
                            {/* Media Thumbnail & Badges */}
                            <div className="relative h-48 bg-gray-900 overflow-hidden">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                />

                                {/* Top Badges */}
                                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                        {item.tag}
                                    </span>

                                    {/* Audio / Video Type Badge */}
                                    <span
                                        className={`flex items-center space-x-1 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md ${item.type === 'Video Podcast'
                                            ? 'bg-red-600/90 text-white'
                                            : 'bg-emerald-600/90 text-white'
                                            }`}
                                    >
                                        {item.type === 'Video Podcast' ? (
                                            <FaVideo className="text-[9px]" />
                                        ) : (
                                            <FaPodcast className="text-[9px]" />
                                        )}
                                        <span>{item.type}</span>
                                    </span>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform pl-0.5">
                                        <FaPlay className="text-xs" />
                                    </div>
                                </div>

                                {/* Duration Tag */}
                                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                                    {item.duration}
                                </span>
                            </div>

                            {/* Episode Metadata */}
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">{item.guest}</p>
                                        <p className="text-[11px] text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>

                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}