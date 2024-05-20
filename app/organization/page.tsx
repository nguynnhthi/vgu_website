import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "./herosection";
import Organization from "./departments";
import Test from "./test";
export default function Page() {
    return (
        <main>
            <Header />
            <HeroSection />
            <Organization />
            {/* <Test /> */}
            <Footer />
        </main>
    )


}