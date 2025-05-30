"use client"
import React, { useEffect, useRef, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import ChevronUP from './chevronUP';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

export default function AsidBarToggle({toggle,setToggle}:{
    toggle:Boolean,setToggle:React.Dispatch<React.SetStateAction<Boolean>>
}) {
     const [caUp,setCaUp] = useState(true)
        const [avaUp,setAvaUp] = useState(true)
        const [priceUp,setPriceUp] = useState(true)
        const [sizeUp,setSizeUp] = useState(true)
        const [fabricUp,setfabricUp] = useState(true)
        const [typeUp,setTypeUp] = useState(true)  
    const modalRef = useRef<HTMLDivElement | null>(null);
     useEffect(() => {
        if (!modalRef.current) return;
    
        if (toggle) {
          disableBodyScroll(modalRef.current);
        } else {
          enableBodyScroll(modalRef.current);
        }
    
        return () => {
          if (modalRef.current) enableBodyScroll(modalRef.current);
        };
      }, [toggle]);


  return (
    <div
      className={`${
        toggle ? "fixed bg-black/80 inset-0 min-h-screen z-50 lg:hidden" : ""
      }`}
    >
      <aside
        className={`min-h-screen fixed overflow-y-auto pb-20 scrollbar-hide bg-white  w-[270px] xs:w-[300px] text-xs px-5 lg:hidden transition-all duration-500 overflow-x-hidden top-0 left-0 z-50
         ${toggle ? "" : "-translate-x-full"}`}
        ref={modalRef}
      >
        <div className=" font-bold text-sm my-8 ">Sidebar</div>

        <div className="pb-4">
          <div
            onClick={() => setCaUp(!caUp)}
            className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
          >
            <h3 className="  uppercase">Categories</h3>
            <span className={`${caUp ? "" : "rotate-180"} duration-500`}>
              <ChevronUP />
            </span>
          </div>
          <nav
            className={`flex flex-col gap-3 overflow-hidden transition-all ease-in-out  duration-500  *:hover:translate-x-4 *:duration-300 ${
              caUp ? "max-h-[400px] mt-5 mb-8 " : "max-h-0 "
            } `}
          >
            <Link href="#">New In</Link>
            <Link href="#">Unstitched Fabric</Link>
            <Link href="#"> &gt; Ready to wear</Link>
            <Link href="#">luxury Pret</Link>
            <Link href="#"> Winter Collection</Link>
          </nav>
        </div>
        <div
          onClick={() => setAvaUp(!avaUp)}
          className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
        >
          <h3 className="uppercase">Availability</h3>
          <span className={`${avaUp ? "rotate-0" : "rotate-180"} `}>
            <ChevronUP />
          </span>
        </div>
        <div
          className={`mt-5 space-y-2.5 overflow-hidden  ${
            avaUp ? "max-h-[400px] mt-5 mb-8 " : "max-h-0"
          } overflow-hidden transition-all ease-in-out  duration-500`}
        >
          <div className=" flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label>In Stock (279)</label>
          </div>
          <div className=" flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label>Out Of Stock (1417)</label>
          </div>
        </div>
        <div
          onClick={() => setPriceUp(!priceUp)}
          className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
        >
          <h3 className="uppercase">Price</h3>
          <span
            className={`${priceUp ? "rotate-0" : "rotate-180"} duration-500`}
          >
            <ChevronUP />
          </span>
        </div>
        <div
          className={`mt-6 space-y-4
         ${
           priceUp ? "max-h-[400px] pt-4 mb-8 " : "max-h-0"
         } overflow-hidden transition-all ease-in-out  duration-500`}
        >
          <Slider defaultValue={[0, 100]} max={100} step={1} />
          <div className="flex gap-4 items-center">
            <div className="relative font-medium">
              <Input
                className="text-end pl-6 no-spinner"
                type="number"
                placeholder="0"
              />
              <span className="absolute top-3.5 left-2">RS</span>
            </div>
            <span> to</span>
            <div className="relative font-medium">
              <Input
                className="text-end pl-6 no-spinner"
                type="number"
                placeholder="5699"
              />
              <span className="absolute top-3.5 left-2">RS</span>
            </div>
          </div>
          <Button className="w-full">APPLY</Button>
        </div>
        <div
          onClick={() => setSizeUp(!sizeUp)}
          className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
        >
          <h3 className=" uppercase">Size</h3>
          <span
            className={`${sizeUp ? "rotate-0" : "rotate-180"} duration-500`}
          >
            <ChevronUP />
          </span>
        </div>
        <div
          className={`flex flex-wrap gap-2 mt-5 
         ${
           sizeUp ? "max-h-[400px] mt-5 mb-8 " : "max-h-0"
         } overflow-hidden transition-all ease-in-out  duration-500`}
        >
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Extra Small
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Small
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Medium
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Medium
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Large
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Extra Large
          </button>
          <button className="text-xs px-2 relative  py-3 border  border-gray-300">
            Extra Large
          </button>
        </div>
        <div
          onClick={() => setfabricUp(!fabricUp)}
          className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
        >
          <h3 className="uppercase">Fabric</h3>
          <span
            className={`${fabricUp ? "rotate-0" : "rotate-180"} duration-500`}
          >
            <ChevronUP />
          </span>
        </div>
        <div
          className={`mt-5 flex items-center gap-1
         ${
           fabricUp ? "max-h-[400px] mt-5 mb-8 " : "max-h-0"
         } overflow-hidden transition-all ease-in-out  duration-500
        `}
        >
          <input type="checkbox" className="accent-black" />
          <label>Organza (3)</label>
        </div>
        <div
          onClick={() => setTypeUp(!typeUp)}
          className="flex mb-6 cursor-pointer border-b font-bold pb-4 border-black items-center gap-3 justify-between"
        >
          <h3 className="uppercase">Type</h3>
          <span
            className={`${typeUp ? "rotate-0" : "rotate-180"} duration-500`}
          >
            <ChevronUP />
          </span>
        </div>
        <div
          className={`mt-5 flex items-center gap-1
         ${
           typeUp ? "max-h-[400px] mt-5 mb-8 " : "max-h-0"
         } overflow-hidden transition-all ease-in-out  duration-500`}
        >
          <input type="checkbox" className="accent-black" />
          <label>3 piece (14)</label>
        </div>
      </aside>

      <div
        className={`top-0  cursor-pointer fixed   bg-[#202020]  text-white ${
          toggle ? "left-[270px] xs:left-[300px] " : "-translate-x-full -left-[300px]"
        } transition-all duration-500  `}
      >
        <IoCloseOutline
          onClick={() => setToggle(false)}
          className="size-7 m-1.5"
        />
      </div>
    </div>
  );
}
