import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from 'next/image';
import { getMajor } from "@/app/lib/utils";
import directus from '@/lib/directus';


export default async function Page({params}: any) {
    
    const majorData = await getMajor(params.id);
    if (!majorData) {
        return null;
    }
    
    var majorName = majorData.name;
    var nameArray = majorName.split(' ');
    var nameFirstWord = nameArray[0];
    var nameRest = majorName.substring( majorName.indexOf(" ") + 1, majorName.length );
    
    return (
        <main>
            <Header />
            <div className="w-full h-auto">
                <div className="relative max-w-full mb-8">
                    <Image
                        src={`${directus.url}assets/${majorData.thumbnail.filename_disk}`}
                        height="370"
                        width="1024"
                        className="w-full h-auto brightness-50 filter"
                        alt="VGU Campus Image"
                    />
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full text-center">
                        <h1 className=" mb-8 text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            {nameFirstWord}{' '}
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                {nameRest}
                            </mark>{' '}
                        </h1>
                    </div>
                </div>

                <div className='grid w-9/12 border-2 p-6 rounded mx-auto grid-flow-row-dense grid-cols-8 gap-8 m-4'>
                        <div className='col-span-3'>
                        <div id="quote" dangerouslySetInnerHTML={{ __html: majorData.tagline }}>
                            
                        </div>
                        <hr className="my-6" />
                        {/* <Image
                            className='rounded'
                            src="/drhathucvien.jpg"
                            width={350}
                            height={200}
                            alt="Placeholder image"
                        /> */}

                        <div id="accreditation">
                            <h1 className="text-vgu-orange text-2xl font-bold">Accreditation</h1>
                            <div className="text-vgu-darkblue" dangerouslySetInnerHTML={{ __html: majorData.accreditation }}></div>
                            <hr className="mt-6" />
                        </div>



                        <div id="contact">

                            {/* <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr> */}
                            <h1 className="text-vgu-orange text-2xl font-bold">Contact</h1>
                            <div className="text-vgu-darkblue" dangerouslySetInnerHTML={{ __html: majorData.contact }}></div>
                        </div>
                    </div>


                    <div className='col-span-5' dangerouslySetInnerHTML={{ __html: majorData.description }}>
                        

                    </div>
                </div>

            </div>
            <Footer />
        </main>
    )
}