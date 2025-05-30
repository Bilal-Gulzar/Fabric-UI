import OrderPageNavBar from '@/app/components/orderPageNavBar';
import React from 'react'
import SkeletonForOrderDetailpage from '../../SkeletonForOrderDetailpage';
import { CgCloseO, CgShoppingCart } from 'react-icons/cg';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import Svg from '@/app/components/Svg';
import OrderPageFooter from '@/app/components/orderPageFooter';

export default function OrderDetail() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-between relative min-h-screen">
      <div>
        <OrderPageNavBar />
        <div className="lg:max-w-[1000px] pb-28 xl:max-w-[1100px] mt-8 mx-3 sm:mx-5 lg:mx-auto ">
          {false ? (
            <SkeletonForOrderDetailpage />
          ) : (
            <>
              <div className="p-5 mb-3 lg:hidden">
                <div className="flex pb-7 gap-5 flexwrap justify-between items-center  border-b border-gray-300">
                  {!true && (
                    <div className="flex  text-red-500 cursor-pointer gap-3 items-center">
                      <div>
                        <h1 className="font-semibold">Show Order Summery</h1>
                      </div>
                      <div>
                        <IoChevronDown className="size-5" />
                      </div>
                    </div>
                  )}
                  {true && (
                    <div className="flex text-red-500 cursor-pointer gap-3 items-center">
                      <div>
                        <h1 className="font-semibold">Hide Order Summery</h1>
                      </div>
                      <div>
                        <IoChevronUp className="size-5" />
                      </div>
                    </div>
                  )}
                  <div className="font-semibold ">
                    <p>Rs.5000</p>
                  </div>
                </div>
                <div
                  className={`duration-300 transition-all ease-in-out  ${
                    true ? "max-h-[1000px] pb-8 " : "max-h-0 "
                  } overflow-hidden  border-b border-gray-300`}
                >
                  <div className="flex flex-col">
                    <div className="flex mt-8 items-center gap-3 text-sm">
                      <div className="min-w-[5.3rem] max-w-[5.3rem] relative h-20 bg-[#ededed] px-2.5 border-gray-300 rounded-md border">
                        <Image
                          src="/img4.jpg"
                          width={50}
                          height={50}
                          alt=""
                          className="w-auto mx-auto h-full"
                          priority
                        />
                        <div className="absolute flex justify-center items-center -top-2 -right-3 w-6 h-6 rounded-full bg-gray-600 text-white font-medium text-sm">
                          1
                        </div>
                      </div>
                      <div className="flex justify-between text-xs font-medium w-full items-center gap-3">
                        <p className="break-words">
                          DP-0366- 3 Piece Lawn Printed UnStitched Suit
                        </p>
                        <p>RS.5000</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5 mt-8">
                    <div className="flex justify-between text-xs font-medium ">
                      <div>Subtotal</div>
                      <p>Rs.5000</p>
                    </div>
                    <div className="flex justify-between text-xs font-medium ">
                      <div>Shipping</div>
                      <p>Rs.5000</p>
                    </div>
                    <div className="flex font-medium justify-between text-xl mt-4">
                      <div>Total</div>
                      <p>
                        <span className="text-gray-500 font-normal text-xs">
                          PKR
                        </span>{" "}
                        Rs.5000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-10 md:gap-0 md:justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Link href={"/orders"}>
                      <span>
                        <HiOutlineArrowLeft className="size-5" />
                      </span>
                    </Link>
                    <h1 className="font-semibold text-xl break-all">
                      Order: Order BSOS-42006
                    </h1>
                  </div>
                  <div className="ml-8 text-gray-500 font-medium text-sm tracking-wide">
                    confirmed May 18
                  </div>
                </div>
                <button className='"w-full font-medium text-red-700 text-xs tracking-wider hover:text-red-800 p-3  bg-white border-gray-200 rounded-md  flex justify-center items-center border-[1.5px] '>
                  Buy again
                </button>
              </div>
              <div className="grid  lg:grid-cols-[55%_auto] gap-5 w-full mt-8">
                <div className=" lg:order-1 order-2 flex flex-col gap-5">
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm  rounded-md px-3">
                      <div className="flex items-center gap-1.5">
                        <span>
                          {true ? (
                            <AiOutlineCheck className="size-4" />
                          ) : (
                            <CgCloseO className="size-4" />
                          )}
                        </span>
                        <p className="font-semibold">
                          {true ? "Confirmed" : "Canceled"}
                        </p>
                      </div>
                      <p className="ml-5  text-xs">Last updated May 18</p>
                    </div>
                    {true && (
                      <div className="text-sm px-3 mt-6 ">
                        We've received your order.
                      </div>
                    )}
                    {false && (
                      <div className="text-sm px-3 mt-6 ">
                        Your order has been canceled.
                      </div>
                    )}
                  </div>
                  <div className="bg-white self-start w-full p-5  rounded-lg">
                    <div>
                      <h2 className="font-semibold">Order details</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-7 md:gap-28 text-sm  mt-5">
                      <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-3">
                          <h2 className="text-gray-900 font-medium ">
                            Contact information
                          </h2>
                          <div>
                            <p>xyz@gmail.com</p>
                            <p className="mt-1">+92034567890</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h2 className="text-gray-900 font-medium ">
                            Shipping address
                          </h2>
                          <div className="flex flex-col gap-0.5">
                            <p>xyz</p>
                            <p>xyz street house random</p>
                            <p>Karachi 60000</p>
                            <p>Pakistan</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h2 className="text-gray-900 font-medium ">
                            Shipping method
                          </h2>
                          <p>via Whatsapp or Email</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                          <h2 className="text-gray-900 font-medium ">
                            Payment
                          </h2>
                          <div className="flex md:flex-row flex-col text-sm gap-1.5">
                            <Svg />
                            <div>
                              <p> Via Card - RS.5000</p>
                              <p className="text-gray-500 text-xs mt-1">
                                May 18, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h2 className="text-gray-900 font-medium ">
                            Billing address
                          </h2>
                          <div className="flex flex-col gap-0.5">
                            <p>xyz</p>
                            <p>xyz street house random</p>
                            <p>Karachi 60000</p>
                            <p>Pakistan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:order-2 order-1 gap-5">
                  <div className="bg-white p-5 rounded-lg ">
                    <div className="font-semibold mb-2">RS.5000 PKR</div>
                    {true ? (
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-gray-500">
                          {" "}
                          Payment Paid
                        </div>
                        <p className="text-sm text-gray-500">
                          Thank you for choosing Account SMM!. We’re pleased to
                          inform you that your payment has been successfully
                          processed. Your order is now complete, and your
                          selected account is reserved just for you. If you have
                          any questions or need assistance, our support team is
                          here to help. We appreciate your trust in us and are
                          committed to providing you with the best service.
                          Enjoy your new account, and thank you for being a
                          valued customer!
                        </p>
                      </div>
                    ) : (
                      <div className=" flex flex-col gap-2">
                        <div className="font-medium text-gray-500">
                          {" "}
                          Payment Not Paid
                        </div>
                        <p className="text-sm text-gray-500">
                          Thank you for choosing Account SMM! Your order is not
                          yet complete. Please complete your payment to proceed
                          with your purchase. If you have any questions or need
                          assistance, feel free to contact our support team.
                          Remember, your selected account will be reserved for a
                          limited time. Don’t miss out—finalize your payment
                          now!
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-white p-5 rounded-lg hidden lg:block">
                    <div>
                      <h1 className="font-semibold mb-5">Order Summery</h1>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <div className="min-w-[65px] max-w-[65px] relative h-16 bg-gray-100 px-2.5 border rounded-md">
                          <Image
                            src="/img4.jpg"
                            width={50}
                            height={50}
                            alt=""
                            priority
                            className="w-auto mx-auto h-full"
                          />
                          <div className="absolute flex justify-center items-center -top-2 -right-3 w-6 h-6 rounded-full bg-gray-600 text-white font-medium text-sm">
                            1
                          </div>
                        </div>
                        <div className="flex justify-between w-full items-center gap-3">
                          <p className="break-words">
                            DP-0366- 3 Piece Lawn Printed UnStitched Suit
                          </p>
                          <p>RS.5000</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 mt-7 mb-1">
                      <div className="flex justify-between text-xs font-medium">
                        <div className="">Subtotal</div>
                        <p>Rs.5000</p>
                      </div>
                      <div className="flex justify-between  text-xs font-medium">
                        <div className="">Shipping</div>
                        <p>Rs.5000</p>
                      </div>
                      <div className="flex font-semibold justify-between text-xl mt-4">
                        <div>Total</div>
                        <p>
                          <span className="text-gray-500 font-normal text-xs">
                            PKR
                          </span>{" "}
                          Rs.5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <OrderPageFooter />
    </div>
  );
}
