import Image from 'next/image';
import { sans } from '../ui/fonts';
import { getFigures } from '../lib/utils';
import directus from '@/lib/directus';

<script src="../path/to/countup.min.js"></script>




export default async function VguInFigures() {
  const figures = await getFigures();
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="bg-vgu-orange rounded px-2 text-white">
            In Figures
          </mark>{' '}
        </h1>
      </div>

      <div className="mx-auto grid w-8/12 grid-cols-7 ">
        <div className="h-500 relative col-span-5">
          <Image
            src={`${directus.url}assets/e9e22c0a-3cb8-43cc-94bf-e9f8cbfaa9ff`}
            alt="VGU Library Image"
            width={750}
            height={750}
          />
        </div>
        <div className="col-span-2 mx-6 flex flex-col justify-between">
          {figures.map((item) => (
            (item.order === 100) ? (<div>
                <p className="from-vgu-orange to-vgu-yellow bg-gradient-to-r bg-clip-text text-7xl text-transparent">
                  {item.figure}
                </p>
                <p className="text-xl">{item.content}</p>
                </div>)
            : (
              <div>
                <p className="text-vgu-darkblue text-6xl">{item.figure}</p>
                <p>{item.content}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
    
  );
}
