"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect, useRef, useState } from "react";
import SearchBarForMobile from "./searchBarForMobile";
import useAppContext from "@/context/ContextAPI";

export default function Search() {
  const { search, setSearch } = useAppContext();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (search) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }

    return () => {
      if (modalRef.current) enableBodyScroll(modalRef.current);
    };
  }, [search]);
  return (
    <aside
      className={`${
        search ? "fixed bg-black/80 inset-0  z-50 min-h-screen" : ""
      }`}
    >
      <section
        className={`bg-white h-32 px-12 py-7  ${
          search ? "" : "-translate-y-full"
        } transition-all duration-300 overflow-hidden fixed top-0 w-full lg:block hidden`}
        ref={modalRef}
      >
        <div
          onClick={() => setSearch(false)}
          className="flex flex-col items-end pe-3 mb-2 w-full"
        >
          <X />
        </div>
        <div className="relative">
          <Input
            placeholder="Search Products..."
            className="text-xs border-gray-100 shadow-xs focus:border-0"
          />
          <div className="absolute right-3 top-3 ">
            <SearchIcon size={20} />
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <SearchBarForMobile isOpen={search} close={setSearch} />
      </section>
    </aside>
  );
}
