import React from 'react'
import styled from 'styled-components';
// import ImgLogo from "/images/logo.svg"

function index() {
  return (
    <Wrapper>
      <Container>
        <HeaderLine>
          <Logo >
            <img src="/images/logo.svg" />
          </Logo>
          <HotLine>
            <HotLineItem>
              <ImageHotLine >
                <img src="/images/icon.png" />
              </ImageHotLine>
              <Phone>
                <p style={{ opacity: "0.7" }}>Numéro de téléphone</p>
                <p style={{ fontSize: "22px" }}> +33 (0) 1 84 20 35 45</p>
              </Phone>
            </HotLineItem>
          </HotLine>
          <BtnChangeLanguage>
            <ItemChangeLanguage style={{ backgroundColor: "#273040", color: "#d6cbc5" }}>
              Fr
            </ItemChangeLanguage>
            <ItemChangeLanguage style={{ border: "1px solid #727270", backgroundColor: "#ebded6" }}>
              En
            </ItemChangeLanguage>
          </BtnChangeLanguage>
        </HeaderLine>
      </Container>
    </Wrapper >
  )
}

export default index

const Wrapper = styled.div`
  padding: 60px 0 60px ;
  background: #ebded6 0 0 no-repeat padding-box;
  opacity: 1;
  position: relative;
  z-index:1;
  @media screen and (max-width: 1024px ) {
    position: relative;
    padding: 0;
  }
  @media screen and (max-width: 575px ) {
    padding-bottom: 10px;
    padding: 0;
  }
`
const Container = styled.div`
  max-width: 1430px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`
const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;

  @media screen and (max-width: 1024px ) {
    flex-direction: column-reverse;
    padding: 10px;
  }
  @media screen and (max-width: 575px ) {
    flex-direction: column-reverse;
  }
 
`
const Logo = styled.div`
  img {
    height: 66px;
    object-fit: cover; 
  }
  @media screen and (max-width: 1024px ) {
    padding: 10px 0;
  }
  @media screen and (max-width: 575px ) {
    padding: 10px 0;
  }
  
`
const HotLine = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
  padding-right: 40px;

  @media screen and (max-width: 1024px ) {
    justify-content: flex-start;
    border-bottom: 2px solid black;
  }
  @media screen and (max-width: 575px ) {
    justify-content: flex-start;
    border-bottom: 2px solid black;
  }
`
const HotLineItem = styled.div`
  display: grid;
  grid-template-columns: 51px auto;
  grid-gap: 65px;
`
const Phone = styled.div`
  p{
    margin-top: 8px;
    font-weight: bold;
    color: #273040;
    font-family: Poppins Bold;
  }
`
const ImageHotLine = styled.p`
  img{
    height: 51px;
    width: 51px;
    object-fit: cover; 
  }
`

const BtnChangeLanguage = styled.div`
  @media screen and (max-width: 1024px ) {
    position: absolute;
    right:10px;
    top: 10px;
  }
  @media screen and (max-width: 575px ) {
    position: absolute;
    right:10px;
    top: 10px;
  } 
`

const ItemChangeLanguage = styled.button`
  width: 42px;
  height: 36px;
  margin: 10px;
`;