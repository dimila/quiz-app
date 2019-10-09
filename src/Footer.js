import React from 'react'
import styled from 'styled-components'

export default () => (
  <Footer>
    <FooterContainer>
      <FooterInfo>
        <FooterInfoDescription>
          <FooterInfoName>Dimitri Milayev</FooterInfoName>
          Eiffestr. 604c, 20537 Hamburg
          <FooterInfoEmail href="#">dm.events@gmx.com</FooterInfoEmail>
          <FooterCopy>&copy; 2019 by Dimitri Milayev</FooterCopy>
        </FooterInfoDescription>
      </FooterInfo>
    </FooterContainer>
  </Footer>
)

const Footer = styled.footer`
  padding-top: 65px;
  padding-bottom: 80px;
  background-color: #0080fe;
  @media (max-width: 640px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
const FooterContainer = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  @media (max-width: 640px) {
    margin-top: 30px;
  }
`
const FooterInfoDescription = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: white;
`
const FooterInfoName = styled.span`
  display: flex;
`
const FooterInfoEmail = styled.a`
  display: flex;
  color: white;
  text-decoration: none;
`

const FooterCopy = styled.div`
  margin-top: 30px;
  font-size: 15px;
  color: white;
`
