// "use client"
// import React from "react";
import { sans } from '../ui/fonts';
import Link from 'next/link';
import directus from '@/lib/directus';
import { createItem } from '@directus/sdk';
import { getRichText } from '../lib/utils';
export default async function InquiryForm() {
    const msrdInfo = await getRichText("marketing_student_recruitment_department");
    const handleSubmit = async (formData: any) => {
        'use server';
    
        const first_name = formData.get('first_name');
        const last_name = formData.get('last_name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
    
        try {
          await directus.request(
            createItem('message', {
              first_name,
              last_name,
              email,
              phone,
              message,
            })
          );
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <div className={`${sans.className}`}>
            {/* <!-- component --> */}
            <div className="flex justify-center w-9/12 items-center mx-auto h-fit pt-16 pb-12 bg-white">
                {/* <!-- COMPONENT CODE --> */}
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    {/* Left form */}
                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl hover:-translate-y-2 duration-300">
                        <div>
                            <h1 className="font-bold uppercase text-5xl text-vgu-orange">Not decided yet?</h1>
                            <h1 className="font-bold uppercase text-5xl text-vgu-darkblue">Send us a message!</h1>
                        </div>
                        <form action={handleSubmit}>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" id='first_name' name='first_name' required/>
                                <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" id='last_name' name='last_name' required/>
                                <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" id='email' name='email' required/>
                                <input className="w-full bg-gray-100 text-vgu-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" id='phone' name='phone' required/>
                            </div>


                            <div className="my-4">
                                <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" id='message' name='message' required></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button className="uppercase text-sm font-bold tracking-wide bg-vgu-darkblue text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right form */}
                    <div
                        className="w-full lg:-mt-96 lg:w-2/6 px-4 py-8 ml-auto bg-vgu-darkblue rounded-2xl hover:-translate-y-2 duration-300">
                        <div className="flex flex-col text-white ">
                            <div dangerouslySetInnerHTML={{ __html: msrdInfo.rich_text }}></div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-facebook-f text-blue-900" />
                                </a>
                                <a href="" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-linkedin-in text-blue-900" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- COMPONENT CODE --> */}
            </div>


        </div>
    );
}