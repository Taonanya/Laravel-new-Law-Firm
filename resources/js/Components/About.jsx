const firmHighlights = [
    {
        number: '37+',
        label: 'Years of Practice',
        description: 'Established in 1987, serving clients across generations',
    },
    {
        number: '45',
        label: 'Attorneys',
        description: 'Diverse team with specialized expertise across practice areas',
    },
    {
        number: '2,800+',
        label: 'Matters Resolved',
        description: 'Track record of successful outcomes for our clients',
    },
    {
        number: '94%',
        label: 'Client Retention',
        description: 'Long-term relationships built on trust and results',
    },
];

const values = [
    {
        title: 'Integrity First',
        description: 'We uphold the highest ethical standards in every matter, ensuring transparency and trust in all client relationships.',
    },
    {
        title: 'Client-Centered',
        description: 'Your goals drive our strategy. We listen deeply, communicate clearly, and tailor our approach to your unique needs.',
    },
    {
        title: 'Excellence in Execution',
        description: 'Meticulous preparation, innovative thinking, and relentless advocacy define our approach to every legal challenge.',
    },
    {
        title: 'Collaborative Spirit',
        description: 'We leverage the collective wisdom of our entire firm, bringing multidisciplinary perspectives to complex matters.',
    },
];

export default function About() {
    return (
        <section id="about" data-reveal="up" className="py-20 lg:py-32 bg-white" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                            About the Firm
                        </span>
                        <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
                            Three Decades of Trusted Counsel
                        </h2>
                        <div className="prose prose-navy max-w-none mb-8">
                            <p className="text-lg text-warm-600 leading-relaxed mb-4">
                                Founded in 1987 by Robert Sterling, our firm began with a simple mission:
                                provide sophisticated legal representation with the personal attention every client deserves.
                            </p>
                            <p className="text-lg text-warm-600 leading-relaxed mb-4">
                                Today, Magweta neVamwe stands as a premier full-service law firm with
                                offices in New York, Washington D.C., and Chicago. Our 45 attorneys bring 
                                diverse backgrounds—from federal clerkships to in-house counsel roles at 
                                Fortune 500 companies—united by a shared commitment to excellence.
                            </p>
                            <p className="text-lg text-warm-600 leading-relaxed">
                                We serve a broad spectrum of clients, from emerging startups to established 
                                enterprises, high-net-worth individuals to multinational corporations. 
                                Regardless of the matter's size or complexity, we apply the same rigorous 
                                standards and strategic thinking that have defined our practice for over 
                                three decades.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 bg-warm-50 rounded-xl">
                                    <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy-900 mb-1">{value.title}</h3>
                                        <p className="text-warm-600 text-sm">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlights & Image Placeholder */}
                    <div className="relative">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {firmHighlights.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-navy-900 rounded-2xl text-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
                                    <div className="relative z-10">
                                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-white font-medium mb-1">{stat.label}</div>
                                        <div className="text-warm-300 text-sm">{stat.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                <svg className="w-24 h-24 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
                                <p className="text-warm-200 text-sm text-center">
                                    Magweta neVamwe — New York Headquarters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
