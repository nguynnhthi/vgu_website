"use client"
import React from "react";
import { sans } from '../ui/fonts';
import Link from 'next/link';
export default function Test() {
    return (
        <div className={`${sans.className}`}>
            {/* <!-- component --> */}
            <div className="flex justify-center w-9/12 items-center mx-auto h-screen bg-white">
                {/* <!-- COMPONENT CODE --> */}
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    {/* Left form */}
                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl hover:-translate-y-2 duration-300">
                        <div>
                            <h1 className="font-bold uppercase text-5xl text-vgu-orange">Not decided yet?</h1>
                            <h1 className="font-bold uppercase text-5xl text-vgu-darkblue">Send us a message!</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                            <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" />
                        </div>




                        <div className="my-4">
                            <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase text-sm font-bold tracking-wide bg-vgu-darkblue text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Right form */}
                    <div
                        className="w-full lg:-mt-96 lg:w-2/6 px-4 py-8 ml-auto bg-vgu-darkblue rounded-2xl hover:-translate-y-2 duration-300">
                        <div className="flex flex-col text-white ">
                            <h1 className="font-bold uppercase text-2xl my-4">Marketing & Student Recruitment Department</h1>

                            <div className="flex my-4 w-full">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-400">Room 220 - Admin Building</p>
                                    <Link className="flex text-gray-400 hover:text-white" href="https://maps.app.goo.gl/q6WUUwkxcUaniPCM8">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg> */}

                                        VGU Campus (Google Map)

                                    </Link>
                                </div>
                            </div>

                            <div className="flex my-4 w-full">
                                {/* <div className="flex flex-col pl-1">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div> */}
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 0274 222 0990</p>
                                    <p className="text-gray-400">Fax: 0274 222 0980</p>
                                    {/* <p className="text-gray-400">Ext: 70158</p> */}
                                </div>
                            </div>

                            <div className="flex my-4 w-full">
                                {/* <div className="flex flex-col pl-1">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div> */}
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Email Us</h2>
                                    {/* <p className="text-gray-400">For Master: masterinfo@vgu.edu.vn</p> */}
                                    <p className="text-gray-400">Email: study@vgu.edu.vn</p>

                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-facebook-f text-blue-900" />
                                </a>
                                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-linkedin-in text-blue-900" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- COMPONENT CODE --> */}
            </div>

            {/* <!-- BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}