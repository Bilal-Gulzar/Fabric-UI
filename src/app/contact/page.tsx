import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react'
import { Textarea } from "@/components/ui/textarea";
import { RiMessage2Fill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="text-xs  pb-20">
      <section className="flex flex-col items-center mt-8 lg:mt-3">
        <div className="text-xs bg-gray-100 lg:bg-white w-full flex justify-center py-4  space-x-2 text-gray-800">
          <Link href={"/"}>Home</Link>
          <span className="font-semibold">&gt;</span>

          <span> Contact </span>
        </div>
        <h1 className="font-bold uppercase text-xl mt-5">contact</h1>
      </section>
      <section className="grid grid-cols-1 px-5 lg:px-12 gap-y-10 md: md:grid-cols-2 lg:gap-10 mt-10">
        <div className="">
          <p>Have a question or comment?</p>
          <p className="my-3 ">
            Use the form below to send us a message or contact us by mail at:
          </p>
          <div className="">
            <div className="flex flex-col gap-3 mt-6 text-xs">
              <label htmlFor="name">Name</label>
              <Input id="name" />
            </div>
            <div className="flex flex-col gap-3 mt-6 text-xs">
              <label htmlFor="phone">Phone Number</label>
              <Input id="phone" />
            </div>
            <div className="flex flex-col gap-3 mt-6 text-xs">
              <label htmlFor="email">
                Email
                <span className="text-red-500">*</span>
              </label>
              <Input id="email" />
            </div>
            <div className="flex flex-col gap-3 mt-6 text-xs">
              <label htmlFor="comment">
                Comment
                <span className="text-red-500">*</span>
              </label>
              <Textarea id="comment" className="!ring-0 !rounded-none h-56" />
            </div>
          </div>
          <div className="mt-7">
            <Button className="px-12  uppercase">submit contact</Button>
          </div>
        </div>
        <div className="space-y-6 md:pl-8 lg:pl-16 pe-2">
          <h3 className="font-bold text-sm">Get In Touch!</h3>
          <p>
            We'd love to hear from you - please use the form to send us your
            message or ideas.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>
                <RiMessage2Fill size={22} />
              </span>
              <p>Whatsapp Support: +92 318 3243122</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaEnvelope size={20} />
              </span>
              <p> support@binsaeedfabric.com</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>Opening Hours:</div>
            <div>MON to FRI: 10:00AM - 08:00PM </div>
            <div>SAT: 10:00AM - 2:00PM</div>
          </div>
        </div>
      </section>
    </div>
  );
}
