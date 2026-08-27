'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

export default function StudioLocationInfo() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Reach Out To Us
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Studio & Office Location
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Visit our production studios, submit physical press inquiries, or reach our broadcast management team.
                    </p>
                </div>

                {/* Split Layout: Details (Left) | Google Map (Right) */}
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">

                    {/* Left Column: Contact Details */}
                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-gray-50/50">
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-6">
                                DG TV Head Office
                            </h3>

                            <div className="space-y-6">

                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaMapMarkerAlt className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900 uppercase">Main Studio Address</h4>
                                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                            DG TV Media Complex, Main Boulevard, Gulberg III, Lahore, Pakistan
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaPhoneAlt className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900 uppercase">Contact Numbers</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Landline: +92 (42) 3571-0000<br />
                                            Broadcast Desk: +92 (42) 3571-0001
                                        </p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaWhatsapp className="text-base" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900 uppercase">WhatsApp Inquiry Line</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            +92 300 0000000 <span className="text-[10px] text-gray-400">(Query & Evidence Submission)</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaEnvelope className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900 uppercase">Official Press & Support Email</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Press: press@dgtv.com<br />
                                            Support: info@dgtv.com
                                        </p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-200 text-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaClock className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900 uppercase">Office Working Hours</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Monday - Saturday: 09:00 AM - 06:00 PM<br />
                                            Sunday: Closed (Broadcast Ops Active)
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Quick Action Button */}
                        <div className="pt-4 border-t border-gray-200">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center w-full bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-gray-800 transition"
                            >
                                Get Directions on Map
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Google Map */}
                    <div className="lg:col-span-7 h-80 lg:h-auto min-h-[400px] relative bg-gray-200">
                        <iframe
                            title="DG TV Office Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.342938887642!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2000!2sGulberg%20III%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                            className="w-full h-full border-0 absolute inset-0"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}