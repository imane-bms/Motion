import logo from "../../../assets/images/logo_white.png";
import apple from "../../../assets/svgs/apple.svg";
import google from "../../../assets/svgs/google.svg";
import instagram from "../../../assets/svgs/instagram_icon.svg";
import twitter from "../../../assets/svgs/twitter_icon.svg";
import facebook from "../../../assets/svgs/facebook_icon.svg";
import {
  Copyright,
  Description,
  Logo,
  LogoContainer,
  SocialIcon,
  SocialLinks,
  SocialLinksContainer,
  StoreContainer,
  StoreIcon,
} from "./stylesLeft";
import { LeftRoot } from "../styles";

const LeftAuthor = () => {
  return (
    <LeftRoot>
      <LogoContainer>
        <Logo>
          <img loading="lazy" alt="" src={logo} />
          <h1>Motion</h1>
        </Logo>

        <Description>
          Connect with friends and the world around you with Motion.
        </Description>

        <StoreContainer>
          <StoreIcon>
            <img alt="apple icon" src={apple} />
          </StoreIcon>
          <StoreIcon>
            <img alt="google icon" src={google} />
          </StoreIcon>
        </StoreContainer>
      </LogoContainer>

      <SocialLinksContainer>
        <SocialLinks>
          <SocialIcon loading="lazy" alt="" src={instagram} />
          <SocialIcon loading="lazy" alt="" src={twitter} />
          <SocialIcon loading="lazy" alt="" src={facebook} />
        </SocialLinks>
        <Copyright>{`© Motion 2018. All rights reserved. `}</Copyright>
      </SocialLinksContainer>
    </LeftRoot>
  );
};

export default LeftAuthor;
