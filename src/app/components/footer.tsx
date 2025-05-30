"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  const [show,setShow]= useState(false)
    const { id } = useParams();
    const path = usePathname()
    const noNavbarRoutes = [
      "/logout",
       "/orders",
      "/profile",
      `/orders/${id}`,
    ];
  return (
    <footer
      className={`pb-12 lg:pb-0 ${
        noNavbarRoutes.includes(path) ? "hidden" : ""
      }`}
    >
      <section className="bg-[#fde6e6] border border-t-4 border-black flex flex-col lg:grid grid-cols-3  p-10 pb-20 px-5 lg:px-10 ">
        <div>
          <div className="flex items-center justify-between border-b pb-4 border-black  lg:border-0">
            <h3 className="font-bold uppercase ">information</h3>
            <span className="lg:hidden">
              {show ? (
                <MinusIcon onClick={() => setShow(false)} size={20} />
              ) : (
                <PlusIcon onClick={() => setShow(true)} size={20} />
              )}
            </span>
          </div>
          <div className="lg:flex flex-col gap-2  mt-5 hidden  pb-10  duration-300">
            <span>
              <Link href="/about" className="text-xs ">
                About US
              </Link>
            </span>
            <span>
              <Link href="/contact" className="text-xs">
                Contact Us
              </Link>
            </span>
          </div>
          <div
            className={`flex lg:hidden overflow-hidden flex-col gap-3  ${
              show ? "max-h-[300px] pb-10 mt-5 " : "max-h-0 mt-7"
            }    duration-300`}
          >
            <span>
              <Link href="/about" className="text-xs ">
                About US
              </Link>
            </span>
            <span>
              <Link href="/contact" className="text-xs">
                Contact Us
              </Link>
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold uppercase">newsletter sign up </h3>
          <p className="text-xs text-gray-600">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <div className="flex gap-3">
            <div className="grow shrink-0">
              <Input
                placeholder="enter your email address"
                className="border-red-500 bg-white !text-xs text-gray-600"
              />
            </div>
            <Button
              variant="outline"
              className="!border-red-500  font-bold uppercase  sm:px-8"
            >
              Submit
            </Button>
          </div>
          <div className="flex gap-4 mt-7">
            <span className="bg-white size-9 flex rounded-full items-center justify-center">
              <FaFacebookF />
            </span>
            <span className="bg-white size-9 flex rounded-full items-center justify-center">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
      </section>
      <section className="bg-black text-xs text-gray-200 py-8 text-center px-4 flex justify-center items-center ">
        Copyrights Hawk Sight Enterprises. All Rights Reserved.
      </section>
      <section className="bg-white py-1 text-[11px] ">
        .ProductItem__Label.ProductItem__Label--soldOut color: #000 !important;
      </section>
    </footer>
  );
}
