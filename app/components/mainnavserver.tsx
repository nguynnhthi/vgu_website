import Link from 'next/link';
import Image from 'next/image';
import { sans } from '../ui/fonts';
import { getNavigationItems } from '../lib/utils';
import { usePathname, notFound } from 'next/navigation';
import clsx from 'clsx';
import MainNav from './mainnav';



export default async function MainNavServer() {
  const mainnav = await getNavigationItems("main-nav");
  if (!mainnav) {
    console.error("DEBUG: No carousel data found!");
    notFound();
    return null; // Ensure the function returns null if data is not found
  }

  return (
    <MainNav mainnavData={mainnav} /> 
  );
}