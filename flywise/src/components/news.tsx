import React from "react";
import NavBar from "./navbar.tsx";
import { useState } from 'react';

const NewsCard = ({title, desciprtion, url, imageUrl, index}) =>(
    <div className="flex justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 grid grid-cols-3 gap-4 ">
        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={imageUrl} alt={title}/>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            {/* <p>{desciprtion}</p> */}
            <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    </div>
);

const News = () => {

    const [city, setCity] = useState('');
    const [newsInfo, setNewsInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleCityChange = (e) =>{
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Selected city:', city.toString())
        var city_query = city.toString();
        try{
            var query = "https://newsapi.org/v2/everything?q="+ city_query+"&sortBy=publishedAt&apiKey=53c543d3d80244779e87c062a1a6c1dc";
            const response = await fetch(query);
            if(!response.ok){
                throw new Error('Failed to fetch data');

            }

            const data = await response.json();
            setNewsInfo(data);
            setError(null);
            console.log(data);
        }catch(error){
            setNewsInfo(null);
            setError("Error fetching data. Please try again.");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                    <input 
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Enter your city"
                    />
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>

            {newsInfo && (
                <div>
                <h2>News Information for {city}</h2>
                {newsInfo.articles.map((article, index) => (
                    <NewsCard
                    key={index}
                    index={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    imageUrl={article.urlToImage}
                    />
                ))}
                </div>
            )}

            
        </div>
    );
};

export default News;