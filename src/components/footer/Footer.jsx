import React from "react";
import emailjs from "@emailjs/browser";
import {
    Button,
    ContactForm,
    Container,
    Message,
    Item,
    Title,
    Wrapper,
    InputContainer,
    ContactContainer,
    ImageContainer,
    Image,
    SocialMediaContainer,
    Icon,
} from "./style";
import { SiGithub, SiGmail } from "react-icons/si";
import contact from "../../svg/undraw_contact_us_-15-o2.svg";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Footer = () => {
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
            console.log(result)
        } catch (error) {
            console.log(error);
        }
        // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        //     .then(result => {
        //         console.log(result.text);
        //     }).catch(error => {
        //         console.log(error.text);
        //     })
        e.target.reset();
    };

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact Me</Title>
                <ContactContainer>
                    <ImageContainer>
                        <Image src={contact} />
                    </ImageContainer>
                    <ContactForm onSubmit={sendEmail}>
                        <InputContainer>
                            <Item type="text" placeholder="Name" name="name" required />
                        </InputContainer>
                        <InputContainer>
                            <Item
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Message
                                type="text"
                                placeholder="Message"
                                name="message"
                                required
                                rows={4}
                                cols={50}
                            />
                        </InputContainer>
                        <Button>Send</Button>
                    </ContactForm>
                </ContactContainer>
                <SocialMediaContainer>
                    <Icon>
                        <a
                            href="https://github.com/Sillu8"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <SiGithub />
                        </a>
                    </Icon>
                    <Icon>
                        <a
                            href="mailto:shamilrasheed131@gmail.com"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <SiGmail />
                        </a>
                    </Icon>
                </SocialMediaContainer>
            </Wrapper>
        </Container>
    );
};

export default Footer;
