'use client';

import { useState, ChangeEvent } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface ShowFiltersProps {
    onFilterChange?: (category: string) => void;
    onSearchChange?: (query: string) => void;
}

export default function ShowFilters({
    onFilterChange,
    onSearchChange,
}: ShowFiltersProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All Shows');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories: string[] = [
        'All Shows',
        'Ghost Hunts',
        'Rohaniat',
        'Astrology',
        'Podcasts',
    ];

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        if (onFilterChange) onFilterChange(category);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (onSearchChange) onSearchChange(value);
    };

    const clearSearch = () => {
        setSearchQuery('');
        if (onSearchChange) onSearchChange('');
    };

    return (
        <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 transition-all">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Category Pills */}
                <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive
                                        ? 'bg-black text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Search Input Bar */}
                <div className="relative w-full md:w-80">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                        <FaSearch />
                    </div>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search episodes, shows, or topics..."
                        className="w-full pl-9 pr-9 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                    />

                    {searchQuery && (
                        <button
                            onClick={clearSearch}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-700 text-xs"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}