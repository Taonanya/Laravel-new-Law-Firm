import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Attorneys from '@/Components/Attorneys';
import Footer from '@/Components/Footer';

export default function AttorneysPage() {
    return (
        <>
            <Head title="Our Attorneys - Magweta neVamwe" />
            <Header />
            <main>
                <Attorneys />
            </main>
            <Footer />
        </>
    );
}