import React from 'react';
import './App.css';

function cardv1() {
  return (

        <div className="bg-grey rounded-lg p-2">
            <img title="test" className="h-20 w-20 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={'./nitz.jpg'} /> 
                <div className="text-center md:text-left">
                    <h2 className="text-lg">Nitish Medhi</h2>
                    <div className="text-purple-500">Sr. DevOps Engineer</div>
                    <div className="text-gray-600">nitz2657info@gmail.com</div>
                    <div className="text-gray-600">(+91) 12345-89765</div>
                </div>
        </div>
             

  )
}
