import './App.css';
import { BrowserRouter, Routes, Route, navigate } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import About from './pages/About/About';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
