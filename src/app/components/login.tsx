"use client"
import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import useAppContext from '@/context/ContextAPI';
import Link from 'next/link';

export default function Login() {
    const modalRef = useRef<HTMLDivElement| null>(null);
      const {setLogin,login} = useAppContext()
   useEffect(() => {
     if (!modalRef.current) return;

     if (login) {
       disableBodyScroll(modalRef.current);
     } else {
       enableBodyScroll(modalRef.current);
     }

     return () => {
       if (modalRef.current) enableBodyScroll(modalRef.current);
     };
   }, [login]);

  return (
    <section
      className={`${login ? "fixed bg-black/80 inset-0 z-50 min-h-screen" : ""}`}
    >
      <div
        className={`min-h-screen w-[90vw] sm:w-96 z-50 fixed right-0 top-0 bg-white ${
          login ? "" : "translate-x-full"
        } transition-all duration-500 overflow-x-hidden`}
        ref={modalRef}
      >
        <div className="px-7 py-10">
          <div className="flex items-center w-full justify-between">
            <div className="font-medium">Login</div>
            <div onClick={()=>setLogin(false)}>
              <X />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-6 text-xs">
            <label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input id="email" placeholder="Email Address" />
          </div>
          <div className="flex flex-col gap-3 mt-6 text-xs">
            <label htmlFor='password'>
              password <span className="text-red-500">*</span>
            </label>
            <Input id="password" placeholder="password" type="password" />
          </div>
          <div className=" mt-6">
            <Button className="w-full font-bold">LOG IN</Button>
          </div>
          <div className="text-xs my-6 text-gray-600 underline underline-offset-4 text-center">
            Forgot your password?
          </div>
          <Link href="/register" className="mt-6">
            <Button onClick={()=>setLogin(false)} variant="outline" className="w-full font-bold">
              CREATE ACCOUNT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
