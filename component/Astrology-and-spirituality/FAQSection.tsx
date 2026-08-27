'use client';

import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaStar, FaShieldAlt, FaTv } from 'react-icons/fa';

interface FAQItem {
    id: number;
    category: 'Astrology' | 'Rohani Masail' | 'Show Participation';
    question: string;
    answer: string;
}

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [openId, setOpenId] = useState<number | null>(1);

    const faqData: FAQItem[] = [
        {
            id: 1,
            category: 'Astrology',
            question: 'How are daily horoscopes and zodiac readings calculated?',
            answer:
                'Our daily horoscopes are calculated using planetary transits, lunar positions, and authentic Vedic astrological charts. They provide general trends regarding love, career, and personal energy.',
        },
        {
            id: 2,
            category: 'Astrology',
            question: 'What information do I need to provide for an accurate horoscope chart?',
            answer:
                'To calculate an accurate personal birth chart (Kundli/Horoscope), you need your exact date of birth, time of birth, and city/location of birth.',
        },
        {
            id: 3,
            category: 'Rohani Masail',
            question: 'Are the recommended wazaif and spiritual remedies safe to perform at home?',
            answer:
                'Yes, all wazaif provided on DG TV are derived from authentic Quranic verses and established Islamic supplications. They are safe for anyone seeking spiritual protection and peace.',
        },
        {
            id: 4,
            category: 'Rohani Masail',
            question: 'How can I get direct guidance for kaala jadu or jinnat protection?',
            answer:
                'You can book a private consultation through our Booking Section or submit your case details via the Viewer Submission form for review by our expert team.',
        },
        {
            id: 5,
            category: 'Show Participation',
            question: 'How can I feature in live TV segments with Dawood Gee?',
            answer:
                'Fill out the Consultation Booking or Submission form and check the "Feature on Upcoming TV Broadcast" box. Our production team will contact shortlisted participants.',
        },
        {
            id: 6,
            category: 'Show Participation',
            question: 'Is there any fee to submit paranormal evidence or story clips?',
            answer:
                'No, submitting video evidence or personal encounters for episode review and television broadcast is completely free of charge.',
        },
    ];

    const categories = ['All', 'Astrology', 'Rohani Masail', 'Show Participation'];

    const filteredFAQs =
        activeCategory === 'All'
            ? faqData
            : faqData.filter((item) => item.category === activeCategory);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Astrology':
                return <FaStar className="text-amber-500 text-xs" />;
            case 'Rohani Masail':
                return <FaShieldAlt className="text-emerald-500 text-xs" />;
            case 'Show Participation':
                return <FaTv className="text-blue-500 text-xs" />;
            default:
                return <FaQuestionCircle className="text-gray-400 text-xs" />;
        }
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Help & Information
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Find quick answers regarding zodiac readings, rohani guidance, and broadcast participation.
                    </p>
                </div>

                {/* Category Pills */}
                <div className="flex items-center justify-center space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-black text-white shadow-sm'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Expandable Accordion List */}
                <div className="space-y-3">
                    {filteredFAQs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/80 transition"
                                >
                                    <div className="flex items-center space-x-3">
                                        {getCategoryIcon(faq.category)}
                                        <span className="text-sm font-bold text-gray-900">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div
                                        className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180 bg-gray-200 text-black' : ''
                                            }`}
                                    >
                                        <FaChevronDown className="text-[10px]" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}