import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { route } from 'ziggy-js';

const navigation = [
    { name: 'Home', route: 'home' },
    { name: 'Practice Areas', route: 'practice-areas' },
    { name: 'About Us', route: 'about' },
    { name: 'Attorneys', route: 'attorneys' },
    { name: 'Testimonials', route: 'testimonials' },
    { name: 'Contact', route: 'contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-warm-200'
                    : 'bg-transparent'
            }`}
        >
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href={route('home')}
                            className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                            aria-label="Magweta neVamwe - Home"
                        >
                            <svg
                                className="h-10 w-10 shrink-0 text-[#c8a951]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path d="M24 8v30M17 40h14M20 38h8M10 14h28M24 9l-14 5m14-5 14 5" />
                                <path d="m10 14-6 13h12l-6-13Zm28 0-6 13h12l-6-13Z" />
                                <path d="M4 27c.8 3.4 3 5 6 5s5.2-1.6 6-5m16 0c.8 3.4 3 5 6 5s5.2-1.6 6-5M21 8a3 3 0 1 1 6 0" />
                            </svg>
                            <span className="hidden text-lg font-bold tracking-tight text-[#14213d] sm:block lg:text-xl">
                                <span style={{ color: isScrolled ? '#14213d' : '#ffffff' }}>Magweta neVamwe</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={route(item.route)}
                                    className={`relative px-3.5 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#c8a951] after:transition-transform after:duration-200 hover:after:scale-x-100 ${isScrolled ? 'text-[#17243a] hover:text-[#9b7728]' : 'text-white hover:text-[#e6c76b]'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button & Mobile Menu Button */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <Link
                            href={route('contact')}
                            className="inline-flex items-center rounded-lg border border-[#c8a951] bg-[#c8a951] px-5 py-2.5 text-sm font-semibold text-[#17243a] shadow-sm transition-all duration-200 hover:border-[#b08a36] hover:bg-[#b08a36] hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2"
                        >
                            Book a Consultation
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-lg border border-[#e5dcc9] bg-[#f8f5ee] p-2 text-[#17243a] shadow-sm hover:bg-[#eee4cd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="lg:hidden border-t border-[#e5dcc9] bg-[#f8f5ee] py-4 shadow-lg">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={route(item.route)}
                                    className="block rounded-lg border border-[#e5dcc9] bg-white px-4 py-3 text-base font-semibold text-[#17243a] shadow-sm transition-colors duration-200 hover:border-[#c8a951] hover:bg-[#eee4cd] hover:text-[#101a2d]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href={route('contact')}
                                className="mt-4 block w-full rounded-lg border border-[#c8a951] bg-[#c8a951] px-5 py-3 text-center text-base font-semibold text-[#17243a] transition-all duration-200 hover:border-[#b08a36] hover:bg-[#b08a36] hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
