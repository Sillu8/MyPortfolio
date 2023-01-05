import React from "react";
import { Container, Item, Left, Logo, Right, Wrapper, MenuBar } from "./style";
import { Link } from "react-scroll";
// import { RiMenu4Line } from "react-icons/ri";

const NavBar = ({ toggle }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="home" smooth={true} duration={1000}>
                    <Left>
                        <Logo>SR</Logo>
                    </Left>
                </Link>
                <Right>
                    <MenuBar onClick={toggle} />
                    <Link to="about" smooth={true} duration={1000}>
                        <Item activeStyle={{ color: "#00BFA6" }}>ABOUT</Item>
                    </Link>
                    <Link to="projects" smooth={true} duration={1000}>
                        <Item>PROJECTS</Item>
                    </Link>
                    <Link to="contact" smooth={true} duration={1000}>
                        <Item>CONTACT</Item>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default NavBar;
