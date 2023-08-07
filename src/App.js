import './App.css';
import Header from './pages/header'
import Navbar from './pages/navbar'
import Slide from './pages/slide'
import Footer from './pages/footer'
import Content from './pages/content'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
