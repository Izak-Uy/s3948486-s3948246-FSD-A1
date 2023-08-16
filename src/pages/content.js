import './content.css'

const Content =({imageArrayProps})=> {

    const imageArray = imageArrayProps;

    return (
        <div className='content-wrapper'>
            <section className='releases'>
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
            </section>
            <section className='about-us'>
                dayum loop cinema goated
            </section>
        </div>
    )
}

export default Content