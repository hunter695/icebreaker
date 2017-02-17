import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 20px;

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </Nav>
    )
  }
}
