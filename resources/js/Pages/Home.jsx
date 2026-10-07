import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Footer from '@/Components/Footer';

const quickLinks = [
    {
        name: 'Practice Areas',
        description: 'Explore our comprehensive legal expertise across six practice areas.',
        route: 'practice-areas',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        name: 'About Us',
        description: 'Learn about our firm\'s history, values, and three decades of trusted counsel.',
        route: 'about',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        name: 'Our Attorneys',
        description: 'Meet our accomplished team of 45 attorneys with diverse specialized expertise.',
        route: 'attorneys',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        name: 'Our Process',
        description: 'Discover our structured, transparent approach that puts you in control.',
        route: 'process',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        name: 'Testimonials',
        description: 'Read what our clients have to say about their experience with our firm.',
        route: 'testimonials',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        name: 'Contact Us',
        description: 'Get in touch to schedule a confidential consultation with our team.',
        route: 'contact',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V6.75m0 0L12 12m0 0l-3.75-3.75M12 12V2.25" />
            </svg>
        ),
    },
];

export default function Home() {
    return (
        <>
            <Head title="Magweta neVamwe - Trusted Legal Counsel" />
            <Header />
            <main>
                <Hero />
                
                {/* Quick Navigation Section */}
                <section className="py-20 lg:py-32 bg-warm-50" aria-labelledby="quick-nav-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                                Explore Our Firm
                            </span>
                            <h2 id="quick-nav-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
                                Navigate Our Services
                            </h2>
                            <p className="text-lg text-warm-600 leading-relaxed">
                                Click on any section below to learn more about our firm, our team, and how we can help you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={route(link.route)}
                                    className="group relative bg-white rounded-2xl p-8 border border-warm-200 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-100 group-hover:text-gold-700 transition-colors duration-300">
                                        {link.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                                        {link.name}
                                    </h3>
                                    <p className="text-warm-600 leading-relaxed mb-6">
                                        {link.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="inline-flex items-center text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors">
                                        Explore
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
