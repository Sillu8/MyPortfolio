import React from "react";
import {
    Button,
    ButtonContainer,
    Container,
    Image,
    ImageContainer,
    InfoContainer,
    Role,
    Title,
} from "./style";
import { Link } from "react-scroll";
import svgImg from "../../svg/undraw_programming_re_kg9v (1).svg";

const Intro = () => {
    return (
        <Container id="home">
            <InfoContainer>
                <Role>FULL STACK DEVELOPER</Role>
                <Title>Hey there, I'm Shamil Rasheed</Title>
                <ButtonContainer>
                    <Link to="projects" smooth={true} duration={1000}>
                        <Button bg="#00BFA6" border={false}>
                            Projects
                        </Button>
                    </Link>
                    <a href="https://github.com/Sillu8" style={{ textDecoration: "none" }}>
                        <Button bg="#fff" border={true}>
                            Github
                        </Button>
                    </a>
                </ButtonContainer>
            </InfoContainer>
            <ImageContainer>
                <Image src={svgImg} />
            </ImageContainer>
        </Container>
    );
};

export default Intro;
