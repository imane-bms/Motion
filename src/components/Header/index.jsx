import React from "react";
import { NavLink } from "react-router-dom";
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
} from "./HeaderStyles";
import logoImage from "../../assets/images/logo.png";
import postsImage from "../../assets/images/posts_logo.png";
import findFriends from "../../assets/svgs/icon-friends.svg";
import bell from "../../assets/svgs/notification_bell.svg";
import avatar from "../../assets/images/users/jennifer.png";
import menu from "../../assets/svgs/menu.svg";
import { MotionText } from "./HeaderStyles";
import { PostsText } from "./HeaderStyles";
import { Friends } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderNav>
        {/* Left Header */}
        <NavLinkContainer to="/">
          <Logo src={logoImage} alt="Logo" />
          <MotionText>Motion</MotionText>
        </NavLinkContainer>
        <NavLinkContainer to="/">
          <PostsLogo src={postsImage} alt="Posts Logo" />
          <PostsText>Posts</PostsText>
        </NavLinkContainer>
        <NavLinkContainer to="/">
          <FindFriendLogo src={findFriends} alt="Find friends Icon" />
          <Friends>Find Friends</Friends>
        </NavLinkContainer>
      </LeftHeaderNav>
      <RightHeaderNav>
        {/* Right Header */}
        <NavLinkContainer to="/">
          <Bell src={bell} alt="Notification Bell icon" />
        </NavLinkContainer>
        <NavLinkContainer to="/">
          <Avatar src={avatar} alt="Avatar" />
        </NavLinkContainer>
        <NavLinkContainer to="/">
          <Menu src={menu} alt="Menu" />
        </NavLinkContainer>
      </RightHeaderNav>
    </HeaderContainer>
  );
};

export default Header;
