export default function LaunchAnnouncement() {
    const launchDetails = [
        { title: 'Satellite Name', value: 'AsiaSat 7' },
        { title: 'Frequency', value: '3880 MHz' },
        { title: 'Symbol Rate', value: '27500 Ksps' },
        { title: 'Polarization', value: 'Horizontal (H)' },
    ];

    const cableOperators = [
        { operator: 'WorldCall Cable', channel: 'Ch 45' },
        { operator: 'PTCL Smart TV', channel: 'Ch 108' },
        { operator: 'NayaTel Digital', channel: 'Ch 32' },
        { operator: 'Local Cable Networks', channel: 'Ch 12' },
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">

                {/* VIP Launch Container */}
                <div className="relative rounded-3xl bg-gradient-to-b from-amber-50/50 via-white to-white border border-amber-200/60 p-8 sm:p-12 shadow-xl shadow-amber-500/5 overflow-hidden">

                    {/* Subtle Decorative Metallic Glows */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl pointer-events-none" />

                    {/* Header */}
                    <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                        <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                            Official Announcement
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
                            DG TV is Now On <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">Satellite & Cable</span>
                        </h2>
                        <p className="text-gray-600 mt-3 text-sm sm:text-base">
                            Tune your setup box or cable network today to watch all our shows in Crystal Clear HD quality.
                        </p>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Satellite Frequency Card */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                                    📡
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Satellite Tuning Parameters</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {launchDetails.map((item, index) => (
                                    <div key={index} className="bg-amber-50/30 rounded-xl p-4 border border-amber-100/50">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{item.title}</p>
                                        <p className="text-base font-extrabold text-gray-900 mt-1">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cable Operators Card */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                                    📺
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Cable Network Channels</h3>
                            </div>

                            <div className="space-y-3">
                                {cableOperators.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3.5 bg-gray-50/80 rounded-xl border border-gray-100">
                                        <span className="text-sm font-semibold text-gray-800">{item.operator}</span>
                                        <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-md border border-amber-200">
                                            {item.channel}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Callout */}
                    <div className="relative z-10 text-center mt-10 pt-6 border-t border-amber-100">
                        <p className="text-xs text-gray-500">
                            Facing issues tuning in? Contact your local cable provider or reach out to our support team.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}