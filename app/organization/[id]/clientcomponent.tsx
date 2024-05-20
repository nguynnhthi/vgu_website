"use client"

import Image from 'next/image';
import React from "react";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { sans } from '../../ui/fonts';
import Header from '@/app/components/header';
import directus from '@/lib/directus';


export default function DepartmentClient({ membersData, childDeptData }: { membersData: any; childDeptData: any }) {

    const [size, setSize] = React.useState(null);
    const handleOpen = (value: any) => setSize(value);

    const handleViewInfo = (name: any) => {
        console.log(name); // Log the name to the console
        handleOpen("lg"); // Open the dialog
    };

    var deptName = membersData.name;
    var nameArray = deptName.split(' ');
    var nameFirstWord = nameArray[0];
    var nameRest = deptName.substring( deptName.indexOf(" ") + 1, deptName.length );

    return (
        

            <div>
                <div className={`${sans.className} my-12`}>
                    <div className="mb-12">
                        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            {nameFirstWord} {' '}
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                {nameRest}
                            </mark>{' '}
                        </h1>
                    </div>

                    {/* ---PRESIDENTIAL BOARD MEMBERES--- */}

                    <div className="mx-auto w-8/12">
                        <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                            {membersData.members2.map((member: any) => (
                                <div key={member.item.id}>
                                    <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                        <div className="border-b-vgu-orange object-cover  border-b-2 shadow-lg">
                                            <Image
                                                src={`${directus.url}assets/${member.item.avatar.filename_disk}`}
                                                width={200}
                                                height={400}
                                                alt="Placeholder image"
                                            />

                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-2xl font-bold">{member.item.full_name}</div>
                                            <p className="text-base h-12 text-gray-700">
                                                {member.item.position}
                                            </p>
                                        </div>

                                        <div className="px-6 py-6 ">
                                            <Button onClick={() => handleViewInfo(member.item.full_name)} className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white  ">
                                                View Info

                                            </Button>
                                            <Dialog
                                                key={member.item.full_name}
                                                open={size === "lg"}
                                                size={size || "lg"}
                                                handler={handleOpen}
                                            >

                                                <DialogBody>
                                                    <div className='grid grid-flow-row-dense grid-cols-8 gap-8 m-4'>
                                                        <div className='col-span-3'>
                                                            <Image
                                                                className='rounded'
                                                                src={`${directus.url}assets/${member.item.avatar.filename_disk}`}
                                                                width={200}
                                                                height={350}
                                                                alt="Placeholder image"
                                                            />
                                                            <div className="px-4 py-4">
                                                                <div className="mb-2 text-vgu-darkblue uppercase text-3xl font-bold">{member.item.full_name}</div>
                                                                <p className="text-base h-12 text-vgu-darkblue">
                                                                    {member.item.title}
                                                                </p>
                                                                <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr>

                                                                <div className="flex flex-col text-vgu-darkblue">
                                                                    <p>{member.item.email}</p>
                                                                    <p>{member.item.phone_number}</p>
                                                                    {/* <p className="text-gray-400">Ext: 70158</p> */}
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className='col-span-5' dangerouslySetInnerHTML={{ __html: member.item.more_info }}>
                                                            
                                                        </div>
                                                    </div>
                                                </DialogBody>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
                {/* <div className={`${sans.className} my-12`}>
                    <div className="mb-12">
                        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                Presidential Board
                            </mark>
                            {' '} Office {' '}
                        </h1>
                    </div>

                    

                    <div className="mx-auto w-8/12">
                        <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                            {presidentialBoardData.map(({ name, position, imageUrl }) => (
                                <div key={name}>
                                    <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                        <div className="border-b-vgu-orange object-cover  border-b-2 shadow-lg">
                                            <Image
                                                src={`${imageUrl}`}
                                                width={400}
                                                height={200}
                                                alt="Placeholder image"
                                            />

                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-2xl font-bold">{name}</div>
                                            <p className="text-base h-12 text-gray-700">
                                                {position}
                                            </p>
                                        </div>

                                        <div className="px-6 py-6 ">
                                            <Button onClick={() => handleViewInfo({ name })} className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white  ">
                                                View Info

                                            </Button>
                                            <Dialog
                                                key={name}
                                                open={size === "lg"}
                                                size={size || "lg"}
                                                handler={handleOpen}
                                            >

                                                <DialogBody>
                                                    <div className='grid grid-flow-row-dense grid-cols-8 gap-8 m-4'>
                                                        <div className='col-span-3'>
                                                            <Image
                                                                className='rounded'
                                                                src="/drhathucvien.jpg"
                                                                width={350}
                                                                height={200}
                                                                alt="Placeholder image"
                                                            />
                                                            <div className="px-4 py-4">
                                                                <div className="mb-2 text-vgu-darkblue uppercase text-3xl font-bold">Dr. Ha Thuc Vien</div>
                                                                <p className="text-base h-12 text-vgu-darkblue">
                                                                    Vice President for Academic and Student Affairs
                                                                </p>
                                                                <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr>

                                                                <div className="flex flex-col text-vgu-darkblue">
                                                                    <p>Email: vien.ht@vgu.edu.vn</p>
                                                                    <p>Tel: +84 (0)274 222 0990 (ext: 70113)</p>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className='col-span-5'>
                                                            <div className='mb-4'>
                                                                <p>  Ambitious and results-driven academic professional with broad-based expertise in leading teams, establishing departments and strengthening organizations. Committed to excellence in business operations.</p>
                                                            </div>
                                                            <div className='mb-4'>
                                                                <h1 className='text-vgu-orange uppercase text-2xl font-bold' >Academic Achievements</h1>
                                                                <p>
                                                                    - Ph.D in Resource Economics from Humboldt University, Germany, 2007. <br />
                                                                    - MA in Sustainable Development from Chiang Mai University, Thai Lan, 2003. <br />
                                                                    - BSc in Land Management from University of Agriculture and Forestry, Ho Chi Minh City, Vietnam, 1996
                                                                </p>
                                                            </div>
                                                            <div className='mb-4'>
                                                                <h1 className='text-vgu-orange uppercase text-2xl font-bold' >Professional History</h1>
                                                                <p>
                                                                    Dr. Ha Thuc Vien is the Acting President of the Vietnamese German University. He is also Vice President in charge of Academic Affairs cum Director of the VGU's Management Unit (VMU, an designated unit to manage the VGU New Campus construction under the USD 200 million World Bank loaned project).
                                                                    <br />
                                                                    <br />
                                                                    Before joining VGU in 2012, Dr. Vien was the Head of Natural Resources and Tourism Department and also the founder and Director of Center for International Education of Ho Chi Minh City University of Agriculture and Forestry. His earlier career includes a senior lecturer in Resource and Land Economics, Resource Management, Land Use and Project Management. He has published a number of books, book chapters and articles in his specialized fields.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogBody>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div > */}
            </div>

        

    )
}