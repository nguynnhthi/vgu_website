import ServerHeroSection from "./serverherosection";
import CtaSection from "../components/ctasection";
import Footer from "../components/footer";
import Header from "../components/header";
import StudyPrograms from "./studyprograms";
import VguInFigures from "./vguinfigures";
import VguPartners from "../components/vgupartners";
import VguToday from "./vgutoday";
import directus from '@/lib/directus';
import { readItems, readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col">
            <Header/>
            <ServerHeroSection id="landing-page-carousel"/>
            <StudyPrograms />
            <VguInFigures />
            <VguToday />
            <VguPartners />
            <CtaSection />
            <Footer />
            <p>Hello World</p>
        </main>
    )


}