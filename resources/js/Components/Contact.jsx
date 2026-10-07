import { useState } from 'react';
import { useForm } from '@inertiajs/react';

const practiceAreaOptions = [
    'Corporate Law',
    'Family Law',
    'Real Estate',
    'Litigation',
    'Estate Planning',
    'Employment Law',
    'Securities',
    'Other',
];

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        practice_area: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: () => {
                setIsSubmitted(true);
                reset();
            },
        });
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-navy-900 text-warm-100" aria-labelledby="contact-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium mb-4">
                        Get in Touch
                    </span>
                    <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                        Ready to Discuss Your Legal Needs?
                    </h2>
                    <p className="text-lg text-warm-300 leading-relaxed">
                        Contact us today to schedule a confidential consultation. We're here to help you navigate
                        your legal challenges with confidence and clarity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.982 18.725A7.485 7.485 0 0112 20.25a7.485 7.485 0 01-5.982-2.975m11.964 0A7.485 7.485 0 0012 20.25a7.485 7.485 0 00-5.982-2.975M12 17.25h.01M12 17.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Our Office</h3>
                                <p className="text-warm-300 leading-relaxed">
                                    1000 Financial Plaza, Suite 2500<br />
                                    New York, NY 10004
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 2.07.8 3.99 2.12 5.31A11.94 11.94 0 0012 15c2.83 0 5.4-.97 7.38-2.58A9.72 9.72 0 0121.75 6.75c0-.42-.07-.83-.2-1.22a.75.75 0 00-.95-.52 9.72 9.72 0 00-2.63 1.08 9.72 9.72 0 01-2.63 1.08" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                                <a href="tel:+12125550147" className="text-warm-300 hover:text-gold-400 transition-colors">
                                    +1 (212) 555-0147
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V6.75m0 0L12 12m0 0l-3.75-3.75M12 12V2.25" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:info@magwetanevamwe.com" className="text-warm-300 hover:text-gold-400 transition-colors">
                                    info@magwetanevamwe.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 13l2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Business Hours</h3>
                                <p className="text-warm-300 leading-relaxed">
                                    Monday – Friday: 8:00 AM – 6:00 PM<br />
                                    Saturday: 9:00 AM – 1:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-warm-800 rounded-2xl p-8">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                                <p className="text-warm-300 leading-relaxed">
                                    Your message has been sent successfully. One of our attorneys will contact you
                                    within 24 hours to schedule your consultation.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-warm-200 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className={`w-full px-4 py-3 bg-navy-800/50 border rounded-lg text-white placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                                                    errors.name ? 'border-red-500' : 'border-warm-700'
                                                }`}
                                                placeholder="John Smith"
                                                required
                                                aria-required="true"
                                            />
                                            {errors.name && (
                                                <p className="mt-2 text-sm text-red-400" role="alert">{errors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-warm-200 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className={`w-full px-4 py-3 bg-navy-800/50 border rounded-lg text-white placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                                                    errors.email ? 'border-red-500' : 'border-warm-700'
                                                }`}
                                                placeholder="you@example.com"
                                                required
                                                aria-required="true"
                                            />
                                            {errors.email && (
                                                <p className="mt-2 text-sm text-red-400" role="alert">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone & Practice Area */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-warm-200 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                className={`w-full px-4 py-3 bg-navy-800/50 border rounded-lg text-white placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                                                    errors.phone ? 'border-red-500' : 'border-warm-700'
                                                }`}
                                                placeholder="+1 (555) 123-4567"
                                            />
                                            {errors.phone && (
                                                <p className="mt-2 text-sm text-red-400" role="alert">{errors.phone}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="practice_area" className="block text-sm font-medium text-warm-200 mb-2">
                                                Practice Area
                                            </label>
                                            <select
                                                id="practice_area"
                                                value={data.practice_area}
                                                onChange={(e) => setData('practice_area', e.target.value)}
                                                className={`w-full px-4 py-3 bg-navy-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                                                    errors.practice_area ? 'border-red-500' : 'border-warm-700'
                                                }`}
                                                aria-label="Select a practice area"
                                            >
                                                <option value="" className="text-warm-800">Select a practice area</option>
                                                {practiceAreaOptions.map((area) => (
                                                    <option key={area} value={area} className="text-warm-800">
                                                        {area}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.practice_area && (
                                                <p className="mt-2 text-sm text-red-400" role="alert">{errors.practice_area}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-warm-200 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className={`w-full px-4 py-3 bg-navy-800/50 border rounded-lg text-white placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-y ${
                                                errors.message ? 'border-red-500' : 'border-warm-700'
                                            }`}
                                            placeholder="Please describe your legal needs..."
                                            required
                                            aria-required="true"
                                        />
                                        {errors.message && (
                                            <p className="mt-2 text-sm text-red-400" role="alert">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 text-base font-semibold rounded-lg hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {processing ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
