import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Container >
      <Wrapper>
        <Card>
          <CardImage>
            <CardContainer>
              <CardOverlay >
                <LableBefore data-content="Before" id='before-label' />
                <LableAfter data-content="After" id='after-label' />
              </CardOverlay>
              <Icon></Icon>
              <Image>
                <a href='#'><ImageBefore src='/images/detourage-before.jpg' /></a>
                <a href='#'><ImageAfter src='/images/detourage-after.jpg' /></a>
              </Image>
            </CardContainer>
          </CardImage>
          <CardContent>
            <Title>Détourage</Title>
            <Description>Détourer une image est notre spécialité depuis de nombreuses années</Description>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <CardContainer>
              <CardOverlay >
                <LableBefore data-content="Before" id='before-label' />
                <LableAfter data-content="After" id='after-label' />
              </CardOverlay>
              <Icon></Icon>
              <Image>
                <a href='#'><ImageBefore src='/images/shadow-before.jpg' /></a>
                <a href='#'><ImageAfter src='/images/shadow-after.jpg' /></a>
              </Image>
            </CardContainer>
          </CardImage>
          <CardContent>
            <Title>Ombres et reflets</Title>
            <Description>Nous embellissons vos images pour mettre vos produits en valeur</Description>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <CardContainer>
              <CardOverlay >
                <LableBefore data-content="Before" id='before-label' />
                <LableAfter data-content="After" id='after-label' />
              </CardOverlay>
              <Icon></Icon>
              <Image>
                <a href='#'><ImageBefore src='/images/Ghost-before.jpg' /></a>
                <a href='#'><ImageAfter src='/images/Ghost-after.jpg' /></a>
              </Image>
            </CardContainer>
          </CardImage>
          <CardContent>
            <Title>Mannequin Invisible</Title>
            <Description>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</Description>
          </CardContent>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default index
const Container = styled.div`
  max-width: 1430px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px ) {
    max-width: 960px;
  }
  @media screen and (max-width: 575px ) {
    max-width: 540px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -393px;
`
const Card = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  width: 100%;
  padding: 0;
  position: relative;
  background: #282f3f;
`
const CardImage = styled.div`
  height: 390px;
`
const Image = styled.div`

`
const ImageBefore = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  display: block;
  z-index: 20;
  clip: rect(0px,234px,393px,0px);
  @media screen and (max-width: 1024px ) {
    clip: auto;
  }
  @media screen and (max-width: 575px ) {
    clip: auto;
  }

`
const ImageAfter = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  display: block;
  z-index: 10;
  clip: rect(0px,466px,393px,233px);
`
const CardContainer = styled.div`
  z-index: 0;
  overflow: hidden;
  position: relative;
  height: 390px;
  // background-color: rgba(0, 0, 0, 0.5);

`

const LableBefore = styled.div`
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  &:before{
    left: 10px;
    content: attr(data-content);
    top: 50%;
    margin-top: -19px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    line-height: 38px;
    padding: 0 20px;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    letter-spacing: 0.1em;
  }
 
`
const LableAfter = styled.div`
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  &:before{
    right: 10px;
    content: attr(data-content);
    top: 50%;
    margin-top: -19px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    line-height: 38px;
    padding: 0 20px;
    border-radius: 2px;
    color: white;
    font-size: 13px;
    letter-spacing: 0.1em;
  }

`
const CardOverlay = styled.div`
  position: absolute;
  transition-property: background;
  top: 0;
  width: 100%;
  height: 100%;
  transition-duration: 0.5s;
  background-color: rgba(0, 0, 0, 0);
  z-index: 25;
  &:hover{
    background: rgba(0, 0, 0, 0.5);
    ${LableBefore}, ${LableAfter}{
      opacity: 1
    }
  }
`
const Icon = styled.div`
  box-shadow: none;
  background-color: #273040;
  background-image: url(/images/ic.png);
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  height: 38px;
  width: 38px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -22px;
  margin-top: -22px;
  border-radius: 50%;
  box-shadow: 0px 0px 12px rgb(51 51 51 / 50%);
  z-index: 40;
  cursor: pointer;
  &:before{
    content: "";
    display: block;
    background: white;
    position: absolute;
    z-index: 30;
    box-shadow: none;
    background: #273040;
    width: 3px;
    height: 500px;
    left: 50%;
    bottom: 50%;
    margin-bottom: 20px;
  }
  &:after{
    content: "";
    display: block;
    background: white;
    position: absolute;
    z-index: 30;
    box-shadow: none;
    background: #273040;
    width: 3px;
    height: 500px;
    left: 50%;
    top: 50%;
    margin-top: 20px;
  }
`
const CardContent = styled.div`
  padding: 38px 58px;
  background-color: #282f3f;
`
const Title = styled.div`
  font-size: 28px;
  line-height: 1;
  color: #fff;
  font-family: "Poppins Medium";
`
const Description = styled.div`
  color: #9fa4a8;
  font-size: 20px;
  line-height: 26px;
  font-family: "Poppins MediumItalic";
  margin-top: 30px;
`