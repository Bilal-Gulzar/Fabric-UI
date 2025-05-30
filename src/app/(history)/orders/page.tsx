"use client"
import OrderPageFooter from '@/app/components/orderPageFooter';
import OrderPageNavBar from '@/app/components/orderPageNavBar';
import OrderSortingAndfiltering from '@/app/components/orderSortingAndfiltering';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { CgSortAz } from "react-icons/cg";

export default function Orders() {
      const [sorting,setSorting] = useState<boolean>(false)
      const [filter,setFilter] = useState<boolean>(false)
  return (
    <main className="bg-[#f5f5f5] flex flex-col justify-between overflow-hidden min-h-screen ">
      <div>
        <OrderPageNavBar />
        <div className=" lg:max-w-[1100px]  mx-5 lg:mx-auto sm:mx-5">
          <div className="flex items-center  mt-8  justify-between gap-4">
            <h1 className="text-xl font-semibold">Orders</h1>
            <CgSortAz
              onClick={() => setSorting(true)}
              className="text-gray-600 cursor-pointer"
              size={35}
            />
          </div>
          {/* {!isloading ? ( */}
          <div>
            <div className="grid sm:grid-cols-2  gap-5 lg:grid-cols-3 pb-52 pt-10">
              <div className="px-4 py-5 gap-5 rounded-lg bg-white flex flex-col">
                <div className="text-xs py-4 rounded-md px-5 bg-[#f5f5f5]">
                  <div className="flex items-center gap-1.5">
                    <span>
                      {/* {v.paid ? ( */}
                      <AiOutlineCheck className="size-4" />
                      {/* ) : ( */}
                      {/* <CgCloseO className="size-4" /> */}
                      {/* )} */}
                    </span>
                    <p className="font-semibold">
                      {true ? "Confirmed" : "Canceled"}
                    </p>
                  </div>
                  <p className="ml-5">
                    {/* {v.paid && "Last updated"} {v.date.month} {v.date.day}
                     */}
                    May 18
                  </p>
                </div>
                <Link href="#">
                  {/* {v.cartProducts && v.cartProducts?.[0]?.img ? ( */}
                  <div className="mx-auto  relative h-[300px] sm:h-80 bg-[#f5f5f5] rounded-md">
                    <Image
                      src="/img4.jpg"
                      fill
                      sizes="(min-width: 808px) 50vw, 100vw"
                      alt=""
                      priority
                    />
                  </div>
                  {/* ) : ( */}
                  {/* <div className="bg-[#f5f5f5] w-full h-72 sm:h-64"></div> */}
                  {/* )} */}
                </Link>
                <div className="text-xs">
                  <p className="font-semibold">1 item</p>
                  <p className="text-gray-500 mt-1">
                    <span className="font-medium">Order:</span>
                    <span className="text-sm"> Order BSOS-42006</span>
                  </p>
                </div>
                <div className="flex gap-4 items-center text-sm">
                  <p className="font-semibold">RS.5000</p>
                  {true ? (
                    <div className="bg-[#f5f5f5] items-center  text-xs py-2 px-4 rounded-full gap-1 flex">
                      <span>
                        <MdPayment className="size-4" />
                      </span>
                      <p>Payment successful</p>
                    </div>
                  ) : (
                    <div className="bg-[#f5f5f5] items-center text-xs py-2 px-4 rounded-full gap-1 flex">
                      <span>
                        <IoAlertCircleOutline className="size-4" />
                      </span>
                      <p>Payment Canceled</p>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button className="w-full font-semibold hover:text-red-800  text-red-600 text-sm tracking-wider  px-8 py-4 border-gray-300 rounded-md  flex justify-center items-center border-[1.5px] ">
                    Buy again
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="mt-8 sm:mx-10 mx-5">
                  <div className="bg-white p-6 flex flex-col gap-3 mt-12 ">
                    <p className="font-medium text-center">No orders yet</p>
                    <p className="text-sm text-center">
                      Go to store to place an order.
                    </p>
                  </div>
                </div> */}
          </div>
          {/* //   ) : ( */}
          {/* <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 pb-52 pt-10">
            <div className="gap-5 rounded-lg p-3 bg-white flex flex-col">
              <div className="text-xs w-full  py-4 rounded-md px-5 bg-[#f5f5f5]">
                <Skeleton className=" sm:w-48 h-5" />
                <Skeleton className="w-24 h-5 mt-2" />
              </div>
              <Skeleton className="w-full h-[300px] sm:h-80" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-14 h-5" />
                <Skeleton className="w-28 h-5" />
                <Skeleton className="w-40 h-5" />
              </div>
              <Skeleton className="w-full h-12 mt-2" />
            </div>
          </div> */}

          {/* //   )} */}
        </div>
      </div>
      <OrderPageFooter />
      <OrderSortingAndfiltering
        sorting={sorting}
        setSorting={setSorting}
        filter={filter}
        setFilter={setFilter}
      />
    </main>
  );
}
