import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    height: auto;
`;

export const Wrapper = styled.div`
    padding: 100px 200px 0 200px;
    ${mobile({ padding: "100px 20px 0 20px" })}
`;

export const Heading = styled.h1`
    text-align: center;
    text-decoration: underline #00bfa6 4px;
    ${mobile({ fontSize: "20px" })}
`;

export const Project = styled.div`
    margin-top: 20px;
`;

export const Item = styled.div`
    flex: 1;
    height: 400px;
    margin: 20px 0;
    display: flex;
    border-radius: 24px;
    background-color: #ffffff;
    ${mobile({
        flexDirection: "column",
    })}
`;

export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    ${mobile({ height: "50%" })}
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 24px 0 0 24px;
    ${mobile({ borderRadius: "24px 24px 0 0" })}
`;

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
    padding: 100px 60px;
    ${mobile({
        padding: "10px 10px",
    })}
`;

export const Title = styled.h1`
    font-family: "Playfair Display", sans-serif;
    font-size: 40px;
    color: #25282b;
    ${mobile({ fontSize: "25px" })}
`;

export const Desc = styled.div`
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    color: #828282;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    margin-right: 20px;
    padding: 8px 24px;
    background-color: #ffffff;
    border: 1px solid #25282b;
    border-radius: 24px;
    color: #25282b;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #25282b;
        color: #ffffff;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ padding: "5px 10px", borderRadius: "10px", fontSize: "12px" })}
`;
