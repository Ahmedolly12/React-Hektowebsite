 import React from 'react'
 import Header from './Component/Header/Header.jsx';
 import Footer from './Component/Footer/Footer';
 import Home from './Pages/Homepage/Home';
 import ContactUs from './Pages/ContactUs/Contact';
 import AboutUs from './Pages/AboutUs/About';
 import { Route, Routes } from 'react-router-dom';
 const App = () => {
   return (
     <div>
       <Header/>
      <Routes>
       <Route path ='/' element = {<Home/>}/>
        <Route path ='ContactUs' element ={<ContactUs/>}/>
        <Route path ='AboutUs' element= {<AboutUs/>}/>
      </Routes>
       <Footer/>
  
     </div>
   )
 }
 
 export default App

 