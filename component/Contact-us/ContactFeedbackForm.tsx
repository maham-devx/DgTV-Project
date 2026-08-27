'use client';

import { useState } from 'react';
import {
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
    FaTimes,
    FaBullhorn,
    FaUserTie,
    FaNewspaper,
    FaEnvelope
} from 'react-icons/fa';

interface ToastState {
    show: boolean;
    type: 'success' | 'error';
    message: string;
}

export default function ContactFeedbackForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<ToastState>({
        show: false,
        type: 'success',
        message: '',
    });

    const triggerToast = (type: 'success' | 'error', message: string) => {
        setToast({ show: true, type, message });
        setTimeout(() => {
            setToast({ show: false, type: 'success', message: '' });
        }, 4000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // API submission simulation
        setTimeout(() => {
            setIsSubmitting(false);
            triggerToast('success', 'Aap ka paigham kamyabi se bheja ja chuka hai.');
            setFormData({
                fullName: '',
                email: '',
                subject: 'General Inquiry',
                message: '',
            });
        }, 1200);
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 relative">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Contact & Feedback
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        General inquiries, advertising, guest bookings, ya news tips ke liye hum se raabta karein.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Full Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    placeholder="e.g. Sarah Ahmed"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="name@domain.com"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>

                        {/* Subject Selector */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-2">
                                Inquiry Type / Subject *
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { label: 'General Inquiry', icon: FaEnvelope },
                                    { label: 'Advertisement', icon: FaBullhorn },
                                    { label: 'Guest Booking', icon: FaUserTie },
                                    { label: 'News Tip', icon: FaNewspaper },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    const isSelected = formData.subject === item.label;

                                    return (
                                        <button
                                            key={item.label}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, subject: item.label })}
                                            className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition ${isSelected
                                                    ? 'bg-black text-white border-black shadow-md'
                                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                                }`}
                                        >
                                            <Icon className={`text-sm mb-2 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                                            <span className="text-[11px] font-bold">{item.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">
                                Your Message *
                            </label>
                            <textarea
                                rows={5}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tafseelat yahan likhein..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-gray-800 transition flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <span>Sending Message...</span>
                            ) : (
                                <>
                                    <FaPaperPlane className="text-xs" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>

                    </form>
                </div>

            </div>

            {/* Dynamic Toast Notification */}
            {toast.show && (
                <div className="fixed bottom-6 right-6 z-50 animate-bounce">
                    <div
                        className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-xs font-bold ${toast.type === 'success'
                                ? 'bg-black text-white border-gray-800'
                                : 'bg-red-600 text-white border-red-700'
                            }`}
                    >
                        {toast.type === 'success' ? (
                            <FaCheckCircle className="text-emerald-400 text-base" />
                        ) : (
                            <FaExclamationCircle className="text-white text-base" />
                        )}
                        <span>{toast.message}</span>
                        <button
                            onClick={() => setToast({ ...toast, show: false })}
                            className="text-gray-400 hover:text-white ml-2"
                        >
                            <FaTimes className="text-xs" />
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}