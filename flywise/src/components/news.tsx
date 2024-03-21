import React from "react";
import NavBar from "./navbar.tsx";
import { useState } from 'react';

const NewsCard = ({title, description, url, imageUrl, index}) =>(
        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={imageUrl} alt={title}/>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noopener noreferrer">Read more</a>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

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
                </div>
            )}

            
        </div>
    );
};

export default News;