"use client";
import { AlignJustify, SearchIcon, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { BsCart3 } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MobileNav from "./mobileNav";
import MenuBar from "./menuBar";
import ShoppingCart from "./shoppingCart";
import { useParams, usePathname } from "next/navigation";
import useAppContext from "@/context/ContextAPI";

export default function Header() {
  const {setSearch ,setCart,setMenuBar,setLogin,} = useAppContext();
  const { id } = useParams();
  const path = usePathname();
  const noNavbarRoutes = ["/logout", "/orders", "/profile", `/orders/${id}`];

  return (
    <header
      className={`shadow-sm pb-1 lg:pb-0  ${
        noNavbarRoutes.includes(path) ? "hidden" : ""
      }`}
    >
      <div className="bg-black font-medium text-white text-sm p-2.5">
        <Marquee speed={50} gradient={false}>
          Cash on Delivery limit is PKR 20,000 Orders above PKR 20,000 have to
          pay 50% advance Cash Deposit via Bank Transfer. | No Exchange or
          Return on Sale Items.
        </Marquee>
      </div>
      <div className="flex justify-between gap-2 items-center  mx-2 lg:mx-10 ">
        <div className="flex lg:gap-4 gap-9 items-center">
          <div onClick={()=>setMenuBar(true)} className="lg:hidden">
            <AlignJustify size={26} />
          </div>
          <Link href={'/'} className="size-10 my-2 lg:size-auto">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="binSaeedfabric"
            />
          </Link>
        </div>
        <nav className="text-xs font-bold lg:flex gap-6  hidden">
          <Link href="/collection/new-in">NEW IN</Link>
          <Link href="/collection/unstitiched-fabrics">UNSTITCHED FABRIC</Link>
          <Link href="/collection/ready-to-wear">READY TO WEAR</Link>
          <Link href="/collection/luxury-pret">LUXURY PRET</Link>
          <Link href="/collection/winter-collection">WINTER COLLECTION</Link>
        </nav>
        <div className="flex gap-8 lg:gap-4 items-center">
          <div onClick={()=>setLogin(true)}  className="text-xs lg:block hidden">
            <button>Sign in</button>
          </div>
          <div onClick={()=>setSearch(true)}>
            <SearchIcon size={23} className="hover:scale-125 duration-300" />
          </div>
          <div onClick={()=>setCart(true)} className="lg:block hidden">
            <BsCart3 size={23} className="hover:scale-125 duration-300" />
          </div>
          <div className="lg:hidden">
            <UserRound size={26} />
          </div>
          <div className="size-7 lg:flex hidden justify-center items-center text-xs rounded-full  bg-pink-100">
            0
          </div>
          <div onClick={()=>setCart(true)} className="relative mr-3 lg:hidden">
            <LiaShoppingBagSolid size={27} />
            <span className="size-5   -top-1 left-4 flex absolute justify-center items-center text-[9px] rounded-full  bg-pink-100">
              0
            </span>
          </div>
        </div>
      </div>
      <MobileNav />
      <MenuBar />
      <ShoppingCart />
    </header>
  );
}
