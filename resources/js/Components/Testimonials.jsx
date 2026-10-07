import { useState, useCallback } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Magweta neVamwe guided us through a complex cross-border acquisition with remarkable precision. Their team anticipated every challenge and negotiated terms that exceeded our expectations. True partners in every sense.",
        author: 'James Patterson',
        title: 'CEO, Meridian Technologies',
        practice: 'Corporate Law / M&A',
        rating: 5,
    },
    {
        id: 2,
        quote: "During the most difficult time of my life, Sarah Mitchell and her team provided not just exceptional legal representation, but genuine compassion. They protected my children's interests and secured a fair settlement.",
        author: 'Rebecca Chen',
        title: 'Private Client',
        practice: 'Family Law',
        rating: 5,
    },
    {
        id: 3,
        quote: "The firm's real estate practice is unmatched. Michael Thornton structured a $200M development deal that others said couldn't be done. His creativity and deep knowledge of zoning law saved us millions.",
        author: 'David Rodriguez',
        title: 'Managing Partner, Apex Development Group',
        practice: 'Real Estate',
        rating: 5,
    },
    {
        id: 4,
        quote: "Elizabeth Chen is a force in the courtroom. She took our IP infringement case to trial and won a landmark verdict that set precedent in our industry. Her preparation and advocacy are second to none.",
        author: 'Lisa Thompson',
        title: 'General Counsel, InnovatePharma',
        practice: 'Litigation / IP',
        rating: 5,
    },
    {
        id: 5,
        quote: "James O'Connor helped us navigate a sensitive executive transition with discretion and legal acumen. His understanding of both employment law and business strategy made all the difference.",
        author: 'Robert Kim',
        title: 'CHRO, Global Financial Services',
        practice: 'Employment Law',
        rating: 5,
    },
    {
        id: 6,
        quote: "Amanda Rodriguez's securities expertise was invaluable during our IPO process. She identified compliance issues early and worked seamlessly with our underwriters. A trusted advisor we rely on continuously.",
        author: 'Michael Chang',
        title: 'CFO, CloudScale Inc.',
        practice: 'Securities / Corporate',
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerView + 1));
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsPerView + 1)) % (testimonials.length - itemsPerView + 1));
    }, []);

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-warm-50" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                        Client Voices
                    </span>
                    <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-lg text-warm-600 leading-relaxed">
                        Our clients' success stories speak louder than any marketing. These are 
                        real experiences from clients we've had the privilege to serve.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Client testimonials">
                        {visibleTestimonials.map((testimonial) => (
                            <article key={testimonial.id} className="bg-white rounded-2xl p-8 border border-warm-200 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300" role="listitem">
                                {/* Rating */}
                                <div className="flex items-center mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-gold-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-warm-700 leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="border-t border-warm-200 pt-6">
                                    <div className="font-semibold text-navy-900">{testimonial.author}</div>
                                    <div className="text-warm-500 text-sm">{testimonial.title}</div>
                                    <div className="text-gold-600 text-sm font-medium mt-1">{testimonial.practice}</div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white border border-warm-300 text-navy-700 hover:bg-warm-100 hover:border-gold-400 hover:text-gold-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                            aria-label="Previous testimonials"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                            {Array.from({ length: testimonials.length - itemsPerView + 1 }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                                        i === currentIndex
                                            ? 'bg-gold-500 w-8'
                                            : 'bg-warm-300 hover:bg-gold-300'
                                    }`}
                                    role="tab"
                                    aria-selected={i === currentIndex}
                                    aria-label={`Go to testimonial group ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white border border-warm-300 text-navy-700 hover:bg-warm-100 hover:border-gold-400 hover:text-gold-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                            aria-label="Next testimonials"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-warm-400 text-sm mt-10">
                    * Testimonials are representative of client experiences. Results vary based on 
                    individual circumstances. Past results do not guarantee future outcomes.
                </p>
            </div>
        </section>
    );
}