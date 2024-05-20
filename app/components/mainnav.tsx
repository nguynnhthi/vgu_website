'use client'
import Link from 'next/link';
import Image from 'next/image';
import { sans } from '../ui/fonts';
// import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import directus from '@/lib/directus';



export default function MainNav({ mainnavData }: { mainnavData: any }) {
  if (!mainnavData) {
    console.error('Invalid mainnavData format:', mainnavData);
    return null;
  }
  // const pathname = usePathname();

  return (
    <div className={`${sans.className} align-middle p-6 items-center justify-between flex text-xl`}>
      <div>
        <Link href={'/homepage'}>
          {' '}
          <Image
            src={`${directus.url}assets/ddbfcbbe-e342-48b1-9eba-213da2fbdead`}
            width={261}
            height={89}
            className="hidden md:block"
            alt="VGU Logo"
          />
        </Link>
      </div>

      <div>
        <ul className="hidden md:flex">
          {mainnavData.map((item: any) => (
            
            <Link href={item.path}>
              <li
                key={item.name}
                className={clsx("nav-links link-underline align-items-middle text-vgu-darkblue hover:text-vgu-orange flex cursor-pointer px-4 font-medium capitalize duration-200 hover:scale-105")}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
    
  );
}
