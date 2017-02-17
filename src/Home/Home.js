import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const Root = styled.main`
  text-align: center;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Intro = styled.p`
  font-size: larger;
`;

class Home extends Component {
  render() {
    return (
      <Root>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to IceBreaker</h2>
        </Header>
        <Intro>
          Ready to break the ice?
        </Intro>
      </Root>
    );
  }
}

export default Home;
