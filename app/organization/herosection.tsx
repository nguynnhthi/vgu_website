import { sans } from '../ui/fonts';
import directus from '@/lib/directus';
export default function HeroSection() {
    return (

        <div className={`${sans.className}`}>
            <div className="relative max-w-full mb-8">
                <img
                    src={`${directus.url}assets/cf12b9ca-d322-4dcc-9666-e527398704c8`}
                    className="w-full h-full brightness-75 filter"
                    alt="VGU Organization"
                />

                <div className=" w-1/2 absolute inset-0 py-16 text-center mx-auto my-auto h-auto">
                    <h1 className=" mb-8 text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                        VGU{' '}
                        <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                            Establishment
                        </mark>{' '}
                    </h1>
                    <div>
                        <p className='text-white'>
                            The initial idea of a Vietnamese-German University was developed in late 2005.
                        </p>
                        <p className='text-white'> The Hessen State Minister of Higher Education, Research and the Arts (HMWK), Udo Corts, and the Vietnamese Minister of Education and Training (MOET), Prof. Dr. Nguyen Thien Nhan, decided to establish the university.</p>
                    </div>
                </div>
            </div>




        </div>
    );
}