import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';
import Navigation from './Navigation'

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

class App extends Component {
  render() {
    return (
      <Root>
        <Navigation />
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to IceBreaker</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Root>
    );
  }
}

export default App;
