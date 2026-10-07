import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden" aria-labelledby="hero-heading">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" aria-hidden="true" />
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
            
            {/* Decorative gold accent lines */}
            <div className="absolute top-20 left-10 w-1 h-32 bg-gold-500/50 hidden lg:block" aria-hidden="true" />
            <div className="absolute bottom-20 right-10 w-1 h-32 bg-gold-500/50 hidden lg:block" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium mb-8" role="status">
                        <span className="mr-2" aria-hidden="true">⚖</span>
                        Trusted Legal Counsel Since 1987
                    </div>

                    {/* Main Headline */}
                    <h1
                        id="hero-heading"
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
                    >
                        Resolute Advocacy.
                        <br />
                        <span className="text-gold-400">Unwavering Results.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-warm-200 leading-relaxed mb-10 max-w-3xl mx-auto">
                        For over three decades, Magweta neVamwe has guided clients through
                        their most complex legal challenges with precision, integrity, and an 
                        unwavering commitment to excellence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href={route('contact')}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white text-base font-semibold rounded-lg hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                        >
                            Schedule a Consultation
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href={route('practice-areas')}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-base font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                        >
                            Explore Practice Areas
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div className="border-l border-gold-500/30 pl-6 md:pl-8">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 mb-1">37+</div>
                            <div className="text-warm-300 text-sm sm:text-base">Years Experience</div>
                        </div>
                        <div className="border-l border-gold-500/30 pl-6 md:pl-8">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 mb-1">2,800+</div>
                            <div className="text-warm-300 text-sm sm:text-base">Cases Resolved</div>
                        </div>
                        <div className="border-l border-gold-500/30 pl-6 md:pl-8">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 mb-1">94%</div>
                            <div className="text-warm-300 text-sm sm:text-base">Client Satisfaction</div>
                        </div>
                        <div className="border-l border-gold-500/30 pl-6 md:pl-8">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 mb-1">45</div>
                            <div className="text-warm-300 text-sm sm:text-base">Attorneys</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
                <svg className="w-6 h-6 text-warm-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}