import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Dropdown from "../components/dropDown/Dropdown";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <NavBar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Intro />
            <About />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;
