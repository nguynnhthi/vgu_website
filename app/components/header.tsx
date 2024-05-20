import VGULogo from './vgu-logo';
import NavBar from './navbar';
import SubNav from './subnav';
export default function Header() {
  return (
    // <div className="md:h-30 h-30 mb-4 flex w-screen items-center justify-between bg-white shadow-lg">
    //   <VGULogo />
    //   <NavBar />
    // </div>
    <div className="md:h-30 h-30 mb-4 w-screen bg-white shadow-lg">
      {/* <VGULogo /> */}
      <SubNav />
      <NavBar />
    </div>
  );
}
