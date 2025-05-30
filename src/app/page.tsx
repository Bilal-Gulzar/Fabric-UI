import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import HomeImages from "./components/homeImages";
import ProductCart from "./components/productCart";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import TopTrending from "./components/topTrending";
import FeedBackSection from "./components/feedBackSection";

export default function Home() {

  const IMAGES = [
    "homeImg1.webp",
    "homeImg2.webp",
    "homeImg3.webp",
    "homeImg4.webp",
  ]; 

  const IMAGESForMobile = [
    "hm1.jpg",
    "hm2.jpg",
    "hm3.jpg",
    "hm4.jpg",
    
  ]; 
  const IMAGES2 = [
    "/homeImg5.webp",
    "/homeImg6.webp",
   
    
  ]; 

  

  return (
    <div className="overflow-x-hidden ">
      <div
        style={{
          maxWidth: "1900px",
          width: "100%",
          aspectRatio: "10/4",
          margin: "0 auto",
        }}
        className="md:block hidden"
      >
        <ImageSlider imgUrl={IMAGES} />
      </div>
      <div
        style={{
          minHeight: `calc(100vh - 200px)`,
          maxWidth: "1500px",
          width: "100%",
          aspectRatio: "10/4",
          margin: "0 auto",
        }}
        className="md:hidden"
      >
        <ImageSlider imgUrl={IMAGESForMobile} />
      </div>
      <div className="mx-3 md:mx-10">
        <div className="my-6  overflow-hidden">
          <HomeImages imageUrl={IMAGES2} />
        </div>
        <div>
          <section>
            <h2 className="uppercase text-xl font-semibold border-t border-black text-center pt-6 pb-3">
              latest in
            </h2>
            <div className="flex overflow-x-auto scrollbar-hide  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-8">
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </div>
            <div className="flex sm:hidden items-center justify-between mt-6">
              <div className="text-xs ">1 / 4</div>
              <div className="flex items-center gap-2">
                <span className="size-7 flex justify-center items-center rounded-full border border-black">
                  <ChevronLeft size={15} />
                </span>
                <span className="size-7 flex justify-center items-center rounded-full border border-black">
                  <ChevronRight size={15} />
                </span>
              </div>
            </div>
          </section>
          <section>
            <div className="flex gap-4 items-center">
              <div className="h-[2px] basis-[30%] bg-black"></div>
              <h2 className="uppercase  basis-[40%] bg-white z-10 text-xl font-semibold  text-center pt-6 pb-3">
                top&nbsp;trending
              </h2>
              <div className="h-[2px] basis-[30%]  bg-black"></div>
            </div>
            <div className="flex justify-center  my-4">
              <Link href="#" className="text-xs underline underline-offset-4 ">
                View All
              </Link>
            </div>
            <div className="over">
              <TopTrending/>
            </div>
          </section>
        </div>
      </div>
          <FeedBackSection/>
    </div>
  );
}
