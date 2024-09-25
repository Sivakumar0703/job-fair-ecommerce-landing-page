import './App.css';
import Card from './Components/Card';
import CardsContainer from './Components/CardsContainer';
import Carousel from './Components/Carousel';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Modal from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Carousel />
      {/* <Card /> */}
      <CardsContainer />
      <Modal/>
      <Footer />
      
    </div>
  );
}

export default App;
