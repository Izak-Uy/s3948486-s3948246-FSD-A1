import React from 'react';
import './slide.css'

const Slide =({imageArrayProps})=> {
    
    const [currIndex, setIndex] = React.useState(0);
    const delay = 6000;

    React.useEffect(() => {
        const interval = setInterval(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imageArrayProps.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            clearInterval(interval);
        };
    }, [imageArrayProps.length]);

    return (
        <div 
            className='slide-wrapper'>
                <div 
                    className='slide-slider'
                    style={{ transform: `translate3d(${-currIndex * 100}%, 0 , 0)` }}
                >
                    {imageArrayProps.map((item) => (
                        <>
                            <img 
                                className='bg-image' 
                                key={item.id} 
                                // src={item.imageSrc}
                                style={{backgroundImage: `url(${item.imageSrc})`}}
                            ></img>
                            <img 
                                className='slide-image' 
                                key={item.id} 
                                src={item.imageSrc}
                            ></img>
                        </>
                    ))}
                </div>
        </div>
    )
}

export default Slide