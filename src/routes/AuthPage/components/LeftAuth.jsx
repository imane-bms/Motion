import styled from "styled-components";

const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0rem;
  top: 0.625rem;
  transform: scale(1.75);
`;
const WrapperLogoIcon = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Motion = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.75px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Logo = styled.div`
  width: 12.938rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem 0rem;
`;
const P = styled.div`
  width: 16.25rem;
  position: relative;
  font-size: var(--font-size-base);
  line-height: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
  mix-blend-mode: normal;
`;
const CombinedShapeIcon = styled.img`
  align-self: stretch;
  height: 1.088rem;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const StoreIcon = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gray-200);
  padding: var(--padding-3xs);
  background-color: transparent;
  flex: 1;
  border-radius: var(--br-11xl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CombinedShapeIcon1 = styled.img`
  align-self: stretch;
  height: 0.963rem;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const StoreContainer = styled.div`
  width: 13.438rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.75rem;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.875rem 0rem;
`;
const CombinedShapeIcon2 = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  min-height: 2.5rem;
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1rem;
  opacity: 0.5;
  mix-blend-mode: normal;
`;
const Motion2018All = styled.div`
  position: relative;
`;
const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem 0rem;
  font-size: var(--font-size-xs);
`;
const LeftRoot = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-21xl);
  box-sizing: border-box;
  gap: 7.5rem 0rem;
  background: linear-gradient(rgba(118, 38, 168, 0.616), rgba(110, 145, 246, 0.5)), url('/background_image.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 36rem;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-white);
  font-family: var(--font-roboto);
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 7.5rem 0rem;
  }
`;

const LeftAuthor = () => {
  return (
    <LeftRoot>
      <LogoContainer>
        <Logo>
          <WrapperLogoIcon>
            <LogoIcon loading="lazy" alt="" src="/motion_logo_icon.svg" />
          </WrapperLogoIcon>
          <Motion>Motion</Motion>
        </Logo>
        <P>Connect with friends and the world around you with Motion.</P>
        <StoreContainer>
          <StoreIcon>
            <CombinedShapeIcon alt="" src="/app_store_icon.svg" />
          </StoreIcon>
          <StoreIcon>
            <CombinedShapeIcon1 alt="" src="/play_store_icon.svg" />
          </StoreIcon>
        </StoreContainer>
      </LogoContainer>
      <SocialLinksContainer>
        <SocialLinks>
          <CombinedShapeIcon2 loading="lazy" alt="" src="/twitter_icon.svg" />
          <CombinedShapeIcon2 loading="lazy" alt="" src="/facebook_icon.svg" />
          <CombinedShapeIcon2 loading="lazy" alt="" src="/instagram_icon.svg" />
        </SocialLinks>
        <Motion2018All>{`© Motion 2018. All rights reserved. `}</Motion2018All>
      </SocialLinksContainer>
    </LeftRoot>
  );
};

export default LeftAuthor;