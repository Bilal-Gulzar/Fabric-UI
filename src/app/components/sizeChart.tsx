"use client"
import { useEffect, useRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
export default function SizeGuide({
  show,
  hide,
}: {
  show: boolean;
  hide: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const modalRef = useRef<HTMLDivElement| null>(null);
  
    useEffect(() => {
       if (!modalRef.current) return;
  
       if (show) {
         disableBodyScroll(modalRef.current);
       } else {
         enableBodyScroll(modalRef.current);
       }
  
       return () => {
         if (modalRef.current) enableBodyScroll(modalRef.current);
       };
     }, [show]);
  
  return (
    <section
      className={`fixed backdrop-blur-sm top-0 right-0 left-0 bg-black/30 z-50  flex justify-center items-center min-w-[100vw] min-h-[100vh] ${
        show ? "" : "translate-y-full"
      }`}
    >
      <div
        className={`w-[92%] sm:w-[650px]  p-5  shadow-md relative bg-white ${
          show ? "translate-y-0" : "translate-y-full"
        } duration-300 transition-all ease-in-out`}
        ref={modalRef}
      >
        <img src="/sizeChart.webp" alt="size chart" />
        <div
          onClick={() => {
            hide(false);
          }}
          className="-top-2.5 -right-2.5 cursor-pointer absolute bg-black text-white"
        >
          <IoCloseOutline className="size-7 m-1.5" />
        </div>
      </div>
    </section>
  );
}
