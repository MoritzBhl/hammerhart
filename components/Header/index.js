import styled from "styled-components";
import MenuIcon from "@/public/image/menuIcon.svg";
import MenuIconOpen from "@/public/image/menuIconOpen.svg";
import Facebook from "@/public/image/facebook.svg";
import Instagram from "@/public/image/instagram.svg";
import X from "@/public/image/x-icon.svg";
import Youtube from "@/public/image/youtube.svg";
import HammerhartLogo from "@/public/image/hammerhart_logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <StyledNavBar>
      <StyledAnchor href="/">
        <StyledLogo />
      </StyledAnchor>
      <StyledMenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
      </StyledMenuIcon>
      {isMenuOpen && (
        <StyledBackground onClick={closeMenu}>
          <StyledDiv onClick={(event) => event.stopPropagation()}>
            <StyledNavList>
              <li>
                <StyledListElements href="/bookmarks">My Projects</StyledListElements>
              </li>
            </StyledNavList>
            <StyledSocalList>
              <li>
                <a href="http://www.facebook.com/" target="_blank">
                  <StyledSocialMediaIcon>
                    <Facebook />
                  </StyledSocialMediaIcon>
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com/" target="_blank">
                  <StyledSocialMediaIcon>
                    <Instagram />
                  </StyledSocialMediaIcon>
                </a>
              </li>
              <li>
                <a href="http://www.x.com/" target="_blank">
                  <StyledSocialMediaIcon>
                    <X />
                  </StyledSocialMediaIcon>
                </a>
              </li>
              <li>
                <a href="http://www.youtube.com/" target="_blank">
                  <StyledSocialMediaIcon>
                    <Youtube />
                  </StyledSocialMediaIcon>
                </a>
              </li>
            </StyledSocalList>
          </StyledDiv>
        </StyledBackground>
      )}
    </StyledNavBar>
  );
}
const StyledAnchor = styled.a`
  display: block;
  font-size: 0;
  z-index: 2;
  `;
const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;
const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  list-style: none;
  padding-right: 1.563rem;
`;

const StyledSocalList = styled(StyledNavList)`
  flex-direction: row;
  width: 100100%;
  padding-right: 1.563rem;
  gap: 2rem;
  -webkit-tap-highlight-color: transparent;
  list-style: none;
  justify-content: end;
  align-items: center;
`;
const StyledSocialMediaIcon = styled.div`
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.3);
  }
`;

const StyledNavBar = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  align-items: center;
  height: 80px;
  padding: 16px 25px;
  justify-content: space-between;
 background-color: #536f5f;
  filter: drop-shadow(0px 4px 4px #00000049);
  z-index: 110;
`;

const StyledLogo = styled(HammerhartLogo)`
  width: 5rem;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

const StyledMenuIcon = styled.div`
  display: block;
  font-size: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  position: fixed;
  gap: 5rem;
  padding-bottom: 1rem;
  top: 0;
  right: 0;
  width: 100%;
  height: 290px;
  background-color: #536f5f;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  animation: fadeInNav 0.4s ease 0s 1 normal forwards;
  @keyframes fadeInNav {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
    }
  }
`;

const StyledListElements = styled.a`
  display: flex;
  align-self: self-end;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.563rem;
  color: #f9f5eb;
  text-decoration: none;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;
