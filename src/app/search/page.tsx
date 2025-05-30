"use client"
import React, { useState } from 'react'
import SearchNotFound from '../components/searchNotFound'
import Aside from '../components/Aside';
import InfiniteScrollingtLoading from '../components/infiniteScrollingtLoading';
import Image from 'next/image';
import AsideBarForSearchPage from '../components/AsideBarForSearchPage';
import AsidBarToggle from '../components/asidBarToggle';

export default function Search() {
  const [toggle,setToggle] = useState<Boolean>(false)
  return (
    <div>
      <div className="lg:grid px-5 lg:px-12 lg:grid-cols-12 gap-6 mt-12">
        <AsideBarForSearchPage />
        <div className="col-span-9 text-xs pb-12 ">
          <div className=" ">
            <div className="text-xl  uppercase text-center font-bold">
              1717 results found for “new”
            </div>
            <div
              onClick={() => setToggle(true)}
              className="lg:hidden flex items-center mt-7  gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-funnel-icon lucide-funnel"
              >
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>
            </div>
            <div
              className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 sm:gap-7 md:gap-10`}
              style={{ width: "100%", height: "100%" }}
            >
              <div className="text-xs text-center relative space-y-3">
                <Image
                  src="/img4.jpg"
                  alt="bb"
                  width={500}
                  height={500}
                  style={{ display: "block", flexGrow: 0, flexShrink: 0 }}
                />
                <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
                  DP-0367- 3 Piece Lawn Printed UnStitched Suit
                </div>
                <div className="font-semibold text-sm ">RS.6,500</div>
                <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
                  New In
                </div>
              </div>
              <div className="text-xs text-center relative space-y-3">
                <Image
                  src="/img4.jpg"
                  alt=""
                  width={500}
                  height={500}
                  style={{ display: "block", flexGrow: 0, flexShrink: 0 }}
                />
                <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
                  DP-0367- 3 Piece Lawn Printed UnStitched Suit
                </div>
                <div className="font-semibold text-sm ">RS.6,500</div>
                <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
                  New In
                </div>
              </div>
              <div className="text-xs text-center relative space-y-3">
                <Image
                  src="/img4.jpg"
                  alt=""
                  width={500}
                  height={500}
                  style={{ display: "block", flexGrow: 0, flexShrink: 0 }}
                />
                <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
                  DP-0367- 3 Piece Lawn Printed UnStitched Suit
                </div>
                <div className="font-semibold text-sm ">RS.6,500</div>
                <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
                  New In
                </div>
              </div>
              <div className="text-xs text-center relative space-y-3">
                <Image
                  src="/img4.jpg"
                  alt=""
                  width={500}
                  height={500}
                  style={{ display: "block", flexGrow: 0, flexShrink: 0 }}
                />
                <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
                  DP-0367- 3 Piece Lawn Printed UnStitched Suit
                </div>
                <div className="font-semibold text-sm ">RS.6,500</div>
                <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
                  New In
                </div>
              </div>
            </div>
          </div>
          <InfiniteScrollingtLoading />
        </div>
      </div>
  <AsidBarToggle toggle={toggle} setToggle={setToggle}/>
      {/* <SearchNotFound/> */}
    </div>
  );
}
