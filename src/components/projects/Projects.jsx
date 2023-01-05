import React from "react";
import {
    Container,
    Heading,
    Project,
    Item,
    Wrapper,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Button,
    OverLay,
    ButtonContainer,
} from "./style";
import netflix from "../../img/netflix.png";
import ecart from '../../img/ecart.png'
import chatter from '../../img/chatter.png'
import incubation from '../../img/incubation.png'
import olx from '../../img/olx.png'
import { SiGithub } from "react-icons/si";

const projects = [
    {
        name: 'Chatter',
        desc: 'Currently developing a user-friendly social media website using MERN stack. Implemented Socket.io for chatting, Redux toolkit for state management, JWT for authentication, react-hook-forms for validation.',
        github: 'https://github.com/Sillu8/Social-Media-MERN',
        site: 'https://chat.ecart.ltd',
        image: chatter
    },
    {
        name: 'E-cart',
        desc: 'Developed a functional and user-friendly E-Commerce website managing both admin and user side. The project has been hosted in Amazon Web Services(AWS) EC2 instance. Used Nginx as proxy server.',
        github: 'https://github.com/Sillu8/eCommerce',
        site: 'https://ecart.ltd',
        image: ecart,
    },
    {
        name: 'Booking slot application',
        desc: 'Developed a functional and user-friendly website for booking slots for an incubation managing both admin and user side. Implemented redux toolkit and jwt.',
        github: 'https://github.com/Sillu8/booking-slot',
        image: incubation,
    },
    {
        name: 'Netflix Clone',
        desc: 'Developed a functional Netfilx Clone Website using React.js and TMDB API.',
        github: 'https://github.com/Sillu8/react-netflix-clone',
        image: netflix
    },
    {
        name: 'OLX Clone',
        desc: 'Developed a functional OLX Clone website using React.js and google firebase as backend and database.',
        github: 'https://github.com/Sillu8/react-olx-clone',
        image: olx
    },


]

const Projects = () => {
    return (
        <Container id="projects">
            <Wrapper>
                <Heading>Projects</Heading>
                <Project>
                    {
                        projects.map(project => {
                            return (
                                <Item>
                                    <ImageContainer>
                                        <Image src={project.image} />
                                    </ImageContainer>
                                    <InfoContainer>
                                        <Title>{project.name}</Title>
                                        <Desc>
                                            {project.desc}
                                        </Desc>
                                        <ButtonContainer>
                                            <a
                                                href={project.github}
                                                style={{ textDecoration: "none" }}
                                            >
                                                <Button>
                                                    View Project <SiGithub style={{ marginLeft: "10px" }} />
                                                </Button>
                                            </a>
                                            <a
                                                href={project.site}
                                                style={{ textDecoration: "none" }}
                                            >
                                                {
                                                    project.site &&
                                                    <Button>Visit Site</Button>
                                                }
                                            </a>
                                        </ButtonContainer>
                                    </InfoContainer>
                                </Item>
                            )
                        })
                    }
                </Project>
            </Wrapper>
        </Container>
    );
};

export default Projects;
