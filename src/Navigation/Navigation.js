import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding-bottom: 4px;
  box-shadow: 0 2px rgba(0,0,0,0.25);

  > ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;

    > li {
      height: 25px;
      margin-right: 0px;
      border-right: 1px solid #aaa;
      padding: 0 20px;

      &:last-child {
        border-right: none;
      }

      > a {
        text-decoration: none;
        color: #ccc;
        font: 25px/1 Helvetica, Verdana, sans-serif;
        text-transform: uppercase;
        transition: all 0.5s ease;

        &:hover {
          color: #666;
        }
      }
    }
  }
`;

export default class Navigation extends React.Component{
  render() {
    return (
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </Nav>
    )
  }
}
