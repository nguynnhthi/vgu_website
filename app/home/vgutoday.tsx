import Image from 'next/image';
import { sans } from '../ui/fonts';
import directus from '@/lib/directus';
import { getEvents, getNews, convertDateFormat, removeHtmlTags } from '../lib/utils';


export default async function VguToday() {
  const events = await getEvents();
  const news = await getNews();
  
  return (
    <div className={`${sans.className} m-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
            TODAY
          </mark>{' '}
        </h1>
      </div>

      {/* ---Upcoming events--- */}
      <div
        id="Upcoming-events"
        className=" mx-auto mb-12 w-8/12 rounded border p-10
        drop-shadow-lg"
      >
        <h1 className="text-vgu-darkblue mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight md:text-3xl lg:text-4xl">
          Upcoming Events
        </h1>

        <div className="mx-auto grid grid-cols-3 gap-6 ">
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src={`${directus.url}assets/f020a14a-f1e3-40ef-ad5e-712ee670fa11`}
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{convertDateFormat(events[0].date.toString())}</div>
              <p className="text-base text-gray-700">
                {(events[0].end_time === null) ? (events[0].start_time) : (`${events[0].start_time} - ${events[0].end_time}`)}
              </p><br></br>
              <p className="text-base text-gray-700 font-bold">
                {events[0].title}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src={`${directus.url}assets/0b7e6411-181f-4334-a7d7-bf11dd984941`}
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{convertDateFormat(events[1].date.toString())}</div>
              <p className="text-base text-gray-700">
                {(events[1].end_time === null) ? (events[1].start_time) : (`${events[1].start_time} - ${events[1].end_time}`)}
              </p><br></br>
              <p className="text-base text-gray-700 font-bold">
                {events[1].title}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src={`${directus.url}assets/4cc19413-d16e-4d54-ad80-a682c1eb61fb`}
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{convertDateFormat(events[2].date.toString())}</div>
              <p className="text-base text-gray-700">
                {(events[2].end_time === null) ? (events[2].start_time) : (`${events[2].start_time} - ${events[2].end_time}`)}
              </p><br></br>
              <p className="text-base text-gray-700 font-bold">
                {events[2].title}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---VGU News--- */}
      <div
        id="Upcoming-events"
        className="d mx-auto w-8/12 rounded
        drop-shadow-lg"
      >
        <h1 className="text-vgu-darkblue mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight md:text-3xl lg:text-4xl">
          VGU News
        </h1>

        <div className="mx-auto grid grid-cols-3 gap-6 ">
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <Image
              src={`${directus.url}assets/${news[0].image.filename_disk}`}
              width={300}
              height={435}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{news[0].title}</div>
              <p className="text-base text-gray-700">
                {`${removeHtmlTags(news[0].content.toString()).substring(0, 200)}...`}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <Image
              src={`${directus.url}assets/${news[1].image.filename_disk}`}
              width={300}
              height={435}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{news[1].title}</div>
              <p className="text-base text-gray-700">
                {`${removeHtmlTags(news[1].content.toString()).substring(0, 200)}...`}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <Image
              src={`${directus.url}assets/${news[2].image.filename_disk}`}
              width={300}
              height={435}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{news[2].title}</div>
              <p className="text-base text-gray-700">
                {`${removeHtmlTags(news[2].content.toString()).substring(0, 200)}...`}
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
