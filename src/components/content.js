import './content.css'

const Content =({imageArrayProps})=> {

    const imageArray = imageArrayProps;

    return (
        <div className='content-wrapper'>
            <div className='releases'>
                <div className='content-header'> New Releases</div>
                {/* {imageArray.map((MovImg, index) => ( */}
                    <div className='content-container'>
                        <div className='movie-slot-container'>
                            <img
                                // key = {index}
                                src= "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000"
                            ></img>
                        </div>
                        <div className='movie-slot-container'>
                            <img
                                src='https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg'
                            ></img>
                        </div>
                        <div className='movie-slot-container'>
                            <img
                                src='https://variety.com/wp-content/uploads/2023/04/Fs3zzy_aMAAyCNC.jpeg?w=800'
                            ></img>
                        </div>
                        <div className='movie-slot-container'>
                            <img
                                src='https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg'
                            ></img>
                        </div>
                    </div>
                {/* ))} */}
            </div>
            <div className='about-us'>
                <div className='about-us-text'>
                    <h1>Our Cinemas</h1>
                    <div className='p-text'>
                        <p>
                            Loop Cinema goes by the community known saying: We movies. We strive everyday to provide to our community with stellar new movie releases as well as old but gold cinema classics. We work hard with our community representatives to give everybody a welcoming and enjoyable cinema experience perfect for solo goers, romantic date nights and even family fun. No other cinema can even come close to match our level of dedication we give to our community and all we ask for return is your money.
                        </p>
                        <p>
                            We have cinemas all across Melbourne, ranging from Warrnambool to Flagstaff to the city. You can be sure that around the corner we will be there. We are an inevitable and enjoyable experience. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content