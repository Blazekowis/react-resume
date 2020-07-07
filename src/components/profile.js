import React from 'react';
import '../tailwind.output.css';

export default function Profile() {
    return (
     
 <div className="w-3/4 text-gray-700 rounded rounded-t-lg shadow px-6 py-4 m-4">
    <div className="px-4 py-5 border-b sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
			Work Experience
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
			As Full Stack Web Developer with PHP and JavaScript 
        </p>
    </div>
    <div>
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
            Looking for
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                ReactJS Developer
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
            Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            7 LPA
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            About
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Four years experience in database driven web applications development using PHP, JavaScript and MySQL. Sound knowledge in CodeIgniter and Laravel frameworks. I have developed a GUI for ABAP Database Query Generation using AngularJS, PHP Active Record and MySQL. Experience in Digital Ocean, Amazon LightSail, CI/CD with Forge and Github. Ready to learn and execute projects on other programming languages/frameworks. 
            </dd>
        </div>
        </dl>
    </div>
    </div>
    )
}