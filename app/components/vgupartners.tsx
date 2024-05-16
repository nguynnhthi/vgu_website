import Image from 'next/image';
import { sans } from '../ui/fonts';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';

async function getPartnerLogos(block_id: string) {
  try {
    const logos = await directus.request(
      readItem('block_image_slideshow', block_id, {
        fields: ['images.directus_files_id'],
      })
    );
    return logos;
  } catch (error) {
    notFound();
  }
}

export default async function VguPartners() {
  const logos = await getPartnerLogos('4867b831-42f6-4fd8-b170-7feb7c294016');
  
  return (
    <div className={`${sans.className} my-16`}>
      <div className="mb-16">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            PARTNERS
          </mark>{' '}
        </h1>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        

        <ul
          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {logos.images.map((logo: any) => {
            return (
              <li>
                <img className='w-170 h-150' src={`${directus.url}assets/${logo.directus_files_id}`} alt="frankfurt" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
