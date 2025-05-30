import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon, X } from 'lucide-react';
import React from 'react'

export default function SearchNotFound() {
  return (
    <section className="w-full flex  text-center flex-col items-center min-h-[50vh] px-4 pt-12 gap-6">
      <div className="font-bold text-xl uppercase">0 results found for “eerretet”.</div>
      <p className="text-xs text-gray-500 mt-3">
        No results found for “eereetet”. Check the spelling or use a different
        word or phrase.
      </p>
      <div className="flex w-full max-w-3xl items-center space-x-2 ">
        <div className="w-full relative">
          <Input type="text" placeholder="Search" className="!text-xs pe-10" />
          <span className="absolute top-4 right-3 text-[#375c9a]">
            <X size={15} />
          </span>
        </div>
        <Button
          type="submit"
          className="hover:bg-transparent hover:text-black hover:border border-gray-400 duration-300 !px-6"
        >
          <SearchIcon size={25} />
        </Button>
      </div>
    </section>
  );
}
