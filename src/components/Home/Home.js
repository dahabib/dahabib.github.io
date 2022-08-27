import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Statistics from '../Statistics/Statistics';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-auto'>            
            <Header />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Testimonials />
            <Blogs />
            <Statistics />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;