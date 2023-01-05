import styled from "styled-components";
import { mobile } from "../../responsive";
import { RiMenu4Line } from "react-icons/ri";

export const Container = styled.div`
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #f9faff;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 120px;
    ${mobile({ padding: "25px 20px" })}
`;

export const Left = styled.div`
    flex: 1;
`;

export const Logo = styled.div`
    cursor: pointer;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Item = styled.div`
    margin-left: 70px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

export const MenuBar = styled(RiMenu4Line)`
    display: none;
    ${mobile({
        display: "block",
        cursor: "pointer",
        fontSize: "25px",
    })}
`;
