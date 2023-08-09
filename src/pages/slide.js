import './slide.css'

const slide =({image})=> {
    return (
        <div className='slide-wrapper'>
            <div className='bg-image'>
                <img className='bg-image-image' src={image}></img>
            </div>
            <img className='slide-image' src={image} alt='oppenheimer'></img>
        </div>
    )
}

export default slide