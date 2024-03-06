import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { NavLink } from "react-router-dom";
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
  {
    /* const history = useHistory(); // Add to Initialize useHistory */
  }
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  {
    /*
const handleProfileClick = () => {
    history.push("/profile"); // ADD TO NAVIGATE TO PROFILE PAGE
  };

  const handleLogoutClick = () => {
    
  };

  CALL FUNCTION BELOW IN RETURN
  1.
  <User src={user} alt="User" />
  <DropdownMenuItemText onClick={handleProfileClick}>
  2.
  <Login src={login} alt="Login Icon" />
  <DropdownMenuItemText onClick={handleLogoutClick}>

*/
  }

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
        <div style={{ position: "relative" }}>
          <Avatar src={avatar} alt="Avatar" onClick={handleDropdownToggle} />
          {showDropdown && (
            <DropdownMenu>
              <DropdownMenuItem>
                <User src={user} alt="User" />
                <DropdownMenuItemText onClick={() => history.push("/profile")}>
                  Profile
                </DropdownMenuItemText>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Login src={login} alt="Login Icon" />
                <DropdownMenuItemText onClick={() => history.push("/logout")}>
                  Logout
                </DropdownMenuItemText>
              </DropdownMenuItem>
            </DropdownMenu>
          )}
        </div>
        <NavLinkContainer to="/">
          <Menu src={menu} alt="Menu" />
        </NavLinkContainer>
      </RightHeaderNav>
    </HeaderContainer>
  );
};

export default Header;
