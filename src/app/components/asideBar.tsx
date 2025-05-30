"use client"
import React, { useEffect, useRef} from 'react'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from 'next/link';

export default function AsideBar({
  showdiv,
  setShowdiv,
}: {
  showdiv: Boolean;
  setShowdiv: React.Dispatch<React.SetStateAction<Boolean>>
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (showdiv) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }

    return () => {
      if (modalRef.current) enableBodyScroll(modalRef.current);
    };
  }, [showdiv]);
  return (
    <aside>
      <section
        className={`${
          showdiv ? "md:block hidden" : "hidden"
        } absolute px-6 w-[300px] bg-white z-20 shadow-bottom  rounded-md top-16 shadow-lg  right-0 cursor-default`}
        ref={modalRef}
      >
        <div className="flex gap-3 items-center text-sm text-gray-500 border-b pt-3 border-gray-300  pb-4">
          <div className="">
            {false ? (
              <div className="w-8 h-8  text-black rounded-full bg-[#f5f5f5] flex justify-center items-center text-sm">
                Ch
              </div>
            ) : (
              <svg
                height="32"
                width="32"
                viewBox="0 0 19.05 19.05"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g style={{ opacity: 1 }}>
                  <g>
                    <circle
                      cx="9.6948"
                      cy="8.6535"
                      r="2.8189"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                    <path
                      d="M4.6323,15.2284 A5.1757,5.1757 0 0 1 9.5562,11.6475 A5.1757,5.1757 0 0 1 14.4801,15.2281"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                    <circle
                      cx="9.5562"
                      cy="9.3467"
                      r="7.6711"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                  </g>
                </g>
              </svg>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm text-black break-all pr-12">bilal</div>
            <div className="text-xs  break-all pr-12">Xyz@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col text-sm text gap-3 py-5  ">
          <Link href="/profile">
            <p
              onClick={() => setShowdiv(false)}
              className="hover:bg-[#f5f5f5] p-2.5 "
            >
              Profile
            </p>
          </Link>
          <Link href="/logout">
            <p
              onClick={() => setShowdiv(false)}
              className="hover:bg-[#f5f5f5] p-2.5"
            >
              Settings
            </p>
          </Link>
          <p
            onClick={() => {
              setShowdiv(false);
            }}
            className="hover:bg-[#f5f5f5] cursor-pointer p-2.5"
          >
            Log out
          </p>
        </div>
      </section>

      <section
        className={`min-h-screen transition-all duration-500 overflow-x-hidden border-t border-gray-500 bg-white fixed px-3 left-0 top-[90px] bottom-0 z-30  w-[80vw] md:hidden ${
          showdiv ? "" : "-translate-x-full"
        }  `}
        ref={modalRef}
      >
        <div className="flex gap-3 items-center text-sm text-gray-500 border-b mb-3 py-6 border-gray-300  ">
          <div className="">
            {/* {letter ? ( */}
            <div className="w-8 h-8  text-black rounded-full bg-[#f5f5f5] flex justify-center items-center text-sm">
              {/* {letter} */}
              CH
            </div>
            {/* ) : ( */}
            {/* <svg
                height="32"
                width="32"
                viewBox="0 0 19.05 19.05"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g style={{ opacity: 1 }}>
                  <g>
                    <circle
                      cx="9.6948"
                      cy="8.6535"
                      r="2.8189"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                    <path
                      d="M4.6323,15.2284 A5.1757,5.1757 0 0 1 9.5562,11.6475 A5.1757,5.1757 0 0 1 14.4801,15.2281"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                    <circle
                      cx="9.5562"
                      cy="9.3467"
                      r="7.6711"
                      style={{
                        fill: "none",
                        stroke: "#707070", // Updated color
                        strokeWidth: 0.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    />
                  </g>
                </g>
              </svg> */}
            {/* )} */}
          </div>

          <div className="break-all flex flex-col gap-0.5 text-sm pr-3 text-balance">
            <div className="text-sm text-black break-all pr-3">CH</div>
            <p className="text-xs">xyz@gmail.com</p>
          </div>
        </div>
        <Link href="/">
          <div className="flex items-center pl-3 text-sm   py-4 ">
            Shop
          </div>
        </Link>
        <Link href="/orders">
          <div className="flex items-center pl-3 text-sm   py-4 ">
            Orders
          </div>
        </Link>

        <div className="flex  absolute bottom-24 border-t w-full border-r-gray-300 flex-col text-sm text gap-3 py-5   ">
          <Link href="/profile">
            <p className="hover:bg-[#f5f5f5] p-2.5">Profile</p>
          </Link>
          <Link href="/logout">
            <p className="hover:bg-[#f5f5f5] p-2.5">Settings</p>
          </Link>
          <p
            onClick={() => {
              setShowdiv(false);
            }}
            className="hover:bg-[#f5f5f5] p-2.5"
          >
            Log out
          </p>
        </div>
      </section>
    </aside>
  );
}
