import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DivWithShadow } from "../../styles";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  gap: 2rem;
`;

export const NavGroupLink = styled(NavLink)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  gap: 0.8rem;

  text-decoration: none;
`;

export const NavGroupLogo = styled(NavGroupLink)`
  margin-right: 4rem;
`;

export const NavGroupAvatar = styled.div`
  position: relative;
`;

export const NavLogoText = styled.h1`
  color: black;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
`;

export const NavLogoIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

export const NavItemText = styled.h4`
  font-weight: 400;
  color: #333;
`;

export const NavItemIcon = styled.img`
  aspect-ratio: 1/1;
  line-height: 1;
  width: 1.2rem;
  height: 1.2rem;
`;

export const Bell = styled(NavItemIcon)`
  margin-left: auto;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

//Dropdown menu from avatar
export const DropdownMenu = styled(DivWithShadow)`
  position: absolute;
  top: 100%;
  right: 0;

  display: flex;
  flex-direction: column;
  /* gap: 0.6rem; */

  margin: 0.8rem;
  padding: 0;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;

  z-index: 10;
`;

export const DropdownMenuLink = styled(NavGroupLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  /* cursor: pointer; */
  &:hover {
    background-color: #f0f0f0;
  }
`;
