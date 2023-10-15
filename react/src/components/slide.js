import React from 'react';
import './slide.css'
import { getMovies } from '../data/movieRepository';
import { useEffect, useState, useCallback } from 'react';

const Slide =({imageArrayProps})=> {

    const [movieList, setMovieList] = useState([]);

    const fetchMovies = useCallback(async () => {
        const movieListData = await getMovies();
        setMovieList(movieListData)
    }, [])

    useEffect(() => {
        fetchMovies();
    }, []);
    
    const [currIndex, setIndex] = React.useState(0);
    const delay = 6000;

    React.useEffect(() => {
        const interval = setInterval(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === movieList.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            clearInterval(interval);
        };
    }, [movieList.length]);

    return (
        <div 
            className='slide-wrapper'>
                <div 
                    className='slide-slider'
                    style={{ transform: `translate3d(${-currIndex * 100}%, 0 , 0)` }}
                >
                    {movieList.length > 0 && (movieList.map((item) => (
                        <>
                            <img 
                                className='bg-image' 
                                key={item.movieId} 
                                // src={item.imageSrc}
                                style={{backgroundImage: `url(${item.movieImg})`}}
                            ></img>
                            <img 
                                className='slide-image' 
                                key={item.movieId} 
                                src={item.movieImg}
                            ></img>
                        </>
                    )))}
                </div>
        </div>
    )
}

export default Slide