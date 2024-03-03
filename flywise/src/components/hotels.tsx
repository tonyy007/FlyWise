import React, { useEffect } from "react";
import { useState } from "react";
import test from './test.json'

let hotels = test.data.hotels;


interface firstReturnInnerObject {
    dest_type: string,
    dest_id: string
}
interface firstReturn {
    data: firstReturnInnerObject[] | undefined
}

const Hotels = () => {

    // const [search, setSearch] = useState("");
    // const [destID, setDestId] = useState({} as firstReturn);

    // async function getDestID() {
    //     const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${search}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'c6f0e7b027mshcf01e272d163ee1p1ebcccjsn4ba1049fc9cc',
    //             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    //         }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         // ask chatgpt if this is good practice
    //         setDestId(result as firstReturn);
    //         //console.log(result);

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // async function getHotels() {
    //     const id = destID.data && destID.data[0].dest_id;
    //     const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${id}&search_type=CITY&arrival_date=2023-12-14&departure_date=2023-12-16&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'c6f0e7b027mshcf01e272d163ee1p1ebcccjsn4ba1049fc9cc',
    //             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const hotels = await response.text();
    //         console.log(hotels);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getHotels();
    // }, [destID])
    // <input type="text" onChange={((e) => { setSearch(e.target.value) })} placeholder='Insert Name of City' id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    //                     <button type="submit" onClick={getDestID} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

    return (
        <>
            <div className="min-h-full">
                <hr></hr>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex">
                        <input type="text" placeholder='Insert Name of City' id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                    <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 grid grid-cols-3 gap-4 ">
                        {hotels.map((hotel, index) => (
                            <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src={hotel.property.photoUrls[0]} alt="product image" />
                                </a>
                                <div key={index + 1} className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{hotel.property.name}</h5>
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
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{hotel.property.reviewScore}</span>
                                    </div>
                                    <div key={index + 4} className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${new Intl.NumberFormat('en-US').format(hotel.property.priceBreakdown.excludedPrice.value)}</span>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Reservation</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </main>
            </div>


        </>
    );
};

export default Hotels;