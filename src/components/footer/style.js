import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    height: 85vh;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    padding: 30px 130px;
    ${mobile({ padding: "40px 20px" })}
`;

export const Title = styled.h1`
    font-family: "Playfair Display", sans-serif;
    text-decoration: underline #00bfa6;
    font-size: 48px;
    ${mobile({ fontSize: "25px" })}
`;

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    ${mobile({ marginTop: "10px", flexDirection: "column" })}
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "100%", marginTop: "10px" })}
`;

export const Image = styled.img`
    width: 80%;
    height: 100%;
`;

export const ContactForm = styled.form`
    flex: 1;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`;

export const InputContainer = styled.div`
    margin: 10px 0;
    overflow: hidden;
`;

export const Item = styled.input`
    padding: 8px 24px;
    width: 300px;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    &:focus {
        outline: none;
    }
    ${mobile({ width: "250px" })}
`;

export const Message = styled.textarea`
    padding: 8px 24px;
    width: 300px;
    resize: none;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    &:focus {
        outline: none;
    }
    ${mobile({ width: "250px" })}
`;

export const Button = styled.button`
    padding: 8px 24px;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    color: #25282b;
    transition: all 0.5s ease;
    &:hover {
        background-color: #25282b;
        color: #ffffff;
    }
    ${mobile({ padding: "5px 10px", width: "100%" })}
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    ${mobile({ marginTop: "30px" })}
`;

export const Icon = styled.div`
    padding: 0 15px;
    color: #25282b;
    font-size: 20px;
    cursor: pointer;
    ${mobile({ padding: "0 10px" })}
`;
