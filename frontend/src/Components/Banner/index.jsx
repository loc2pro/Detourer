import React from "react";
import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <img src="/images/Banner-home.png" />
      <div className="container">
        <Content>
          <Title>
            Optimiser vos visuels pour le e-commerce
          </Title>
          <Description>
            <p>Le <strong>détourage de photos</strong> s’adresse aux <br />
              e-commerçants, photographes, graphistes <br />
              ou webdesigners qui souhaitent mettre en<br />
              valeur les photos de leurs produits.</p>
          </Description>
          <Button href="#">
            En savoir plus
          </Button>
        </Content>
      </div>
    </Wrapper>
  )
}

export default index;

const Wrapper = styled.div`
  margin-top: -80px;
  position: relative;
  img{
  width: 100%;
  min-height: 600px;
  object-fit: cover; 
  }
`
const Content = styled.div`
  position: absolute;
  top: 199px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;  
`
const Title = styled.p`
  max-width: 652px;
  font-size: 55px;
  line-height: 71px;
  color: #273040;
  font-family: "Poppins Bold";
  margin-bottom: 60px;
  text-transform: uppercase;  
  @media screen and (max-width: 1024px ) {
    font-size: 35px;
    line-height: 45px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 575px ) {
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 15px;
  }      
`
const Description = styled.p`
  font-size: 22px;
  line-height: 32px;
  color: #727270;
  font-family: "Poppins Light";

  @media screen and (max-width: 1024px ) {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 575px ) {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 15px;
  }   
`
const Button = styled.a`
  background: #fff;
  color: #273040;
  display: inline-block;
  font-weight: 300;
  padding: 18px 41px;
  box-shadow: 2px 2px 0 #00000029;
  font-size: 18px;
  line-height: 25px;
  transition: all .3s ease-in-out;
  font-family: "Poppins Light";
  text-decoration: none;
  &:hover{
    background: #eaeaea;
    color: #273040
    transition: all .3s ease-in-out
  }
`