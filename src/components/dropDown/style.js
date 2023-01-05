import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    top: 0;
    left: 0;
    opacity: ${props => (props.isOpen ? "1" : "0")};
    background-color: #00bfa6;
    top: ${props => (props.isOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    outline: none;
    background-color: transparent;
    font-size: 35px;
    z-index: 10;
`;

export const CloseIcon = styled(IoClose)`
    color: #ffffff;
    cursor: pointer;
`;

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DropdownMenu = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Item = styled.div`
    text-align: center;
    margin: 40px 0;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
`;
