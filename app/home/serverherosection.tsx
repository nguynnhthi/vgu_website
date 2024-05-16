import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';
import HeroSection from './herosection';

async function getCarousel(id: string) {
    try {
      const carousel = await directus.request(
        readItem('block_carousel', id, {
          fields: [
            {
              carousel_image: [
                {
                  carousel_image_id: [
                    { image: ['filename_disk'] }
                  ]
                }
              ]
            }
          ]
        })
      );
  
      if (!carousel || !Array.isArray(carousel.carousel_image)) {
        console.error('Invalid carousel data format:', carousel);
        return null;
      }
      return carousel;
    } catch (error) {
      console.error('Error fetching carousel data:', error);
      return null; // Return null in case of error
    }
  }
  
export default async function ServerHeroSection({ id }: { id: string }) {
    const carouselData = await getCarousel(id);
  
    if (!carouselData) {
      console.error("DEBUG: No carousel data found!");
      notFound();
      return null; // Ensure the function returns null if data is not found
    }
  
    return (<HeroSection carouselData={carouselData} />);
  }