const attorneys = [
    {
        name: 'Robert Sterling',
        title: 'Founding Partner',
        practice: 'Corporate Law, M&A',
        bio: 'Robert founded the firm in 1987 after serving as a federal prosecutor. He has led over $50B in M&A transactions and is a recognized authority on corporate governance.',
        education: 'J.D., Harvard Law School; B.A., Yale University',
        admissions: 'NY, DC, Federal Courts',
        image: null,
    },
    {
        name: 'Elizabeth Chen',
        title: 'Managing Partner',
        practice: 'Litigation, IP',
        bio: 'Elizabeth heads our litigation department and has argued before the Supreme Court. She specializes in high-stakes commercial disputes and intellectual property enforcement.',
        education: 'J.D., Stanford Law School; B.S., MIT',
        admissions: 'NY, CA, Federal Courts, Supreme Court',
        image: null,
    },
    {
        name: 'Michael Thornton',
        title: 'Senior Partner',
        practice: 'Real Estate, Land Use',
        bio: 'Michael has structured some of the most complex commercial real estate transactions in the Northeast. He advises developers, REITs, and institutional investors.',
        education: 'J.D., Columbia Law School; B.A., University of Pennsylvania',
        admissions: 'NY, NJ, CT',
        image: null,
    },
    {
        name: 'Sarah Mitchell',
        title: 'Partner',
        practice: 'Family Law, Estate Planning',
        bio: 'Sarah combines compassionate advocacy with strategic precision in high-net-worth family matters. She is a fellow of the American Academy of Matrimonial Lawyers.',
        education: 'J.D., NYU School of Law; B.A., Brown University',
        admissions: 'NY, CT',
        image: null,
    },
    {
        name: 'James O\'Connor',
        title: 'Partner',
        practice: 'Employment Law, Executive Compensation',
        bio: 'James counsels C-suite executives and boards on compensation, governance, and workplace law. Former Deputy General Counsel at a Fortune 100 company.',
        education: 'J.D., University of Chicago Law School; B.A., Notre Dame',
        admissions: 'NY, IL, Federal Courts',
        image: null,
    },
    {
        name: 'Amanda Rodriguez',
        title: 'Of Counsel',
        practice: 'Corporate Law, Securities',
        bio: 'Amanda advises public and private companies on securities offerings, compliance, and governance. Former SEC enforcement attorney with 15+ years experience.',
        education: 'J.D., Georgetown Law; B.S., Wharton School',
        admissions: 'NY, DC, Federal Courts',
        image: null,
    },
];

export default function Attorneys() {
    return (
        <section id="attorneys" data-reveal="up" className="py-20 lg:py-32 bg-warm-50" aria-labelledby="attorneys-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                        Our Team
                    </span>
                    <h2 id="attorneys-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
                        Meet Our Attorneys
                    </h2>
                    <p className="text-lg text-warm-600 leading-relaxed">
                        Accomplished legal professionals united by a commitment to excellence 
                        and client success.
                    </p>
                </div>

                {/* Attorney Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attorneys.map((attorney, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-warm-200 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[3/4] bg-gradient-to-br from-navy-800 to-navy-700 relative">
                                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                    <svg className="w-20 h-20 text-navy-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-gold-400 bg-navy-900/50 rounded-full">
                                        {attorney.title}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-navy-900 mb-1">{attorney.name}</h3>
                                <p className="text-gold-600 text-sm font-medium mb-4">{attorney.practice}</p>
                                <p className="text-warm-600 text-sm leading-relaxed mb-4">{attorney.bio}</p>
                                
                                <div className="border-t border-warm-200 pt-4 space-y-2">
                                    <div className="flex items-center text-sm text-warm-600">
                                        <svg className="w-4 h-4 text-warm-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span>{attorney.education}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-warm-600">
                                        <svg className="w-4 h-4 text-warm-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{attorney.admissions}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 border-2 border-gold-500 text-base font-semibold text-gold-500 rounded-lg hover:bg-gold-500 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                    >
                        View All Attorneys
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
