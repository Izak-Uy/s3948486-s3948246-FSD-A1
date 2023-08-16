import React from 'react';
import './slide.css'

const Slide =({imageArrayProps})=> {
    
    const imageArray = imageArrayProps;
    const [currIndex, setIndex] = React.useState(0);
    const delay = 2500;

    React.useEffect(() => {
        const interval = setInterval(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            clearInterval(interval);
        };
    }, [imageArray.length]);

    return (
        <div 
            className='slide-wrapper'>
                <div 
                    className='slide-slider'
                    style={{ transform: `translate3d(${-currIndex * 100}%, 0 , 0)` }}
                >
                    {imageArray.map((MovImg, index) => (
                        <>
                            <img 
                                className='bg-image' 
                                key={index} 
                                // src={MovImg}
                                style={{backgroundImage: `url(${MovImg})`}}
                            ></img>
                            <img 
                                className='slide-image' 
                                key={index} 
                                src={MovImg}
                            ></img>
                        </>
                    ))}
                </div>
        </div>
    )
}

export default Slide