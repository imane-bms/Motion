import {
  DropdownMenu,
  DropdownMenuLink,
  NavItemText,
  NavLogoIcon,
} from "./styles";

import login from "../../assets/images/login.png";
import user from "../../assets/images/user.png";

function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuLink to="/user/me">
        <NavLogoIcon src={user} alt="User" />
        <NavItemText>Profile</NavItemText>
      </DropdownMenuLink>

      <DropdownMenuLink to="/">
        <NavLogoIcon src={login} alt="Login Icon" />
        {/* <DropdownMenuItemText onClick={handleLogoutClick}> */}
        <NavItemText>Logout</NavItemText>
        {/* </DropdownMenuItemText> */}
      </DropdownMenuLink>
    </DropdownMenu>
  );
}

export default DropDownMenu;
