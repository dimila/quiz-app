import React from 'react'
import styled from 'styled-components'
import einsteinLogo from './assets/einstein2.svg'

const Header = styled.div`
  padding: 10px 0 15px 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  background-color: #0080fe;
`

const Headerlogo = styled.img`
  width: 74px;
  height: 70px;
  color: transparent;
`

export default () => (
  <Header>
    <Headerlogo
      //   src={
      //     'https://static.wixstatic.com/media/fabf0a_4bfdc02320534564b006589a3e7a9527~mv2.png/v1/fill/w_114,h_50,al_c,q_80,usm_0.66_1.00_0.01/monkey-quiz-logo.webp'
      //   }
      src={einsteinLogo}
      alt="Einstein Logo"
    />
  </Header>
)
