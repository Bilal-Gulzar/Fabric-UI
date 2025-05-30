import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

export default function HomeImages({imageUrl}:{imageUrl:string[]}) {
    
    return (
      <section className="flex overflow-x-auto gap-8 scrollbar-hide mb-10" >
        {imageUrl.map((url, index) => (
          <div
            key={url}
            style={{
              // maxWidth: "50px",
              width: "100%",
              height: "100%",
              display:"flex",
           
            }}
            className="relative shrink-0 grow-0 lg:shrink lg:grow"
          >
            <Image src={url} className='' width={1800} height={1800} alt=""/>
            <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center w-full h-full">
              <div className="text-white font-bold text-2xl uppercase ">
                {index == 0 ? "sale!" : "luxury pret"}
              </div>
              <div>
                <Button className="font-semibold uppercase !text-xs px-5 sm:!px-8">
                  view collection
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
}