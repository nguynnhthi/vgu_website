import Image from 'next/image';
import { sans } from '../ui/fonts';
import Link from 'next/link';
import directus from '@/lib/directus';
import { getAllDepartments } from '../lib/utils';

export default async function Departments() {


    var departmentsData = await getAllDepartments();

    if (!departmentsData) {
        return null;
    }

    return (

        <div className={`${sans.className} my-12`}>
            <div className="mb-12">
                <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                    VGU {' '}
                    <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                        Organization
                    </mark>{' '}
                </h1>
            </div>

            {/* ---PROGRAMS LIST--- */}

            < div className="mx-auto w-8/12">
                <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                    {departmentsData.map((item) => (
                        <div key={item.id}>
                            <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                <div className="width-full h-auto shadow-lg">
                                    <img
                                        src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
                                        alt="Placeholder image"
                                        className="card-imageblock w-full h-auto border-b-vgu-orange
                                                    border-b-2"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-2xl font-bold">{item.name}</div>
                                    <p className="text-base text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="px-6 py-6 ">
                                    <Link href={`/organization/${item.id}`}>
                                        <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </div >
    );
}