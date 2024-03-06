import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

//Left Container
export const LeftHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const MotionText = styled(NavLink)`
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

export const PostsLogo = styled.img`
  margin-right: 10px;
  height: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export const PostsText = styled(NavLink)`
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

export const FindFriendLogo = styled.img`
  margin-right: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Friends = styled(NavLink)`
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

//Right Container
export const RightHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Bell = styled.img`
  margin-right: 30px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Avatar = styled.img`
  margin-right: 30px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Menu = styled.img`
  margin-right: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;
//Dropdown menu from avatar
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  margin: 15px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  z-index: 10;
`;

export const DropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownMenuItemText = styled.span`
  font-weight: normal;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Login = styled.img`
  margin-right: 30px;
  cursor: pointer;
`;

export const User = styled.img`
  margin-right: 30px;
  cursor: pointer;
`;
