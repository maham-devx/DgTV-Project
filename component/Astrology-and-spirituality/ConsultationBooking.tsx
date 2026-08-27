'use client';

import { useState } from 'react';
import {
    FaUser,
    FaCalendarAlt,
    FaVideo,
    FaCheckCircle,
    FaArrowRight,
    FaArrowLeft,
    FaUserAstronaut,
    FaQuestionCircle
} from 'react-icons/fa';

interface BookingFormData {
    fullName: string;
    email: string;
    phone: string;
    serviceType: string;
    consultant: string;
    date: string;
    timeSlot: string;
    featureOnTv: boolean;
    topicDetails: string;
}

export default function ConsultationBooking() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<BookingFormData>({
        fullName: '',
        email: '',
        phone: '',
        serviceType: 'Rohani Guidance & Wazaif',
        consultant: 'Dawood Gee (Host & Expert)',
        date: '',
        timeSlot: 'Morning (10:00 AM - 01:00 PM)',
        featureOnTv: false,
        topicDetails: '',
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const updateFields = (fields: Partial<BookingFormData>) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep((prev) => prev + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Direct Expert Guidance
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Book Rohani & Astrology Consultation
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Schedule a private session or request to be featured on live TV segments with Dawood Gee & team.
                    </p>
                </div>

                {/* Outer Card with Side Visual Image */}
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">

                    {/* Side Info Panel / Visual Overlay */}
                    <div className="lg:col-span-4 relative bg-black text-white p-8 flex flex-col justify-between overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&q=80"
                            alt="Rohani Consultation Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="relative z-10 space-y-4">
                            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase">
                                DG TV Live Session
                            </span>
                            <h3 className="text-2xl font-black leading-tight">
                                Get Personal Answers & Protection Guidance
                            </h3>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Connect directly for authentic spiritual wazaif, horoscope analysis, or live broadcast participation.
                            </p>
                        </div>

                        {/* Stepper Indicator */}
                        <div className="relative z-10 mt-8 pt-6 border-t border-white/20 space-y-3">
                            <div className="flex items-center space-x-3 text-xs">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${currentStep >= 1 ? 'bg-white text-black' : 'bg-white/20 text-white'}`}>1</span>
                                <span className={currentStep === 1 ? 'font-bold text-white' : 'text-gray-400'}>Personal Info</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xs">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${currentStep >= 2 ? 'bg-white text-black' : 'bg-white/20 text-white'}`}>2</span>
                                <span className={currentStep === 2 ? 'font-bold text-white' : 'text-gray-400'}>Service & Slot</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xs">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${currentStep >= 3 ? 'bg-white text-black' : 'bg-white/20 text-white'}`}>3</span>
                                <span className={currentStep === 3 ? 'font-bold text-white' : 'text-gray-400'}>Details & TV Request</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Content Panel */}
                    <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                        {isSubmitted ? (
                            /* Success State */
                            <div className="text-center py-12 space-y-4 my-auto">
                                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl">
                                    <FaCheckCircle />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900">Booking Request Sent!</h3>
                                <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                                    Thank you, <strong className="text-gray-800">{formData.fullName}</strong>. Our team will review your request for <strong className="text-gray-800">{formData.serviceType}</strong> and confirm your appointment via phone/email shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setCurrentStep(1);
                                    }}
                                    className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition"
                                >
                                    Book Another Session
                                </button>
                            </div>
                        ) : (
                            /* Multi-step Form Wizard */
                            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6 flex-grow flex flex-col justify-between">

                                {/* STEP 1: Personal Details */}
                                {currentStep === 1 && (
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-100 pb-3">
                                            <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                                                <FaUser className="text-xs text-gray-500" />
                                                <span>Step 1: Your Personal Information</span>
                                            </h4>
                                            <p className="text-xs text-gray-400">Provide contact details so our coordinator can get in touch.</p>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={(e) => updateFields({ fullName: e.target.value })}
                                                placeholder="e.g. Muhammad Ali"
                                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => updateFields({ email: e.target.value })}
                                                    placeholder="name@example.com"
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => updateFields({ phone: e.target.value })}
                                                    placeholder="+92 300 1234567"
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: Service & Schedule Selection */}
                                {currentStep === 2 && (
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-100 pb-3">
                                            <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                                                <FaCalendarAlt className="text-xs text-gray-500" />
                                                <span>Step 2: Service & Appointment Time</span>
                                            </h4>
                                            <p className="text-xs text-gray-400">Choose your required consultation type and preferred time.</p>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Select Guidance Category</label>
                                            <select
                                                value={formData.serviceType}
                                                onChange={(e) => updateFields({ serviceType: e.target.value })}
                                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                            >
                                                <option>Rohani Guidance & Wazaif</option>
                                                <option>Horoscope & Zodiac Analysis</option>
                                                <option>Protection Against Jinnat / Kaala Jadu</option>
                                                <option>General Spiritual Consultation</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Expert</label>
                                            <select
                                                value={formData.consultant}
                                                onChange={(e) => updateFields({ consultant: e.target.value })}
                                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                            >
                                                <option>Dawood Gee (Host & Lead Investigator)</option>
                                                <option>Astrologer Pandit Sharma</option>
                                                <option>Allama Syed Zameer (Islamic Scholar)</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Date *</label>
                                                <input
                                                    type="date"
                                                    required
                                                    value={formData.date}
                                                    onChange={(e) => updateFields({ date: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-bold text-gray-700 mb-1">Time Slot</label>
                                                <select
                                                    value={formData.timeSlot}
                                                    onChange={(e) => updateFields({ timeSlot: e.target.value })}
                                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                                >
                                                    <option>Morning (10:00 AM - 01:00 PM)</option>
                                                    <option>Afternoon (02:00 PM - 05:00 PM)</option>
                                                    <option>Evening (06:00 PM - 09:00 PM)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: Topic & TV Feature Request */}
                                {currentStep === 3 && (
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-100 pb-3">
                                            <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                                                <FaQuestionCircle className="text-xs text-gray-500" />
                                                <span>Step 3: Query Details & Broadcast Preference</span>
                                            </h4>
                                            <p className="text-xs text-gray-400">Briefly explain your concern and choose if you want to feature on TV.</p>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Describe Your Issue or Question *</label>
                                            <textarea
                                                rows={3}
                                                required
                                                value={formData.topicDetails}
                                                onChange={(e) => updateFields({ topicDetails: e.target.value })}
                                                placeholder="State your problem, symptoms, or birth details for astrology..."
                                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                                            />
                                        </div>

                                        {/* TV Feature Toggle Box */}
                                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="tvFeature"
                                                checked={formData.featureOnTv}
                                                onChange={(e) => updateFields({ featureOnTv: e.target.checked })}
                                                className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                                            />
                                            <label htmlFor="tvFeature" className="text-xs cursor-pointer">
                                                <span className="font-bold text-gray-900 block flex items-center space-x-1">
                                                    <FaVideo className="text-gray-600 text-[10px]" />
                                                    <span>Feature My Case on Upcoming DG TV Broadcast</span>
                                                </span>
                                                <span className="text-gray-500 block text-[11px] mt-0.5">
                                                    Check this if you are willing to join a live call or have your query discussed on air.
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* Bottom Navigation Buttons */}
                                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-bold rounded-xl transition"
                                        >
                                            <FaArrowLeft className="text-[10px]" />
                                            <span>Back</span>
                                        </button>
                                    ) : <div />}

                                    <button
                                        type="submit"
                                        className="inline-flex items-center space-x-2 px-6 py-2.5 bg-black text-white hover:bg-gray-800 text-xs font-bold rounded-xl transition shadow-sm ml-auto"
                                    >
                                        <span>{currentStep === 3 ? 'Confirm & Book Session' : 'Continue'}</span>
                                        <FaArrowRight className="text-[10px]" />
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
}