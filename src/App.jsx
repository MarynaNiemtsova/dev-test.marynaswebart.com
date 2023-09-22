import React from "react";
import{ createContext} from 'react';
import Header from './components/header/Header'

import About from './components/about/About'
import Series from './components/series/Series'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import Testimonials from "./components/testimonials/Testimonials";
import Slideshow from './components/slideshow/Slideshow';
import News from "./components/news/News";



export const ThemeContext = createContext(null);

const App = () => {
  
    return (
    <>
    <Header />
    <About />
    <Series />
    <Features />
    <Slideshow />
    <Testimonials/>
    <News />
    <Footer />
  </>
  
  
    )
}

export default App