import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media screen and (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  &.actual-page {
    border-bottom: 2px solid white;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={'/'} activeClassName="actual-page">
        Inicio
      </NavLink>
      <NavLink to={'/nosotros'} activeClassName="actual-page">
        Nosotros
      </NavLink>
      <NavLink to={'/propiedades'} activeClassName="actual-page">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
