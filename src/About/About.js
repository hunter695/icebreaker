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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const Portrait = styled.img`
  flex: 0 0 300px;
  max-height: 300px;
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
            <Portrait src={require("../../images/igor.jpg")} />
            <Title>
              <h2>Igor</h2>
              <Description>
                <p>Web Developer</p>
                <p>I have experience in a multitude of technologies and am currectly focusing on modern web tools.</p>
                <a href="http://igorgee.xyz">Website</a><br/>
                <a href="https://github.com/igorgee">Github</a>
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src={require("../../images/joy.jpg")} />
            <Title>
              <h2>Joy</h2>
              <Description>
                Computer science major and theater minor at Hunter College. Will be graduating May 2017. Programs mainly in C++ but spreading out to Nodejs and Python. Doesn't like the color pink. Likes long walks on the beach...Basically long walks anywhere.
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src="https://unsplash.it/200" />
            <Title>
              <h2>Mabel</h2>
              <Description>
                I am a senior at Hunter College with a major in Computer Science. I am interested in creating mobile applications. I have experience working with java, c++ and python. I am currently learning more about web development using Javascript, React as well as various database programs. I look forward to working with my teammates to create a Web app that is user friendly and a fun experience.
              </Description>
            </Title>
          </Card>
          <Card>
            <Portrait src={require("../../images/wei.jpg")} />
            <Title>
              <h2>Wei</h2>
              	<Description>
					<p>I am computer science student at City University of New York, minoring in physics and mathematics, graduating in May 2017. C++ is my main programming language, but I also have experience in Java, JavaScript, and Python.</p> 
					<a href="https://theonlywei.github.io/">Website</a><br/>
                	<a href="https://github.com/TheOnlyWei">Github</a>
              </Description>
            </Title>
          </Card>
        </Cards>
      </Root>
    )
  }
}
