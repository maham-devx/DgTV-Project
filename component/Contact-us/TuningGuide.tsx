'use client';

import { useState } from 'react';
import { FaSatellite, FaTv, FaCopy, FaCheck } from 'react-icons/fa';

interface SatelliteSpec {
    satelliteName: string;
    orbitalPosition: string;
    frequency: string;
    polarization: string;
    symbolRate: string;
    fec: string;
}

interface CableOperator {
    name: string;
    region: string;
    channelNumber: string;
}

export default function TuningGuide() {
    const [copied, setCopied] = useState<boolean>(false);

    const satelliteSpecs: SatelliteSpec = {
        satelliteName: 'Paksat 1R',
        orbitalPosition: '38.0° East',
        frequency: '4155 MHz',
        polarization: 'Vertical (V)',
        symbolRate: '15000 Ksps',
        fec: '3/4',
    };

    const cableOperators: CableOperator[] = [
        { name: 'Nayatel Digital', region: 'Islamabad / Rawalpindi', channelNumber: 'Ch 412' },
        { name: 'StormFiber Digital', region: 'Nationwide', channelNumber: 'Ch 308' },
        { name: 'WorldCall Cable', region: 'Lahore / Karachi', channelNumber: 'Ch 85' },
        { name: 'PTCL Smart TV', region: 'Nationwide', channelNumber: 'Ch 510' },
    ];

    const handleCopyFrequency = () => {
        navigator.clipboard.writeText(satelliteSpecs.frequency);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Broadcast Technical Info
                    </span>
                    <h2 className="text-3xl font-black text-gray-900 mt-1">
                        Cable & Satellite Tuning Guide
                    </h2>
                    <p className="text-xs text-gray-500 mt-2">
                        Tune your satellite dish or find DG TV on your local digital cable provider.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Satellite Technical Specifications Table */}
                    <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl">
                        <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
                                    <FaSatellite className="text-base" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-gray-900">Satellite Tuning Specs</h3>
                                    <p className="text-xs text-gray-500">Free-To-Air (FTA) Parameters</p>
                                </div>
                            </div>

                            {/* One-Click Copy Button */}
                            <button
                                onClick={handleCopyFrequency}
                                className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-xs font-bold px-3.5 py-2 rounded-xl transition duration-200"
                            >
                                {copied ? (
                                    <>
                                        <FaCheck className="text-emerald-500" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaCopy />
                                        <span>Copy Frequency</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Technical Parameters List */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2.5 border-b border-gray-50 text-xs">
                                <span className="font-semibold text-gray-500">Satellite Name</span>
                                <span className="font-bold text-gray-900">{satelliteSpecs.satelliteName}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-gray-50 text-xs">
                                <span className="font-semibold text-gray-500">Orbital Position</span>
                                <span className="font-bold text-gray-900">{satelliteSpecs.orbitalPosition}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-gray-50 text-xs bg-gray-50 px-3 rounded-lg">
                                <span className="font-bold text-gray-700">Downlink Frequency</span>
                                <span className="font-black text-black">{satelliteSpecs.frequency}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-gray-50 text-xs">
                                <span className="font-semibold text-gray-500">Polarization</span>
                                <span className="font-bold text-gray-900">{satelliteSpecs.polarization}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-gray-50 text-xs">
                                <span className="font-semibold text-gray-500">Symbol Rate</span>
                                <span className="font-bold text-gray-900">{satelliteSpecs.symbolRate}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 text-xs">
                                <span className="font-semibold text-gray-500">FEC</span>
                                <span className="font-bold text-gray-900">{satelliteSpecs.fec}</span>
                            </div>
                        </div>
                    </div>

                    {/* Cable Operators List */}
                    <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
                            <div className="w-10 h-10 rounded-2xl bg-gray-200 text-gray-900 flex items-center justify-center">
                                <FaTv className="text-base" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-gray-900">Cable Operators</h3>
                                <p className="text-xs text-gray-500">Channel numbers by provider</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {cableOperators.map((operator, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between"
                                >
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900">{operator.name}</h4>
                                        <p className="text-[11px] text-gray-400 mt-0.5">{operator.region}</p>
                                    </div>
                                    <span className="bg-black text-white text-xs font-black px-3 py-1.5 rounded-xl">
                                        {operator.channelNumber}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}