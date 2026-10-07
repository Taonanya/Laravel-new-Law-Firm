import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

export default function AboutPage() {
    return (
        <>
            <Head title="About Us - Magweta neVamwe" />
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </>
    );
}