import React from "react";
import NavBar from "./navbar.tsx";
import { useState } from 'react';

const NewsCard = ({title, desciprtion, url, imageUrl}) =>(
    <div className='news-card'>
        <img src={imageUrl} alt={title}/>
        <h3>{title}</h3>
        <p>{desciprtion}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
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
        console.log('Selected city:', city)

        try{
            const response = await fetch("https://newsapi.org/v2/everything?q={city}&sortBy=publishedAt&apiKey=53c543d3d80244779e87c062a1a6c1dc");

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