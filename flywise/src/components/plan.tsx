import React from "react";
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import hotel_travel_data from './output.json'

const unique_preferences = ['Shopping', 'Sea', 'Statue', 'Food', 'Art', 'Beach', 'Fashion', 'Nature', 'Mountain']
const unique_ratings = ['TwoStar', 'FiveStar', 'FourStar', 'ThreeStar', 'All', 'OneStar']

const Plan = () => {
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [preference,setPreference] = useState('');
    const [rating,setRating] = useState('');

    const handlePreference = (v) => {
        setPreference(v)
    }

    const handleRating = (v) => {
        setRating(v)
    }

    return (
        <>
          <div className="min-h-full">
            <hr></hr>
            <main>
              <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">    
                  <div className="flex items-center">
                    <div className="relative">
                      <input name="start" onChange={(e) => {setStartDate(e.currentTarget.value); console.log(startDate)}} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"></input>
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative">
                      <input style= {{
    borderRadius:5
                      }} name="end" onChange={(e) => {setEndDate(e.currentTarget.value); console.log(endDate)}} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"></input>
                    </div>
                  </div>
                  <br></br>
                  <div className="flex items-center">
                    Preference: <Dropdown className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" options={unique_preferences} onChange={handlePreference} placeholder="Select Preference" />
                  </div>
                  <div className="flex items-center">
                    Rating Preference: <Dropdown className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" options={unique_ratings} onChange={handlePreference} placeholder="Select Rating" />
                  </div>
                </div>
                
                <div>
                </div>
              </div>
            </main>
          </div>
        </>
      )
};

export default Plan;