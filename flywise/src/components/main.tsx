import { useState } from 'react';
import NavBar from './navbar.tsx';
import React from 'react';


export default function Example() {
  const [flightNumber,setFlightNumber] =useState('');
  const [startDate,setStartDate] =useState('');
  const [endDate,setEndDate] =useState('');

  return (
    <>
    <NavBar/>
      <div className="min-h-full">
        <hr></hr>
        <main>
          <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <br></br><br></br><br></br><br></br>
              <h1 className="text-7xl font-bold tracking-tight text-gray-900">Airport Ammenities</h1>
              <h1 className="text-7xl font-bold tracking-tight text-gray-900">Information</h1>
              <br></br>
              <h1 className="text-xl tracking-tight text-gray-500">Get the best ammenities on 20,000+</h1>
              <h1 className="text-xl tracking-tight text-gray-500">airports worldwide</h1>
              <br></br>
              <div className="mb-6">
                <input type="text" onChange={((e) => {setFlightNumber(e.target.value); console.log(flightNumber)})}  placeholder='Insert Flight Number' id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input name="start" onChange={(e) => {setStartDate(e.target.value); console.log(startDate)}} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"></input>
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input name="end" onChange={(e) => {setEndDate(e.target.value); console.log(endDate)}} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"></input>
                </div>
              </div>

            </div>
            <div>
              <br></br><br></br><br></br><br></br>
              <img src="cartoon-style-prop-aircraft-flying-in-the-clouds-clip-art.jpg" alt='logo' className=""></img>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

