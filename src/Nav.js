import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'


export default class extends React.Component {
  state = {
    isMenuOpen: false
  }

  onMenuToggle = () => {
    this.setState(({ isMenuOpen }) => {
      return {
        isMenuOpen: !isMenuOpen
      }
    })
  }

  render() {
    const { isMenuOpen } = this.state
    const icon = isMenuOpen ? (
      <i class="fa fa-times" aria-hidden="true"></i>
    ) : (
        <i class="fa fa-bars" aria-hidden="true"></i>
      )
    return (
      <div>
        <Menu>
          {link.map(({ id, to, link }) => (
            <MenuItem key={id}>
              <NavLink to={to}>{link}</NavLink>
            </MenuItem>
          ))}
        </Menu>

        <DropdownBtn onClick={this.onMenuToggle}>{icon}</DropdownBtn>
        {isMenuOpen && (
          <Dropdown>
            <MobMenu>
              {link.map(({ id, to, link }) => (
                <MobMenuItem key={id}>
                  <MobMenuLink to={to}>{link}</MobMenuLink>
                </MobMenuItem>
              ))}
            </MobMenu>
          </Dropdown>
        )}
      </div>
    )
  }
}

const link = [
  {
    id: 1,
    to: '/',
    link: 'Home'
  },
  {
    id: 2,
    to: '/about',
    link: 'About Us'
  },
  {
    id: 3,
    to: '/ratings',
    link: 'Ratings'
  },
  {
    id: 4,
    to: '/login',
    link: 'Login'
  }
]

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  display: none;
`
const MenuItem = styled.li`
  margin-left: 40px;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
const DropdownBtn = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  margin-top: 10px;
  font-size: 22px;
  color: #000000;
  display: block;
`

const Dropdown = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  background: #fff;
  color: #000000;
  z-index: 90;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
`
const MobMenu = styled.ul`
  list-style-type: none;
  padding-bottom: 20px;
  list-style-type: none;
  padding-bottom: 20px;
`

const MobMenuItem = styled.li`
  line-height: 2;
  cursor: pointer;
`

const MobMenuLink = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
`

