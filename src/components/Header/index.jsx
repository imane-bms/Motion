  //TODO dropdownmenu should closes after any clicks: links inside or anywhere outside
  //TODO logout logic need to be addet 
  //TODO three dots menu logig need to be addet 

import { useState } from "react";
import {
  HeaderContainer,
  Bell,
  Avatar,
  NavGroupLink,
  NavGroupLogo,
  NavItemText,
  NavItemIcon,
  NavLogoIcon,
  NavLogoText,
  NavGroupAvatar,
} from "./styles";

import logoImage from "../../assets/images/logo.png";
import postsImage from "../../assets/svgs/posts_logo.svg";
import findFriends from "../../assets/svgs/icon-friends.svg";
import bell from "../../assets/svgs/notification_bell.svg";
import avatar from "../../assets/images/users/jennifer.png";
import menu from "../../assets/svgs/menu.svg";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleLogoutClick = () => {
  //   navigate("*"); //Navigate
  // };

  return (
    <HeaderContainer>
      <NavGroupLogo to="/">
        <NavLogoIcon src={logoImage} alt="motion logo" />
        <NavLogoText>Motion</NavLogoText>
      </NavGroupLogo>

      <NavGroupLink to="/feed">
        <NavItemIcon src={postsImage} alt="posts icon" />
        <NavItemText>Posts</NavItemText>
      </NavGroupLink>

      <NavGroupLink to="/">
        <NavItemIcon src={findFriends} alt="find friends icon" />
        <NavItemText>Find Friends</NavItemText>
      </NavGroupLink>

      <Bell src={bell} alt="notification bell icon" />

      <NavGroupAvatar>
        <Avatar src={avatar} alt="Avatar" onClick={handleDropdownToggle} />
        {showDropdown && <DropDownMenu />}
      </NavGroupAvatar>

      <NavItemIcon src={menu} alt="Menu" />
    </HeaderContainer>
  );
};

export default Header;
