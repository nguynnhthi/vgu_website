import { notFound } from 'next/navigation';
import HeroSection from './herosection';
import { getCarousel } from '../lib/utils';

  
export default async function ServerHeroSection({ id }: { id: string }) {
    const carouselData = await getCarousel(id);
  
    if (!carouselData) {
      console.error("DEBUG: No carousel data found!");
      notFound();
      return null; // Ensure the function returns null if data is not found
    }
  
    return (<HeroSection carouselData={carouselData} />);
  }