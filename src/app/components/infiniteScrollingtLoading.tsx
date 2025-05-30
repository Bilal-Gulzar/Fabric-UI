import React from 'react'
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';

export default function InfiniteScrollingtLoading() {
  return (
    <div className="flex my-20  flex-col items-center ">
      <div className=" max-w-md min-w-1/4 flex flex-col items-center space-y-5 ">
        <div className="text-xs text-gray-600">Showing 1-60 of 603 total</div>
        <div className="w-full -mt-2">
          <Progress value={33} />
        </div>

        <Button
          variant="ghost"
          className="w-full hover:bg-black duration-300  border border-gray-300 !py-4 "
        >
          <div className="lds-dual-ring"></div>
        </Button>
      </div>
    </div>
  );
}
