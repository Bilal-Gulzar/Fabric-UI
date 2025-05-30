import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <div className="px-12 py-8">
      <section className="flex flex-col gap-5">
        <div className="text-xs  space-x-2 text-gray-800">
          <Link href={"/"}>Home</Link>
          <span className="font-semibold">&gt;</span>

          <span> Create Account </span>
        </div>

        <h1 className="font-semibold text-xl uppercase">Create Account</h1>

        <p className="text-xs text-gray-800">
          Please register below to create an account
        </p>
      </section>
      <section className="sm:w-md w-full">
        <div className="flex flex-col gap-3 mt-6 text-xs">
          <label htmlFor="fname">First Name</label>
          <Input id="fname" />
        </div>
        <div className="flex flex-col gap-3 mt-6 text-xs">
          <label htmlFor="lname">Last Name</label>
          <Input id="lname" />
        </div>
        <div className="flex flex-col gap-3 mt-6 text-xs">
          <label htmlFor="email">
            Your Email Address <span className="text-red-500">*</span>
          </label>
          <Input id="email" />
        </div>
        <div className="flex flex-col gap-3 mt-6 text-xs">
          <label htmlFor="password">
            Your Password <span className="text-red-500">*</span>
          </label>
          <Input id="password" />
        </div>
        <div className="mt-5">
          <Button className="sm:!px-12 px-4">CREATE AN ACCOUNT</Button>
        </div>
      </section>
    </div>
  );
}
