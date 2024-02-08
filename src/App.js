import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/Products/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
