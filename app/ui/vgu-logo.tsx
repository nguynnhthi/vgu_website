import Image from 'next/image';
import Link from 'next/link';
import { sans } from './fonts';

export default function VGULogo() {
  return (
    <div
      className={`${sans.className} flex flex-row items-center p-6 leading-none text-black`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" / */}
      {/* <Link href={"/dashboard"}> <p className="text-[44px]">Acme</p> </Link> */}

      <Link href={'/dashboard'}>
        {' '}
        <Image
          src="http://localhost:8055/assets/ddbfcbbe-e342-48b1-9eba-213da2fbdead"
          width={261}
          height={89}
          className="hidden md:block"
          alt="VGU Logo"
        />
      </Link>
    </div>
  );
}
