'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Shows & Episodes', href: '/shows-and-episodes' },
        { name: 'Astrology & Spirituality', href: '/astrology-and-spirituality' },
        { name: 'Contact Us', href: '/contact-us' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo with Image */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/download.png"
                                alt="DG TV Logo"
                                width={120}
                                height={40}
                                priority
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-black font-medium transition-colors duration-200 text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact-us"
                            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}