import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <Container >
        <WrapText>
          <Title>Examples of our achievements</Title>
          <Description>Découvrez à présent quelques exemples de détourage et de retouche photo <br /> réalisés par nos équipes.</Description>
          <Button>
            <ItemButton>Voir plus d’exemples</ItemButton>
          </Button>
        </WrapText>
      </Container>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
background: #ebded6 ;
  height: calc(1300px - 235px);
  margin-top: -220px;
  padding-top: 380px;
`
const Container = styled.div`
  max-width: 1430px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

`
const WrapText = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px ) {
    flex-direction: column;
  }
  @media screen and (max-width: 575px ) {
    flex-direction: column;
  }
`

const Title = styled.div`
max-width: 488px;
font-size: 50px;
font-family: "Poppins Bold";
flex: 0 0 488px;
line-height: 62.5px;
color: #282d40;
text-align: left;
@media screen and (max-width: 1024px ) {
  padding-left: 128px;
  max-width: 100%;
  flex: 0 0 100%;
  text-align: left;
  margin-bottom: 25px;
  font-size: 35px;
  line-height: 45px;
}
@media screen and (max-width: 575px ) {
  padding-left: 50px;
  font-size: 25px;
}
`

const Description = styled.div`
  flex: 1;
  padding-left: 128px;
  margin-bottom: 29px;
  @media screen and (max-width: 1024px ) {
  padding-left: 128px;
  font-size: 20px;
  }
  @media screen and (max-width: 575px ) {
    padding-left: 50px;
    font-size: 16px;
  }
`
const Button = styled.a`
  padding-left: 616px;
  position: relative;
  &:before{
    content: '⟶';
    display: inline-block;
    max-width: 45px;
    line-height: 19px;
    font-size: 40px;
    position: absolute;
    top: -1px;
    color: #273040;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 1024px ) {
    padding-left: 128px;
  }
  @media screen and (max-width: 575px ) {
    padding-left: 50px;
  }
`
const ItemButton = styled.a`
  text-decoration: none;
  color: #273040;
  font-size: 20px;
  font-family: "Poppins SemiBold";
  margin-left: 60px;
  padding-bottom: 5px;
  border-bottom: 1px solid #273040; 
 

`
const Product = styled.div`

`
