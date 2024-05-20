import Header from "../components/header";
import HeroSection from "./herosection";
import InquiryForm from "./inquiry-form";
import Test from "./test";
import VguPartners from "../components/vgupartners";
import Footer from "../components/footer";
import ServerProgramTabs from "./server-programs-tabs";

export default function Page() {
    return (
        <main>
            <Header />
            <HeroSection />
            <ServerProgramTabs />
            <InquiryForm />
            <VguPartners />
            <Footer />
            {/* <Test /> */}
        </main>
    )


}