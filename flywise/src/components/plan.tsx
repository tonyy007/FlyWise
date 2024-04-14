import React from "react";
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import hotel_travel_data from './output.json'

const unique_preferences = ['sea', 'mountain', 'art', 'statue', 'fashion', 'shopping', 'nature', 'food', 'beach']
const unique_ratings = ['TwoStar', 'FiveStar', 'FourStar', 'ThreeStar', 'All', 'OneStar']
const unique_purpose = ['leisure', 'business', 'family_vacation', 'honeymoon']

const Plan = () => {
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [preference,setPreference] = useState('');
    const [rating,setRating] = useState('');
    const [purpose,setPurpose] = useState('');
    const [filteredHotes, setFilteredHotels] = useState([]);
    const [showError, setShowError] = useState(false)

    const handlePreference = (v) => {
        setPreference(v)
    }

    const handleRating = (v) => {
        setRating(v)
    }

    const handlePurpose = (v) => {
        setPurpose(v)
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setShowError(false);
      };
    
      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered_list = hotel_travel_data.filter(obj => obj["preference"] === preference["value"] && obj[" HotelRating"] === rating["value"] && obj["trip_purpose_hotel"].includes(purpose["value"]));
        setFilteredHotels(filtered_list);
        if (Object.keys(filtered_list).length === 0) {
            setShowError(true)
        }
      };
    

    return (
        <>
          <div className="min-h-full">
            <hr></hr>
            <main>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">    
                  <br></br>
                  <div className="flex items-center">
                    <Dropdown className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" options={unique_preferences} onChange={handlePreference} placeholder="Select Preference" />
                  </div>
                  <br></br>
                  <div className="flex items-center">
                    <Dropdown className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" options={unique_ratings} onChange={handleRating} placeholder="Select Budget Rating" />
                  </div>
                  <br></br>
                  <div className="flex items-center">
                    <Dropdown className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" options={unique_purpose} onChange={handlePurpose} placeholder="Select Trip Purpose" />
                  </div>
                  <br></br>
                  <div className="flex items-center">
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
                <br></br>
                </div>
                <div>
                </div>
              </div>
              <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 grid grid-cols-3 gap-4 ">
                        {filteredHotes.map((hotel, index) => (
                            <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div key={index + 1} className="px-5 pb-5">
                                    <a href={hotel[" HotelWebsiteUrl"]}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{hotel[" HotelName"]}</h5>
                                    </a>
                                    <div key={index + 2} className="flex items-center mt-2.5 mb-5">
                                        <div key={index + 3} className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{hotel[" HotelRating"]}</span>
                                    </div>
                                    <p className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white">{hotel[" PhoneNumber"]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
              </form>
              <Snackbar
                    open={showError}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="No Hotel Found!"
                    action={action}
                />
            </main>
          </div>
        </>
      )
};

export default Plan;