import './App.css';
import CardsContainer from './Components/CardsContainer';
import Carousel from './Components/Carousel';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';
import Modal from './Components/Modal';

function App() {
 
  return (
    <div className="App">

      <Header />
      <Category />
      <Carousel />
      <CardsContainer />
      <Modal/>
      <Loader />
      <Footer />

    </div>
  );
}

export default App;
