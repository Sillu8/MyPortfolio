import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    height: calc(75vh);
    margin: 100px 120px 30px 120px;
    display: flex;
    ${mobile({ margin: "150px 20px 30px 20px", height: "auto" })}
`;

export const Wrapper = styled.div``;

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
`;

export const Role = styled.h6`
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    ${mobile({ fontSize: "14px", marginBottom: "10px" })}
`;

export const Title = styled.h1`
    font-size: 40px;
    text-align: start;
    ${mobile({ fontSize: "25px" })}
`;

export const ButtonContainer = styled.div`
    margin-top: 40px;
    ${mobile({ marginTop: "15px", display: "flex" })}
`;

export const Button = styled.button`
    padding: 8px 24px;
    border: ${props => (props.border ? "2px solid #25282B" : "none")};
    border-radius: 5px;
    margin-right: 10px;
    background-color: ${props => props.bg};
    color: #25282b;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    ${mobile({
        padding: "5px 10px",
        fontSize: "15px",
        marginRight: "5px",
        border: "none",
    })}
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 80%;
    height: 100%;
    ${mobile({ width: "100%" })}
`;
