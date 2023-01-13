import React, { useRef } from "react";
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
import toast from 'react-hot-toast'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Footer = () => {

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            if(res.status === 200) toast.success('Your mail has been successfully sent.')
        } catch (error) {
            console.log(error);
            toast.error('Sorry, some unknown error!')
        }
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
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <InputContainer>
                            <Item type="text" placeholder="Name" name="from_name" required />
                        </InputContainer>
                        <InputContainer>
                            <Item
                                type="email"
                                placeholder="Email"
                                name="from_email"
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
