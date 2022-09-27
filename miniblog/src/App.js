import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home.js';
import About from './pages/About/About';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  //atribui ao loadingUser valor do user comparado com o undefined
  const loadingUser = user === undefined;

   useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    })
  },[auth])

  if (loadingUser){
    return <p>Carregando...</p>;
  }
  
  return (
    <div className="App">
        <AuthProvider value={{user}}>
            <BrowserRouter>
              <NavBar />
              <div className="container">
                <Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element = { !user ? <Login /> : <Navigate to='/'/> } /> 
                    <Route path='/register' element = { !user ? <Register /> : <Navigate to='/'/> }/>
                    <Route path='/posts/create' element={ user ? <CreatePost  /> : <Navigate to='/login'/> } />
                    <Route path='/dashbord' element={ user ? <Dashboard /> : <Navigate to='/login'/> }/>
                </Routes>
              </div>
              <Footer />
            </BrowserRouter >
        </AuthProvider>  
    </div>
  );
}

export default App;
