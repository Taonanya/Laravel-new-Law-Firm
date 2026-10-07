import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const footerLinks = {
    practiceAreas: [
        { name: 'Corporate Law', href: '#' },
        { name: 'Family Law', href: '#' },
        { name: 'Real Estate', href: '#' },
        { name: 'Litigation', href: '#' },
        { name: 'Estate Planning', href: '#' },
    ],
    resources: [
        { name: 'Legal Insights', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Legal Guides', href: '#' },
    ],
    company: [
        { name: 'About Us', route: 'about' },
        { name: 'Our Attorneys', route: 'attorneys' },
        { name: 'Careers', href: '#' },
        { name: 'News & Events', href: '#' },
    ],
    contact: {
        address: '1000 Financial Plaza, Suite 2500\nNew York, NY 10004',
        phone: '+1 (212) 555-0147',
        email: 'info@magwetanevamwe.com',
    },
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-warm-100" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Firm Info */}
                    <div className="lg:col-span-1">
                        <Link href={route('home')} className="flex items-center space-x-2 mb-6" aria-label="Magweta neVamwe - Home">
                            <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                            <span className="text-xl font-semibold text-white">Magweta neVamwe</span>
                        </Link>
                        <p className="text-warm-300 text-sm leading-relaxed mb-6">
                            Trusted legal counsel since 1987. We provide sophisticated legal solutions 
                            with integrity, dedication, and a commitment to excellence.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-warm-400 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-warm-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Practice Areas</h3>
                        <ul className="space-y-3" role="list">
                            {footerLinks.practiceAreas.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-warm-300 hover:text-gold-400 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="space-y-3" role="list">
                            {footerLinks.resources.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-warm-300 hover:text-gold-400 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-3" role="list">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    {item.route ? (
                                        <Link
                                            href={route(item.route)}
                                            className="text-warm-300 hover:text-gold-400 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="text-warm-300 hover:text-gold-400 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
                        <address className="not-italic text-warm-300 text-sm leading-relaxed space-y-3">
                            <p>{footerLinks.contact.address}</p>
                            <p>
                                <a href={`tel:${footerLinks.contact.phone}`} className="hover:text-gold-400 transition-colors">
                                    {footerLinks.contact.phone}
                                </a>
                            </p>
                            <p>
                                <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-gold-400 transition-colors">
                                    {footerLinks.contact.email}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-navy-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-warm-400 text-sm">
                            &copy; {currentYear} Magweta neVamwe. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-warm-400 hover:text-gold-400 transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-warm-400 hover:text-gold-400 transition-colors text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-warm-400 hover:text-gold-400 transition-colors text-sm">
                                Disclaimer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}