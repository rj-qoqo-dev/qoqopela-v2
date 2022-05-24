import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to={"/signin"}>Link</FooterLink>
                <FooterLink to={"/signin"}>Link </FooterLink>
                <FooterLink to={"/signin"}>Link</FooterLink>
                <FooterLink to={"/signin"}>Link</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to={"/signin"}>Link</FooterLink>
                <FooterLink to={"/signin"}>Link</FooterLink>
                <FooterLink to={"/signin"}>Link</FooterLink>
                <FooterLink to={"/signin"}>Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer