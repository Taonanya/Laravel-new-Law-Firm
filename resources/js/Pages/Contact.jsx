import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function ContactPage() {
    return (
        <>
            <Head title="Contact Us - Magweta neVamwe" />
            <Header />
            <main>
                <Contact />
            </main>
            <Footer />
        </>
    );
}