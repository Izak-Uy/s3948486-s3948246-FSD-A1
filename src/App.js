import './App.css';
import Header from './pages/header'
import Navbar from './pages/navbar'
import Slide from './pages/slide'
import Footer from './pages/footer'
import Content from './pages/content'

function App() {
  const movies = {
    oppenheimer: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000',
    barbie: 'https://variety.com/wp-content/uploads/2023/04/Fs3zzy_aMAAyCNC.jpeg?w=800',
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Slide image={movies.barbie}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
