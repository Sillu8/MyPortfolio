import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    margin: 0 120px 0 120px;
    height: auto;
    ${mobile({ margin: "0 20px 0 20px" })}
`;

export const Wrapper = styled.div`
    padding: 80px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "auto 0 0 0", flexDirection: "column" })}
`;

export const InfoContainer = styled.div`
    flex: 3;
    padding: 10px 100px 10px 0
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    ${mobile({ padding: "0 0 0 0" })}
`;

export const Title = styled.h1`
    font-family: "Playfair Display", sans-serif;
    font-size: 48px;
    color: #25282b;
    ${mobile({ fontSize: "25px" })}
`;

export const Desc = styled.div`
    font-family: "Nunito", sans-serif;
    font-size: 24px;
    color: #828282;
    margin: 20px 0;
    ${mobile({ fontSize: "18px", margin: "10px 0", textAlign: "start" })}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
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
    ${mobile({ padding: "5px 10px", fontSize: "12px" })}
`;

export const ImageContainer = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ padding: "10px 0 0 0" })}
`;

export const Image = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 70%;
    object-fit: cover;
    ${mobile({ height: "150px", width: "150px" })}
`;
