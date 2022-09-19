 import React from 'react'
 import Header from './Component/Header/Header.jsx';
 import Footer from './Component/Footer/Footer';
 import Home from './Pages/Homepage/Home';
 import ContactUs from './Pages/ContactUs/Contact';
 import AboutUs from './Pages/AboutUs/About';
 import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 const App = () => {
   return (
     <div>
      <Header/>
      <Home/>
      <Footer/>
      <ContactUs/>
      <AboutUs/>
      
     </div>
   )
 }
 
 export default App

 