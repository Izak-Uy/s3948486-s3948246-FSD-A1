import Header from "../components/header";
import Slide from "../components/slide";
import Content from "../components/content";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Home() {
  const moviesItems = [
    {
      id: 1,
      imageSrc: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
      movieName: "Oppenheimer",
      sessionTimes: ["4:00 PM", "6:00 PM", "8:15 PM"]
    },
    {
      id: 2,
      imageSrc: "https://i.ebayimg.com/images/g/evYAAOSwszlkv5z3/s-l1600.jpg",
      movieName: "Barbie",
      sessionTimes: ["5:30 PM", "6:30 PM", "7:30 PM"]
    },
    {
      id: 3,
      imageSrc: "https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg",
      movieName: "Sharknado 2",
      sessionTimes: ["12:30 PM", "2:00 PM", "3:15 PM"]
    },
    {
      id: 4,
      imageSrc: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg",
      movieName: "Dunkirk",
      sessionTimes: ["4:00 PM", "6:00 PM", "8:15 PM"]
    }
  ];

  return (
    <div className="home-wrapper">
      <Navbar />
      <Header />
      <Slide imageArrayProps={moviesItems} />
      <Content imageArrayProps={moviesItems} />
      <Footer />
    </div>
  );
}

export default Home;
