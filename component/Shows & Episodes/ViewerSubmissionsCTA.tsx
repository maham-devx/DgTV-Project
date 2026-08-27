'use client';

import { useState } from 'react';
import { FaGhost, FaPaperPlane, FaTimes, FaCloudUploadAlt } from 'react-icons/fa';

export default function ViewerSubmissionsCTA() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsModalOpen(false);
        }, 2500);
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Callout Card Container */}
                <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">

                    {/* Subtle Background Accent */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl space-y-6">

                        {/* Tag Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-200">
                            <FaGhost className="text-gray-300 text-xs" />
                            <span>Get Featured On TV</span>
                        </div>

                        {/* Title & Description */}
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                            Have You Experienced the Unexplained? Share Your Story.
                        </h2>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Have a paranormal video, footage, or a personal spiritual query? Submit your evidence or questions to our investigation team for a chance to be featured in upcoming DG TV episodes.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center space-x-2.5 bg-white text-black hover:bg-gray-200 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition duration-300 shadow-md cursor-pointer"
                            >
                                <FaPaperPlane className="text-xs" />
                                <span>Submit Your Evidence</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Modal Popup Form */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-200">

                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-black transition text-sm"
                            >
                                <FaTimes />
                            </button>

                            {submitted ? (
                                <div className="text-center py-12 space-y-3">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl">
                                        ✓
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Submission Received!</h3>
                                    <p className="text-xs text-gray-500">
                                        Our team will review your footage and queries shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900">Viewer Submission Form</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Fill out the details below to submit your evidence to DG TV.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">
                                            Submission Category
                                        </label>
                                        <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black">
                                            <option>Ghost Hunt / Footage</option>
                                            <option>Rohani / Spiritual Query</option>
                                            <option>Astrology / Zodiac Question</option>
                                            <option>Podcast Guest Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">
                                            Story / Encounter Details
                                        </label>
                                        <textarea
                                            rows={3}
                                            required
                                            placeholder="Describe what happened or state your query..."
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">
                                            Attachment Link (Drive / Video Link)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="url"
                                                placeholder="https://drive.google.com/..."
                                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                            <FaCloudUploadAlt className="absolute left-3 top-3 text-gray-400 text-xs" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-gray-800 transition mt-2"
                                    >
                                        Send Submission
                                    </button>
                                </form>
                            )}

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}