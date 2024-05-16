'use client'
import { Carousel } from "@material-tailwind/react";
import directus from "@/lib/directus";

export default function HeroSection({ carouselData }: { carouselData: any }) {
  if (!carouselData) {
    console.error('Invalid carouselData format:', carouselData);
    return null;
  }

  return (
    <div>
      <Carousel transition={{ type: "tween", duration: 1 }} className="rounded-xl">
        {carouselData.carousel_image.map((item: { carousel_image_id: { image: { filename_disk: any; }; }; }) => {
          if (!item.carousel_image_id || !item.carousel_image_id.image) {
            console.error('Invalid image data:', item);
            return null;
          }
          return (
            <img
              key={item.carousel_image_id.image.filename_disk}
              src={`${directus.url}assets/${item.carousel_image_id.image.filename_disk}`}
              className="h-auto w-full object-cover"
              alt="carousel image"
            />
          );
        })}
      </Carousel>
    </div>
  );
}