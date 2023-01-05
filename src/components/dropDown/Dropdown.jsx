import React from "react";
import { CloseIcon, Container, DropdownMenu, DropdownWrapper, Icon, Item } from "./style";
import { Link } from "react-scroll";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} toggle={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <Link to="about" smooth={true} duration={1000}>
                        <Item onClick={toggle}>ABOUT</Item>
                    </Link>
                    <Link to="projects" smooth={true} duration={1000}>
                        <Item onClick={toggle}>PROJECTS</Item>
                    </Link>
                    <Link to="contact" smooth={true} duration={1000}>
                        <Item onClick={toggle}>CONTACT</Item>
                    </Link>
                </DropdownMenu>
            </DropdownWrapper>
        </Container>
    );
};

export default Dropdown;
