import { FaBroadcastTower, FaVideo, FaSatellite, FaMicrophoneAlt } from 'react-icons/fa';

export default function InfrastructureTech() {
    const techHighlights = [
        {
            title: 'Satellite Transmission',
            category: 'Broadcasting',
            description: 'C-Band satellite uplink setup with redundant transponder channels for uninterrupted global broadcasting.',
            image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&q=80',
            icon: <FaSatellite className="text-gray-900" />,
            specs: ['AsiaSat 7 Satellite', 'Full HD Broadcast', 'Low-Latency Feed'],
        },
        {
            title: 'State-of-the-Art Studio',
            category: 'Production',
            description: 'Multi-cam 4K studio setup with dynamic LED backgrounds, sound isolation, and automated lighting control.',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80',
            icon: <FaVideo className="text-gray-900" />,
            specs: ['4K Cinema Cameras', 'Acoustic Treatment', 'Live Switcher Systems'],
        },
        {
            title: 'Paranormal Field Gear',
            category: 'Field Equipment',
            description: 'Specialized field gear including full-spectrum thermal cameras, EMF meters, and long-range audio receivers.',
            image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
            icon: <FaBroadcastTower className="text-gray-900" />,
            specs: ['Thermal Imaging', 'EMF Spectrum Sensors', 'Night Vision Kits'],
        },
        {
            title: 'Post-Production Suite',
            category: 'Audio & Editing',
            description: 'Professional color grading, audio master mixing, and digital archiving for high-fidelity content delivery.',
            image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80',
            icon: <FaMicrophoneAlt className="text-gray-900" />,
            specs: ['Dolby Audio Mastering', 'Dedicated Fiber Uplink', 'Cloud Storage Systems'],
        },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-gray-100 text-gray-900 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                        Broadcast Infrastructure
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
                        High-Tech Production Standards
                    </h2>
                    <p className="text-gray-600 mt-3 text-base">
                        Equipped with modern broadcast equipment and field investigation tools to deliver crystal-clear quality.
                    </p>
                </div>

                {/* Feature Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techHighlights.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"
                        >
                            {/* Image Column */}
                            <div className="relative sm:w-2/5 h-48 sm:h-auto bg-gray-100">
                                <img
                                    src={tech.image}
                                    alt={tech.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    {tech.category}
                                </span>
                            </div>

                            {/* Details Column */}
                            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-sm">
                                            {tech.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {tech.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                                        {tech.description}
                                    </p>
                                </div>

                                {/* Tech Checklist */}
                                <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                                    {tech.specs.map((spec, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-700 font-medium">
                                            <span className="text-emerald-600 font-bold mr-2">✓</span>
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}