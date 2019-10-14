import React from 'react'
import styled from 'styled-components'
import einsteinLogo from './assets/einstein2.svg'
import Nav from './Nav'
import { Link } from 'react-router-dom'

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
  width: 34px;
  height: 35px;
  color: transparent;
`

export default () => (
  <Header>
    <Link to="/">
      <Headerlogo src={einsteinLogo} alt="Einstein Logo"></Headerlogo>
    </Link>
    <Nav />
  </Header>
)
