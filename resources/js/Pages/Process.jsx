import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Process from '@/Components/Process';
import Footer from '@/Components/Footer';

export default function ProcessPage() {
    return (
        <>
            <Head title="Our Process - Magweta neVamwe" />
            <Header />
            <main>
                <Process />
            </main>
            <Footer />
        </>
    );
}