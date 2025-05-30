import Image from 'next/image';
import React from 'react'

export default function TopTrending() {
  const numbers = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div
      style={{
        maxWidth: "1800px",
        width: "100%",
        height: "100%",
        // aspectRatio: "6/",
        margin: "0 auto",
        overflowX: "auto",
      }}
      className="scrollbar-hide "
    >
      <div style={{ width: "100%", height: "100%" }} className="lg:hidden">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "10px",
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          {numbers.map((x) => (
            <div key={x} className="img text-xs text-center relative space-y-3">
              <Image
                src="/img5.webp"
                alt=""
                width={600}
                height={600}
                // style={{ translate: "100%" }}
              />
              <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
                DP-0367- 3 Piece Lawn Printed UnStitched Suit
              </div>
              <div className="font-semibold justify-center items-center flex gap-2 text-sm ">
                <span className="line-through">RS.6,500</span>
                <span className="text-[#D12442]">RS.6,500</span>
              </div>
              <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
                New In
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ width: "100%", height: "100%" }}
        className="lg:grid grid-cols-4 gap-5 hidden"
      >
        {numbers.map((x) => (
          <div key={x} className="text-xs text-center relative space-y-3">
            <Image
              src="/img5.webp"
              alt=""
              width={600}
              height={600}
              // style={{ translate: "100%" }}
            />
            <div className="hover:underline underline-offset-4 text-gray-700 font-medium">
              DP-0367- 3 Piece Lawn Printed UnStitched Suit
            </div>
            <div className="font-semibold justify-center items-center flex gap-2 text-sm ">
              <span className="line-through">RS.6,500</span>
              <span className="text-[#D12442]">RS.6,500</span>
            </div>
            <div className="absolute top-1 sm:top-3 left-0 font-medium  text-[9px] sm:text-xs text-white bg-[#ffbb49]  sm:py-1 sm:px-2 px-1 py-0.5">
              New In
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
