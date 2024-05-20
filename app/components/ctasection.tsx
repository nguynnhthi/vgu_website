import { sans } from '../ui/fonts';
import directus from '@/lib/directus';

export default function CtaSection() {
  return (
    <div className={`${sans.className}`}>
      <div className="relative">
        <img
          src={`${directus.url}assets/9e489813-e9ad-4b83-b346-2ad68e486a57`}
          className="h-auto max-w-full brightness-75 filter"
          alt="VGU Campus Image"
        />

        {/* <video className=" h-auto w-full brightness-75 filter" autoPlay controls loop muted >
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* <video src="https://www.youtube.com/watch?v=aKexZlnITqg"></video> */}
        <div className="absolute inset-0 mx-auto my-auto h-32 w-auto">
          <h1 className="mb-4 text-center text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore our new campus
          </h1>

          <div>
            <div className="flex w-full justify-center space-x-12 px-6 py-6 ">
              <button className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue text-l inline-block rounded-full bg-white px-5 py-2 font-extrabold uppercase outline outline-1 duration-300 hover:text-white ">
                VIRTUAL TOUR
              </button>

              <button className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue text-l inline-block rounded-full bg-white px-5 py-2 font-extrabold uppercase outline outline-1 duration-300 hover:text-white ">
                CAMPUS TOUR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}