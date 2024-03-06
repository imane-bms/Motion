import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  NavLinkContainer,
  LeftHeaderNav,
  Logo,
  PostsLogo,
  FindFriendLogo,
  RightHeaderNav,
  Bell,
  Avatar,
  Menu,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuItemText,
  Login,
  User,
  NavLink, // New NavLink
} from "./HeaderStyles";
import logoImage from "../../assets/images/logo.png";
import postsImage from "../../assets/images/posts_logo.png";
import findFriends from "../../assets/svgs/icon-friends.svg";
import bell from "../../assets/svgs/notification_bell.svg";
import avatar from "../../assets/images/users/jennifer.png";
import menu from "../../assets/svgs/menu.svg";
import login from "../../assets/images/login.png";
import user from "../../assets/images/user.png";
import { MotionText } from "./HeaderStyles";
import { PostsText } from "./HeaderStyles";
import { Friends } from "./HeaderStyles";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfileClick = () => {
    navigate("*"); //Naigate
  };

  const handleLogoutClick = () => {
    navigate("*"); //Navigate
  };

  return (
    <HeaderContainer>
      <LeftHeaderNav>
        {/* Left Header */}
        <NavLink to="/">
          <NavLinkContainer>
            <Logo src={logoImage} alt="Logo" />
            <MotionText>Motion</MotionText>
          </NavLinkContainer>
        </NavLink>
        <NavLink to="/">
          <NavLinkContainer>
            <PostsLogo src={postsImage} alt="Posts Logo" />
            <PostsText>Posts</PostsText>
          </NavLinkContainer>
        </NavLink>
        <NavLink to="/">
          <NavLinkContainer>
            <FindFriendLogo src={findFriends} alt="Find friends Icon" />
            <Friends>Find Friends</Friends>
          </NavLinkContainer>
        </NavLink>
      </LeftHeaderNav>
      <RightHeaderNav>
        {/* Right Header */}
        <NavLink to="/">
          <NavLinkContainer>
            <Bell src={bell} alt="Notification Bell icon" />
          </NavLinkContainer>
        </NavLink>
        <div style={{ position: "relative" }}>
          <Avatar src={avatar} alt="Avatar" onClick={handleDropdownToggle} />
          {showDropdown && (
            <DropdownMenu>
              <DropdownMenuItem>
                <User src={user} alt="User" />
                <NavLink to="/">
                  <DropdownMenuItemText onClick={handleProfileClick}>
                    Profile
                  </DropdownMenuItemText>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Login src={login} alt="Login Icon" />
                <NavLink to="/">
                  <DropdownMenuItemText onClick={handleLogoutClick}>
                    Logout
                  </DropdownMenuItemText>
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenu>
          )}
        </div>

        <NavLink to="/">
          <Menu src={menu} alt="Menu" />
        </NavLink>
      </RightHeaderNav>
    </HeaderContainer>
  );
};

export default Header;
