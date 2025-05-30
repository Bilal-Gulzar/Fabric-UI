"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";

export default function CartPage() {
  const router = useRouter()
  const navigateToBack = () => {
    router.back()
  };
  return (
    <div className="px-5 md:px-12 py-8 pb-32">
      <section className="flex flex-col gap-5">
        <div className="text-xs  space-x-2 text-gray-800">
          <Link href={"/"}>Home</Link>
          <span className="font-semibold">&gt;</span>

          <span> Your Cart </span>
        </div>

        <h1 className="font-semibold text-xl uppercase">Your cart</h1>
      </section>
      <section>
        <div className=" lg:grid hidden grid-cols-2 text-sm mt-12 bg-gray-100 p-3.5  border-gray-500 ">
          <div className="font-medium text-sm">PRODUCT</div>
          <div className="font-medium text-sm flex justify-between">
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
            <div></div>
          </div>
        </div>
        <div className=" lg:hidden flex justify-between mt-12 bg-gray-100 p-3.5  border-gray-500 ">
          <div className="font-medium text-sm">PRODUCT</div>
          <div className="font-medium text-sm flex justify-between">
            <div className="md:block hidden">PRICE</div>
          </div>
        </div>
        <div className="border border-gray-300 px-4 mt-3 ">
          <div className="grid grid-cols-2  mt-10 lg:mt-3">
            <div className="font-medium text-sm  borderb pb-3 md:pb-0 lg:py-5   border-gray-500   flex  md:gap-6 gap-4">
              <div className="w-28 h-36  shrink-0 relative bg-gray-100">
                <Image
                  src="/img1.png"
                  fill
                  className="w-full h-full"
                  sizes="(min-width: 808px) 50vw, 100vw"
                  alt=""
                  priority
                />
              </div>
              <div>
                <p className="text-xs">Luxury pret suit</p>
                <div className=" md:hidden text-gray-600 font-medium text-sm  py-2 ">
                  Rs.5000
                </div>
                <div className="font-medium md:hidden text-sm py-5 flex-col lg:gap-0 md:gap-2 lg:flex-row  justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="font-bold gap-4 w-24 sm:w-28 justify-between px-1 py-3 flex border border-gray-300 items-center">
                      <span className="cursor-pointe text-gray-700">
                        <Minus size={20} />
                      </span>
                      <span className="text-xs text-gray-600 font-normal  ">
                        1
                      </span>
                      <span className="cursor-pointe text-gray-500">
                        <Plus size={20} />
                      </span>
                    </div>
                    <div className="">
                      <X size={20} className="cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="hidden text-gray-500 border-t border-gray-400 py-2 border-dashed">
                  Rs.5000
                </div>
              </div>
            </div>
            <div className="font-medium md:flex hidden text-sm py-7 flex-col lg:gap-0 md:gap-2 lg:flex-row lg:items-center md:items-end justify-between">
              <div className=" text-gray-600 font-medium text-sm">Rs.5000</div>
              <div className="">
                <div className="font-bold gap-4 w-28 justify-between px-1 py-3 flex border border-gray-300 items-center">
                  <span className="cursor-pointe text-gray-700">
                    <Minus size={20} />
                  </span>
                  <span className="text-xs text-gray-600 font-normal  ">1</span>
                  <span className="cursor-pointe text-gray-500">
                    <Plus size={20} />
                  </span>
                </div>
              </div>
              <div className=" text-gray-700 md:hidden lg:block font-medium text-sm">
                Rs.5000
              </div>
              <div className="">
                <X size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 px-4 mt-3 ">
          <div className="grid grid-cols-2  mt-10 lg:mt-3">
            <div className="font-medium text-sm  borderb pb-3 md:pb-0 lg:py-5   border-gray-500   flex  md:gap-6 gap-4">
              <div className="w-28 h-36  shrink-0 relative bg-gray-100">
                <Image
                  src="/img1.png"
                  fill
                  className="w-full h-full"
                  sizes="(min-width: 808px) 50vw, 100vw"
                  alt=""
                  priority
                />
              </div>
              <div>
                <p className="text-xs">Luxury pret suit</p>
                <div className=" md:hidden text-gray-600 font-medium text-sm  py-2 ">
                  Rs.5000
                </div>
                <div className="font-medium md:hidden text-sm py-5 flex-col lg:gap-0 md:gap-2 lg:flex-row  justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="font-bold gap-4 w-24 sm:w-28 justify-between px-1 py-3 flex border border-gray-300 items-center">
                      <span className="cursor-pointe text-gray-700">
                        <Minus size={20} />
                      </span>
                      <span className="text-xs text-gray-600 font-normal  ">
                        1
                      </span>
                      <span className="cursor-pointe text-gray-500">
                        <Plus size={20} />
                      </span>
                    </div>
                    <div className="">
                      <X size={20} className="cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="hidden text-gray-500 border-t border-gray-400 py-2 border-dashed">
                  Rs.5000
                </div>
              </div>
            </div>
            <div className="font-medium md:flex hidden text-sm py-7 flex-col lg:gap-0 md:gap-2 lg:flex-row lg:items-center md:items-end justify-between">
              <div className=" text-gray-600 font-medium text-sm">Rs.5000</div>
              <div className="">
                <div className="font-bold gap-4 w-28 justify-between px-1 py-3 flex border border-gray-300 items-center">
                  <span className="cursor-pointe text-gray-700">
                    <Minus size={20} />
                  </span>
                  <span className="text-xs text-gray-600 font-normal  ">1</span>
                  <span className="cursor-pointe text-gray-500">
                    <Plus size={20} />
                  </span>
                </div>
              </div>
              <div className=" text-gray-700 md:hidden lg:block font-medium text-sm">
                Rs.5000
              </div>
              <div className="">
                <X size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-xs">
        <div className="mt-8 space-y-4">
          <h5 className="font-bold">Additional Comments</h5>
          <Textarea
            placeholder="Special instruction for seller... "
            className="!text-xs !ring-0 w-[50vw] h-24 !rounded-none p-5"
          />
          <div className="flex item-center gap-2">
            <span>
              <MdOutlineSecurity size={20} />
            </span>
            <span className="text-gray-500">Secure Shopping Guarantee</span>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
          <div className="mt-20">
            <div className="font-bold border-b-2 pb-4 border-black">
              Order summary
            </div>
            <div className="font-bold  mt-8 pb-3 border-b border-gray-200 flex items-center justify-between">
              Subtotal
              <span className="text-base">Rs.8,000</span>
            </div>
            <div className="mt-5">
              <div className='flex flex-col gap-2'>
                <label htmlFor="c" className="font-bold">
                  Coupon Code
                </label>
                <Input placeholder="Enter Coupon Code" id="c" />
              </div>
              <p className="text-gray-500 mt-4 border-b border-gray-200 pb-4 ">
                Coupon code will be applied on the checkout page
              </p>
            </div>
            <div className="font-bold flex items-center mt-8  justify-between">
              TOTAL
              <span className="text-base">Rs.8,000</span>
            </div>
          </div>
          <div className="space-y-4 px-0 md:pl-5">
            <div className='pt-5 md:pt-28'>
              <Button className="hover:bg-white hover:text-black hover:border-gray-400 font-semibold hover:border w-full">
                <Link href="/#">PROCEED TO CHECKOUT</Link>
              </Button>
            </div>
            <div>
              <Button onClick={navigateToBack}
                variant="outline"
                className="text-black w-full font-semibold"
              >
                GO BACK TO PREVIOUS PAGE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
