import React from 'react';
import '../index.css';
import '../tailwind.output.css';

import Card from './cardv2';

export default function About() {
    return (
     
 <div className="w-3/4 text-gray-700 rounded rounded-t-lg shadow px-6 py-4 m-4">
    <div className="px-4 py-5 border-b sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
			About Myself
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
			Personal details 
        </p>
    </div>
    
        <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Full name
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Probhat Deuri
            </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Contact No. 
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            (+91)-8721913513
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Email address
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            probhat321@gmail.com
            </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Address
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Guwahati, Assam.
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Hobby
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Reading and Writing (specially satirical, subtle and sarcastic deep criticisms) </dd>
        </div>
        </dl>
    </div>
    )
}