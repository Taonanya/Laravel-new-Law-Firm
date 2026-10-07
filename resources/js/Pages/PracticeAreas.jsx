import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import PracticeAreas from '@/Components/PracticeAreas';
import Footer from '@/Components/Footer';

export default function PracticeAreasPage() {
    return (
        <>
            <Head title="Practice Areas - Magweta neVamwe" />
            <Header />
            <main>
                <PracticeAreas />
            </main>
            <Footer />
        </>
    );
}