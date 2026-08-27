import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesGrid() {
    const categories = [
        {
            title: 'Astrology',
            description: 'Zodiac signs, planetary shifts, and cosmic predictions.',
            image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&q=80',
            tag: 'Cosmic Wisdom',
            link: 'https://www.youtube.com/@astropalmist727',
        },
        {
            title: 'Horoscope',
            description: 'Daily, weekly, and monthly personalized horoscope readings.',
            image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80',
            tag: 'Daily Forecast',
            link: 'https://www.youtube.com/@astropalmist727',
        },
        {
            title: 'Real Ghost Hunting',
            description: 'Paranormal investigations, creepy encounters, and haunted locations.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
            tag: 'Paranormal Series',
            link: 'https://www.youtube.com/@astropalmist727',
        },
        {
            title: 'DGtv Podcast',
            description: 'In-depth discussions, guest interviews, and spiritual talks.',
            image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
            tag: 'Exclusive Audio/Video',
            link: 'https://www.youtube.com/@astropalmist727',
        },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Explore Channels
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                        Browse By Category
                    </h2>
                    <p className="text-gray-600 mt-2 text-base">
                        Discover our curated shows ranging from spiritual guidance to paranormal investigations.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((item, index) => (
                        <Link key={index} href={item.link} className="group block">
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

                                {/* Image Container */}
                                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-xs font-bold text-black group-hover:translate-x-1 transition-transform">
                                        Explore Channel <span className="ml-1">→</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}