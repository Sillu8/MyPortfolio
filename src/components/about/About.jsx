import React from "react";
import {
    Container,
    Desc,
    Image,
    ImageContainer,
    InfoContainer,
    Title,
    Wrapper,
    Button,
} from "./style";
import { SiGithub } from "react-icons/si";
import me from "../../img/me.JPG";

const About = () => {
    return (
        <Container id="about">
            <Wrapper>
                <InfoContainer>
                    <Title>About Me</Title>
                    <Desc>
                        Passionate and self-taught developer capable of learning and adopting the latest
                        technologies. Both driven and
                        self-motivated, and likes to experiment with new technologies and
                        techniques. I am very passionate about learning new things, and
                        strive to better myself as a developer. My favorite technologies
                        are React, Express, MongoDb and NodeJS.
                        I am currently learning about Docker.
                    </Desc>
                    <a
                        href="https://github.com/Sillu8/"
                        style={{ textDecoration: "none" }}
                    >
                        <Button>
                            View <SiGithub style={{ marginLeft: "10px" }} />
                        </Button>
                    </a>
                </InfoContainer>
                <ImageContainer>
                    <Image src={me} />
                </ImageContainer>
            </Wrapper>
        </Container>
    );
};

export default About;
