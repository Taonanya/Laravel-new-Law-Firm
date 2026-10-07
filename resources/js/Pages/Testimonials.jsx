import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Testimonials from '@/Components/Testimonials';
import Footer from '@/Components/Footer';

export default function TestimonialsPage() {
    return (
        <>
            <Head title="Testimonials - Magweta neVamwe" />
            <Header />
            <main>
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}