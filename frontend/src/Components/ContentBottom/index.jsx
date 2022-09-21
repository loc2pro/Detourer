import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <Container >
        <Content>
          <ContentLeft>
            <Image >
              <img src='/images/detourer-thumbnail-video.png' />
            </Image>
            <TextLeft>
              <TitleLeft>
                COMMENT ÇA MARCHE ?</TitleLeft>
              <DescLeft>Cette vidéo vous explique <br />
                en détail nos services<br />
                et notre fonctionnement.</DescLeft>
              <ButtomVideo href="#">Play Video</ButtomVideo>
            </TextLeft>
          </ContentLeft>
          <ContentRight>
            <TextRight>
              <Number>1</Number>
              <TitleRight>Transmettez-nous vos images à détourer ou retoucher en un clic.</TitleRight>
              <DescRight>Chargez vos images sur notre plateforme et entrez vos préférences de traitement pour avoir un tarif sur mesure</DescRight>
            </TextRight>
            <TextRight>
              <Number>2</Number>
              <TitleRight>Paiement effectué ! Nous commençons le traitement</TitleRight>
              <DescRight>Nous traitons vos images en suivant méticuleusement vos consignes.</DescRight>
            </TextRight>
            <TextRight>
              <Number>3</Number>
              <TitleRight>Nous traitons votre demande sous 24h.</TitleRight>
              <DescRight>Après une étape rigoureuse de vérification, nous nous engageons
                à vous livrer sous 24h.
                Un mail vous sera envoyé pour vous avertir de la disponibilité de vos images.</DescRight>
            </TextRight>
          </ContentRight>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
  margin-bottom: 211px;
  padding-left: calc((100% - 1400px)/ 2);
`
const Container = styled.div`
  max-width: 100%;
  padding-right: 0;
`
const Content = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const ContentLeft = styled.div`
  flex: 0 0 40%;
  z-index: 9;
  max-width: 640px;
  position: relative;
  &:before{
    right: -39px;
    top: 121px;
    border-left: 78px solid #242d3a;
    border-top: 45px solid transparent;
    border-bottom: 45px solid transparent;
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 999;
  }
  &:after{
    right: -20px;
    top: 143px;
    border-left: 39px solid #fff;
    border-top: 23px solid transparent;
    border-bottom: 23px solid transparent;
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 999;
  }
  @media screen and (max-width: 1024px ) {
    margin: auto;
    padding: auto;
    &:before{
      opacity:0;
    }
    &:after{
      opacity:0;
    }
  }
  @media screen and (max-width: 575px ) {
    margin: auto;
    padding: auto;
    &:before{
      opacity:0;
    }
    &:after{
      opacity:0;
    }
  }
`

const Image = styled.div`
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(39,48,64,.82);
  }
`
const TextLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%,-50%);
  text-align: center;
`
const TitleLeft = styled.div`
  font-size: 50px;
  line-height: 60px;
  color: #fff;
  font-family: "Poppins Bold";
  margin-bottom: 24px;
  max-width: 340px;
  min-width: 340px;
  text-align: center;
`
const DescLeft = styled.div`
  color: #fff;
  font-size: 20px;
  line-height: 26px;
  font-family: "Poppins Light";
  text-align: center;
  margin-bottom: 24px;
}
`
const ContentRight = styled.div`
  background: #ebded6;
  transform: translateY(90px);
  margin-left: -136px;
  flex: 0 0 54%;
  padding: 50px 30px 0 220px;
  @media screen and (max-width: 1024px ) {
    flex: 0 0 100%;
    margin: auto;
    padding: auto;
  }
  @media screen and (max-width: 575px ) {
    flex: 0 0 100%;
    margin: auto;
    padding: auto;
  }
`
const TextRight = styled.div`
  max-width: 666px;
  margin-bottom: 58px;
  position: relative;
`
const TitleRight = styled.p`
  font-size: 26px;
  line-height: 36px;
  font-family: "Poppins Bold";
  color: #273040;
`
const DescRight = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: #a3a2a7;
`
const Number = styled.div`
  position: absolute;
  top: -73px;
  left: 0;
  font-size: 113px;
  line-height: 159px;
  font-family: "Poppins Light";
  color: #273040;
  opacity: .13;
  
`
const ButtomVideo = styled.a`
  display: inline-block;
  color: transparent;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 1px solid #ebded6;
  background: #ebded6;
  position: relative;
  font-size: 0;
  &:before{
    content: "";
    position: absolute;
    background: url('/images/play-button.svg') no-repeat;
    width: 40px;
    height: 40px;
    background-size: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  &:after{
    width: 109px;
    height: 109px;
    border-radius: 50%;
    background: rgba(255,255,255,.12);
    z-index: 1;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`
