import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.main`
  text-align: center;
`;

const Cards = styled.section`
  display: flex;
  justify-content: space-around;

`;

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 0 0 300px;
  min-height: 550px;
  min-width: 320px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const Portrait = styled.img`
  flex: 0 0 300px;
  border-radius: 5px 5px 0px 0px;
`;

const Title = styled.div`

`;

const Description = styled.div`
  padding: 15px 15px 40px 15px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

`;

const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: #c9abf4;
  }
`;

export default class About extends Component {
  render() {
    return (
      <Root>
        <h1>The Squad</h1>
        <Cards>
          <Card>
            <Portrait src="https://unsplash.it/200" />
            <Title>
              <h2>Igor</h2>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi odit eos ipsum eligendi temporibus alias consequatur velit cupiditate magni fuga nihil recusandae excepturi quam in, dolorem repellat provident illo officia!
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src="https://unsplash.it/200" />
            <Title>
              <h2>Joy</h2>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dolores maxime nisi magni soluta. Necessitatibus dignissimos voluptates, tenetur, at earum voluptas commodi aliquid nam quibusdam officia enim fugiat placeat accusamus.
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src="https://unsplash.it/200" />
            <Title>
              <h2>Mabel</h2>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quas eum fuga? Vel molestiae harum eius sapiente quisquam expedita amet quo iste in hic, repellendus minima odio distinctio ut laborum!
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src={require("../../images/wei.jpg")} />
            <Title>
              <h2>Wei</h2>
              <Description>
                Wei Shi is a computer science student at City University of New York, minoring in physics and mathematics, graduating in May 2017. Although C++ is his main programming language, he has experience in Java, JavaScript, and Python. Check out his webpage <Link href="https://theonlywei.github.io/">here</Link>.
              </Description>
            </Title>
          </Card>
        </Cards>
      </Root>
    )
  }
}
