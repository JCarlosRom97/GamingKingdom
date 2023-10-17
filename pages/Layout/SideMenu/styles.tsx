import styled from "styled-components";
import Link from "next/link";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const SideBar = styled.div`
  background-color: #9bc0e7;
  padding: 30px;
  width: 20%;
`;

export const Content = styled.div`
  width: 80%;
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  cursor: pointer;
  font-family: "Digital Font";
  color: #606060;
`;

export const SideBarSearchContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideBarSearch = styled.input`
  padding: 3px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;

  &:focus {
    border-color: #606060;
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: f6e8d9;
  color: #606060;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  cursor: pointer;
`;

export const MenuItem = styled.button`
  background: none;
  color: #606060;
  padding: 10px 0px 10px 0px;
  font-weight: bold;
  text-align: left;
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

export const LinkMenu = styled(Link)<{props:{isactive:boolean}}>`
  text-decoration: none;
  color: ${props=> props.isactive? 'black': '#606060' } 
`
