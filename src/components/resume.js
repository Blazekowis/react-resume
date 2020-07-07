import React from 'react';
import '../tailwind.output.css';

export default function Resume() {
    return (
     
 <div className="w-3/4 text-gray-700 rounded rounded-t-lg shadow px-6 py-4 m-4">
    <div className="px-4 py-5 border-b sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
			Tools and Technologies
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
			As Web Developer 
        </p>
    </div>
    <div>
        <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Tools
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            XAMPP, Laragon, VS Code, NodeJS, MySQL
            </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Frameworks
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            CodeIgniter, AngularJS, Laravel, ReactJS, Bootstrap, Tailwindcss
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            CI/CD
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Laravel Forge, Git, Github, PurgeCSS, PostCSS, WebPack, Yarn
            </dd>
        </div>
       
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
            Profiles
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Github: <a href="https://github.com/ProbhatDeuri" target="_blank">Click</a><br/>
            Linkedin: <a href="https://www.linkedin.com/in/probhat-deuri-609223110" target="_blank">Click</a>
            </dd>
        </div>
        </dl>
    </div>
    </div>
    )
}