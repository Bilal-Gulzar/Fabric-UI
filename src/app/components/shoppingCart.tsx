"use client"
import { Minus, Plus, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import useAppContext from '@/context/ContextAPI';
import { useRouter } from 'next/navigation';


export default function ShoppingCart() {
const {cart,setCart} = useAppContext()
  const modalRef = useRef<HTMLDivElement| null>(null);
    const router = useRouter()
       useEffect(() => {
         if (!modalRef.current) return;
    
         if (cart) {
           disableBodyScroll(modalRef.current);
         } else {
           enableBodyScroll(modalRef.current);
         }
    
         return () => {
           if (modalRef.current) enableBodyScroll(modalRef.current);
         };
       }, [cart]);
    const navigate = ()=>{
 router.push('/cart')
 setCart(false)

    }
  return (
    <section
      className={`${cart ? "fixed bg-black/80 inset-0 z-50 min-h-screen" : ""}`}
    >
      <div
        className={`min-h-screen w-[90vw] sm:w-[410px] z-50 fixed right-0 top-0 bg-white ${
          cart ? "" : "translate-x-full"
        } transition-all duration-500 overflow-x-hidden`}
        ref={modalRef}
      >
        <div className=" py-10 px-7">
          <div className="flex items-center w-full justify-between">
            <div className="font-semibold uppercase text-sm">shopping cart</div>
            <div onClick={() => setCart(false)}>
              <X size={20} />
            </div>
          </div>
          <div>
            <div className="text-gray-600 text-xs mt-2">2 items</div>
            {/* <div className="text-gray-600 text-xs mt-7 text-center">Your cart is empty</div>
            <Button className='uppercase text-sm w-full font-semibold mt-10 ' variant="outline">continue shopping</Button> */}
          </div>
        </div>
        <div className="mx-7 pt-5 height pb-96 flex flex-col gap-6 scrollbar-hide bg-white overflow-y-auto overflow-x-hidden">
          <div className="flex gap-4 border-b-4 pb-7  border-gray-200 ">
            <div className="w-24 h-28 shrink-0 bg-gray-100 relative">
              <Image
                src="/img1.png"
                fill
                alt="img"
                sizes="100vw"
                className="w-full full"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 text-sm  w-full min-w[170px]">
              <div className="text-gray-700 space-y-2 ">
                <p className=" line-clamp-1  font-medium text-xs pb-1 pr-2">
                  luxury pret
                </p>
                <span className="font-bold">RS.5000</span>
              </div>
              <div className="flex  items-center w-full  justify-between">
                <div className="font-bold gap-4 w-fit p-3 flex border border-gray-300 items-center">
                  <span className="cursor-pointe text-gray-500">
                    <Minus size={20} />
                  </span>
                  <span className="text-xs text-gray-600 font-normal  ">1</span>
                  <span className="cursor-pointe text-gray-500">
                    <Plus size={20} />
                  </span>
                </div>
                <div className="">
                  <X size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-b-4 pb-7  border-gray-200 ">
            <div className="w-24 h-28 shrink-0 bg-gray-100 relative">
              <Image
                src="/img1.png"
                fill
                alt="img"
                sizes="100vw"
                className="w-full full"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 text-sm  w-full min-w[170px]">
              <div className="text-gray-700 space-y-2 ">
                <p className=" line-clamp-1  font-medium text-xs pb-1 pr-2">
                  luxury pret
                </p>
                <span className="font-bold">RS.5000</span>
              </div>
              <div className="flex  items-center w-full  justify-between">
                <div className="font-bold gap-4 w-fit p-3 flex border border-gray-300 items-center">
                  <span className="cursor-pointe text-gray-500">
                    <Minus size={20} />
                  </span>
                  <span className="text-xs text-gray-600 font-normal  ">1</span>
                  <span className="cursor-pointe text-gray-500">
                    <Plus size={20} />
                  </span>
                </div>
                <div className="">
                  <X size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 h-[320px] w-full z-50   bg-white px-7 flex flex-col gap-5">
          <div className="flex  pt-2 font-semibold justify-between">
            <p className="text-xs">Subtotal:</p>
            <p>RS.5,000</p>
          </div>

          <div className="flex flex-col text-xs  font-medium text-white tracking-widest gap-3 ">
            <Button className="hover:bg-white hover:text-black hover:border-gray-400 font-semibold hover:border">
              <Link href="/#">CHECKOUT</Link>
            </Button>
            <Button onClick={navigate} variant="outline" className="text-black font-semibold">
              <Link href="/cart">VIEW CART</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
