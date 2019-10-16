import React from 'react'
import styled from 'styled-components'

export default () => (
  <Footer>
    <FooterContainer>
      <FooterSubscribe>
        <FooterHead>
          Subscribe for WhatsApp <br /> Updates
        </FooterHead>
        <form>
          <FooterInput type="number" placeholder="Your phone number" />
          <FooterButton>subscribe</FooterButton>
        </form>
      </FooterSubscribe>
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

const FooterInput = styled.input`
  font-size: 13px;
  font-weight: 700;
  background-color: #8abdcf;
  color: #fff;
  border: none;
  border: 3px solid #ff4040;
  border-radius: 10px;
  padding: 13px 20px 13px 13px;
`

const FooterButton = styled.button`
  font-size: 13px;
  padding: 15px 30px;
  border: none;
  color: #fff;
  margin-left: 10px;
  background-color: #ff5052;
  border-radius: 10px;
  @media (max-width: 640px) {
    margin-top: 10px;
  }
`

const FooterSubscribe = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
`

const FooterHead = styled.h3`
  font-size: 28px;
  color: #2a2f36;
  margin-bottom: 30px;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`

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
