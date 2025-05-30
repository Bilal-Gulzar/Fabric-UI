"use client"
import Aside from '@/app/components/Aside';
import Link from 'next/link'
import React, { useState } from 'react'
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GridLayout2 from '@/app/components/GridLayout2';
import InfiniteScrollingtLoading from '@/app/components/infiniteScrollingtLoading';
import Filter from '@/app/components/Filter';
import Sort from '@/app/components/Sort';

type GridSize = 1 |2 | 3 | 4;


export default function CollectionPage() {
const [gridCols, setGridCols] = useState<GridSize>(2);
  const [isOpen,setIsOpen] = useState<Boolean>(false)
  const [sorted,setSorted] = useState<Boolean>(false)
  const getRefreshed = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: `calc(100vh - 200px)`,
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      <div>
        <div className="text-xs bg-gradient-to-t from-pink500 to-[#fde6e6] lg:bg-white w-full flex justify-center py-10  space-x-2 text-gray-800">
          <Link href={"/"}>Home</Link>
          <span className="font-semibold">&gt;</span>

          <span>Ready To Wear</span>
        </div>
        <div className="lg:grid px-5 lg:px-12 lg:grid-cols-12 gap-6 mt-12">
          <Aside />
          <div className="col-span-9 text-xs ">
            <div className="flex border-t py-12 border-gray-300 items-center justify-between">
              <div
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex items-center gap-1"
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
                Fliter
              </div>

              <div className="flex items-center gap-2">
                <div className="lg:block hidden">VIEW AS </div>
                <div
                  className="border border-gray-400 p-1 "
                  onClick={() => setGridCols(1)}
                >
                  <TfiLayoutColumn3Alt
                    size={18}
                    className={`${
                      gridCols == 1 ? " border-black" : "text-gray-400"
                    } rotate-90`}
                  />
                </div>
                <div
                  onClick={() => setGridCols(2)}
                  className={`border ${
                    gridCols == 2 ? "text-black border-black" : "text-gray-400"
                  } border-gray-400  p-1 `}
                >
                  <TfiLayoutColumn2Alt size={18} />
                </div>
                <div
                  onClick={() => setGridCols(3)}
                  className={`border lg:block hidden border-gray-400 p-1 ${
                    gridCols == 3 ? "text-black border-black" : "text-gray-400"
                  } `}
                >
                  <TfiLayoutColumn3Alt size={18} />
                </div>
                <div
                  onClick={() => setGridCols(4)}
                  className={`border xl:block hidden border-gray-400 p-1 
                  ${
                    gridCols == 4 ? "text-black border-black" : "text-gray-400"
                  }  `}
                >
                  <TfiLayoutColumn4Alt size={18} />
                </div>
              </div>
              <div className="lg:flex hidden items-center gap-1 lg:gap-2">
                <div className="">SORT BY </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Date, new to old" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="Best-selling">Best Selling</SelectItem>
                      <SelectItem value="A-Z">Alphabetically,A-Z </SelectItem>
                      <SelectItem value="Z-A">Alphabetically,Z-A </SelectItem>
                      <SelectItem value="PriceL">Price,low to high</SelectItem>
                      <SelectItem value="PriceH">Price,high to low</SelectItem>
                      <SelectItem value="dateO">Date,old to new</SelectItem>
                      <SelectItem value="dateN">Date, new to old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div
                onClick={() => setSorted(true)}
                className="lg:hidden flex items-center gap-1"
              >
                Sort
                <IoChevronDownOutline />
              </div>
            </div>
            <div>
              <GridLayout2 gridCols={gridCols} />
            </div>
            <InfiniteScrollingtLoading />
          </div>
        </div>

        {/* <div className=" flex flex-col items-center gap-5 py-14">
          <div className="text-xs text-gray-500">Showing 0 of 0 products</div>
          <div className="font-semibold text-sm space-y-2 ">
            <div>NO PRODUCT FOUND</div>
            <div>
              {" "}
              USE FEWER FILTER OR{" "}
              <span
                onClick={getRefreshed}
                className="underline cursor-pointer underline-offset-2"
              >
                {" "}
                CLEAR ALL
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sort sorted={sorted} setSorted={setSorted} />
    </div>
  );


}
