import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const practiceAreas = [
    {
        id: 'corporate',
        name: 'Corporate Law',
        description: 'Comprehensive counsel for businesses at every stage, from formation and governance to mergers, acquisitions, and complex commercial transactions.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        highlights: ['M&A Advisory', 'Corporate Governance', 'Securities Compliance', 'Joint Ventures'],
    },
    {
        id: 'family',
        name: 'Family Law',
        description: 'Compassionate yet strategic representation in divorce, child custody, support matters, and high-net-worth marital dissolutions.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        highlights: ['Divorce & Separation', 'Child Custody', 'Spousal Support', 'Prenuptial Agreements'],
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        description: 'Expert guidance on commercial and residential transactions, land use, zoning, development, and property disputes.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10" />
            </svg>
        ),
        highlights: ['Commercial Transactions', 'Land Use & Zoning', 'Development', 'Property Disputes'],
    },
    {
        id: 'litigation',
        name: 'Litigation',
        description: 'Aggressive advocacy in federal and state courts, arbitration, and mediation across commercial, employment, and intellectual property disputes.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        highlights: ['Commercial Disputes', 'Employment Litigation', 'IP Enforcement', 'Appellate Practice'],
    },
    {
        id: 'estate',
        name: 'Estate Planning',
        description: 'Thoughtful wealth preservation strategies including wills, trusts, tax planning, and probate administration for individuals and families.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        highlights: ['Wills & Trusts', 'Tax Planning', 'Probate Administration', 'Asset Protection'],
    },
    {
        id: 'employment',
        name: 'Employment Law',
        description: 'Counseling employers and executives on workplace policies, discrimination claims, wage compliance, and executive compensation.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        highlights: ['Workplace Policies', 'Discrimination Claims', 'Wage & Hour Compliance', 'Executive Compensation'],
    },
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-20 lg:py-32 bg-warm-50" aria-labelledby="practice-areas-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                        Our Expertise
                    </span>
                    <h2 id="practice-areas-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
                        Practice Areas
                    </h2>
                    <p className="text-lg text-warm-600 leading-relaxed">
                        Deep expertise across the legal spectrum. Our attorneys combine decades of 
                        experience with innovative thinking to deliver optimal outcomes.
                    </p>
                </div>

                {/* Practice Area Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {practiceAreas.map((area) => (
                        <article
                            key={area.id}
                            className="group relative bg-white rounded-2xl p-8 border border-warm-200 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-100 group-hover:text-gold-700 transition-colors duration-300">
                                {area.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                                {area.name}
                            </h3>
                            <p className="text-warm-600 leading-relaxed mb-6">
                                {area.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2 mb-6" role="list" aria-label={`${area.name} highlights`}>
                                {area.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-center text-sm text-warm-700">
                                        <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Link */}
                            <Link
                                href={route('contact')}
                                className="inline-flex items-center text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors group-focus-within:outline-none group-focus-within:ring-2 group-focus-within:ring-gold-500 group-focus-within:ring-offset-2 rounded"
                            >
                                Learn more
                                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <Link
                        href={route('contact')}
                        className="inline-flex items-center px-6 py-3 border-2 border-gold-500 text-base font-semibold text-gold-500 rounded-lg hover:bg-gold-500 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                    >
                        Discuss Your Legal Needs
                    </Link>
                </div>
            </div>
        </section>
    );
}