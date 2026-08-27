import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function TeamShowcase() {
    const teamMembers = [
        {
            name: 'Dawood Gee',
            role: 'Founder & Lead Investigator',
            show: 'Real Ghost Hunting',
            image: '38.png',
            bio: 'Pioneering paranormal investigations and spiritual research across Pakistan.',
        },
        {
            name: 'Maaz Hashmi ',
            role: 'Senior Astrologer',
            show: 'Ilm-e-Jafar & Horoscope',
            image: 'maaz hashmi.png',
            bio: 'Expert in cosmic predictions, planetary shifts, and ancient astrological charts.',
        },
        {
            name: ' Ghulam Ayesha ',
            role: 'Podcast Host & Anchor',
            show: 'DGtv Podcast',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
            bio: 'Hosting engaging discussions with spiritual scholars and paranormal experts.',
        },
        {
            name: 'Ereej Hammad ',
            role: 'Rohani Advisor',
            show: 'Rohani Mashware',
            image: 'ereej hammad.png',
            bio: 'Providing daily wazaif, spiritual solutions, and faith-based counseling.',
        },
        {
            name: 'Hadya Fatima',
            role: 'Investigative Journalist',
            show: 'Mysteries Unveiled',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80',
            bio: 'Uncovering historical myths, local legends, and unexplained events.',
        },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-gray-100 text-gray-900 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                        Meet The Experts
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
                        Our Core Team Members
                    </h2>
                    <p className="text-gray-600 mt-3 text-base">
                        The passionate hosts, researchers, and advisors driving DG TV's most popular shows.
                    </p>https://images.unsplash.com/photo-1472099645785-5658ab
                </div>

                {/* Responsive Grid for 5 Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Image Container with Hover Reveal Animation */}
                            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                                    <p className="text-xs font-light leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Social Icons inside Hover Overlay */}
                                    <div className="flex space-x-3 mt-3">
                                        <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-xs text-white transition">
                                            <FaYoutube />
                                        </a>
                                        <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-xs text-white transition">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-xs text-white transition">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>

                                {/* Show Badge */}
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
                                    {member.show}
                                </span>
                            </div>

                            {/* Card Bottom Details */}
                            <div className="p-5 text-center flex-grow flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-semibold text-gray-500 mt-1">
                                    {member.role}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}