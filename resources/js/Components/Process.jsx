import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const steps = [
    {
        number: '01',
        title: 'Initial Consultation',
        description: 'We begin with a confidential, no-obligation consultation to understand your situation, objectives, and concerns. This meeting allows us to assess your legal needs and outline potential strategies.',
        details: [
            'Complimentary 60-minute session',
            'Case assessment and preliminary advice',
            'Fee structure transparency',
            'Attorney-client privilege applies',
        ],
    },
    {
        number: '02',
        title: 'Strategic Planning',
        description: 'Our team conducts thorough research and analysis to develop a customized legal strategy. We identify risks, opportunities, and the most efficient path to your desired outcome.',
        details: [
            'Comprehensive legal research',
            'Risk assessment and mitigation',
            'Multi-attorney strategy sessions',
            'Clear timeline and milestones',
        ],
    },
    {
        number: '03',
        title: 'Execution & Advocacy',
        description: 'We execute your strategy with precision—whether negotiating settlements, drafting agreements, or litigating in court. You receive regular updates and direct access to your legal team.',
        details: [
            'Proactive case management',
            'Regular progress reports',
            'Direct attorney communication',
            'Aggressive advocacy when needed',
        ],
    },
    {
        number: '04',
        title: 'Resolution & Beyond',
        description: 'We pursue the best possible resolution and ensure proper implementation. Our relationship continues with ongoing counsel to protect your interests long-term.',
        details: [
            'Favorable resolution focus',
            'Implementation oversight',
            'Ongoing advisory relationship',
            'Proactive risk prevention',
        ],
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 lg:py-32 bg-white" aria-labelledby="process-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                        How We Help
                    </span>
                    <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
                        Our Proven Process
                    </h2>
                    <p className="text-lg text-warm-600 leading-relaxed">
                        A structured, transparent approach that puts you in control every step of the way.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-200 via-gold-400 to-gold-200 -translate-x-1/2" aria-hidden="true" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Step Number */}
                                <div className="relative z-10 flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center text-2xl lg:text-3xl font-bold text-gold-400 shadow-lg shadow-navy-900/20">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 px-4 lg:px-8">
                                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                                    <p className="text-warm-600 leading-relaxed mb-6">{step.description}</p>
                                    
                                    <ul className="space-y-2" role="list" aria-label={`${step.title} details`}>
                                        {step.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start text-sm text-warm-700">
                                                <svg className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Mobile connector */}
                                <div className="lg:hidden w-0.5 h-16 bg-gradient-to-b from-gold-200 via-gold-400 to-gold-200 mx-auto" aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link
                        href={route('contact')}
                        className="inline-flex items-center px-8 py-4 bg-gold-500 text-white text-base font-semibold rounded-lg hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                    >
                        Start Your Consultation
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}