"use client";

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ArrowTrendingUpIcon, PlusIcon
} from '@heroicons/react/24/outline';


export default function PostFeed() {
  const pathname = usePathname(); // Get the current route

  // Set the title based on the current pathname
  const title = pathname.includes("home") ? "Home" : "Posts";
  // Conditionally apply padding based on whether the pathname includes 'home'
  const paddingClass = pathname.includes('home') ? 'px-2' : 'py-5';

  return (
    <div className="relative">
      <div className="bg-white px-4 rounded-lg mb-4">

        {/* Title Header */}
        <div className={`${paddingClass} flex justify-between`}>
          <div className="flex">
            <span className="font-semibold text-2xl text-red-500">{title}</span>
          </div>

          <div className="flex p-1 rounded-md border border-red-500 justify-center text-red-500">
            <div className="flex justify-center">
              <button className="flex font-normal text-sm text-nowrap items-center">
                < PlusIcon className="mx-1 w-5" />
                Add Post</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4">
          {/* Post Left Section */}
          <div className="w-full lg:w-2/5 h-56 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              style={{ width: 200, height: 'auto' }}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <h3 className="font-bold text-lg">Iphone 16 Pro Max</h3>
            <p className="font-medium">Status: <span className={clsx(
              {
                'text-red-500': 'pending' === 'pending',
                'text-green-500': 'Found' === 'Found',
              }
            )}>
              Found </span>
            </p>
            <p className="mt-2 font-medium">Building: LRC</p>
            <p className="mt-2">Found at the second floor game zone area first table.</p>

            {/* Tags */}
            <div className="flex flex-wrap space-x-2 mt-4 font-medium gap-y-2">
              <span className="px-3 py-1 outline outline-2 outline-red-500 rounded-full text-sm">Red</span>
              <span className="px-3 py-1 outline outline-2 outline-red-500 rounded-full text-sm">BTS Photocard</span>
              <span className="px-3 py-1 outline outline-2 outline-red-500 rounded-full text-sm">Panda Sticker</span>
            </div>
          </div>
        </div>

        {/* Reactions */}
        <div className="mt-4 flex flex-col lg:flex-row justify-between items-start lg:items-center font-light">
          <div className="text-gray-500 flex items-center mb-2 lg:mb-0">
            <span className="mr-2">100 views</span>
          </div>
          <div className="text-gray-500 flex items-center">
            <ArrowTrendingUpIcon className='h-6 w-6 mr-2' /> 100
          </div>
        </div>
      </div>
    </div>
  );
}