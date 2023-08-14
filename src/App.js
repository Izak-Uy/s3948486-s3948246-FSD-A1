import './App.css';
import Header from './pages/header'
import Navbar from './pages/navbar'
import Slide from './pages/slide'
import Footer from './pages/footer'
import Content from './pages/content'

function App() {
  const movies = [
    "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
    "https://variety.com/wp-content/uploads/2023/04/Fs3zzy_aMAAyCNC.jpeg?w=800",
    "https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg",
  ];
 
  return (
    <div>
      <Navbar />
      <Header />
      <Slide imageArrayProps={movies}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
