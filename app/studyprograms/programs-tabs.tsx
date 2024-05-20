"use client"
import React from "react";
import { sans } from '../ui/fonts';
import Link from 'next/link';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import directus from '@/lib/directus';


export default function ProgramTabs2({ bachelor_programs, master_programs }: { bachelor_programs: any; master_programs: any }) {
    const [activeTab, setActiveTab] = React.useState("html");
    
    const bscEngPrograms = bachelor_programs;
    const maEngPrograms = master_programs;

    return (
        <div className={`${sans.className}`}>
            <div className='w-8/12 mx-auto'>
                <Tabs value="bachelor">
                    <TabsHeader className='p-4 text-vgu-darkblue my-6 mx-auto w-9/12'
                        indicatorProps={{
                            className: "",
                        }} >
                        <Tab value="bachelor" activeClassName="text-vgu-orange"
                            onClick={() => setActiveTab("bachelor")}
                            className={activeTab === "bachelor" ? "text-vgu-orange" : ""}>
                            <p className="text-center text-3xl py-2 font-extrabold uppercase leading-none tracking-tight">
                                Bachelor Programs
                            </p>
                        </Tab>

                        <Tab value="master"
                            onClick={() => setActiveTab("master")}
                            className={activeTab === "master" ? "text-vgu-orange" : ""}>
                            <p className="text-center text-3xl py-2 font-extrabold uppercase leading-none tracking-tight">
                                Master Programs
                            </p>
                        </Tab>
                    </TabsHeader>

                    <TabsBody>
                        <TabPanel value="bachelor">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {bscEngPrograms.map((item: any) => (
                                    <div key={item.id}>
                                        <div className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                            <div className="width-full h-auto">
                                                <img
                                                    src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
                                                    alt="Placeholder image"
                                                    className="card-imageblock border-b-vgu-orange
                                                    border-b-2"
                                                />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="mb-2 text-2xl font-bold">{item.name}</div>
                                                <p className="text-base text-gray-700">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className="px-6 py-6 ">
                                                {/* <span className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                                    Learn more
                                                </span> */}
                                                <Link href={`/studyprograms/${item.id}`}>
                                                    <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                                        Learn more
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div id="viewAllBtn">
                                <button className=" mt-10 mx-auto w-auto text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue text-xl block rounded-full bg-white px-5 py-2 font-extrabold uppercase outline outline-1 duration-300 hover:text-white ">
                                    View all programs
                                </button>
                            </div>
                        </TabPanel>

                        <TabPanel value="master">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {maEngPrograms.map((item: any) => (
                                    <div key={item.id}>
                                        <div className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105">
                                            <div className="width-full h-auto overflow-hidden">
                                                <img
                                                    src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
                                                    alt="Placeholder image"
                                                    className="card-image block w-full border-b-vgu-orange
                                                    border-b-2"
                                                />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="mb-2 text-2xl font-bold">{item.name}</div>
                                                <p className="text-base text-gray-700">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className="px-6 py-6 ">
                                                <Link href={`/studyprograms/${item.id}`}>
                                                    <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                                        Learn more
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div id="viewAllBtn">
                                <button className=" mt-10 mx-auto w-auto text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue text-xl block rounded-full bg-white px-5 py-2 font-extrabold uppercase outline outline-1 duration-300 hover:text-white ">
                                    View all programs
                                </button>
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
}