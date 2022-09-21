import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <div className='container'>
      <Wrapper>
        <Card>
          <CardImage src='/images/qualite.png'></CardImage>
          <CardTitle>ENGAGEMENT</CardTitle>
          <CardDesc>QUALITÉ</CardDesc>
        </Card>
        <Card>
          <CardImage src='/images/Delais.png'></CardImage>
          <CardTitle>ENGAGEMENT</CardTitle>
          <CardDesc>QUALITÉ</CardDesc>
        </Card>
        <Card>
          <CardImage src='/images/Tarifaire.png'></CardImage>
          <CardTitle>ENGAGEMENT</CardTitle>
          <CardDesc>QUALITÉ</CardDesc>
        </Card>
        <Card>
          <CardImage src='/images/Support.png'></CardImage>
          <CardTitle>ENGAGEMENT</CardTitle>
          <CardDesc>QUALITÉ</CardDesc>
        </Card>
      </Wrapper>
    </div>
  )
}

export default index

const Wrapper = styled.div`
  display: flex;
  padding: 100px 0 200px 0 ;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px ) {
    flex: 0 0 50%;
    padding: 50px;
  }
  @media screen and (max-width: 575px ) {
    flex: 0 0 100%;
    padding: 50px;
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CardTitle = styled.p`
  color: #9fa4a8;
  font-size: 28px;
  text-transform: uppercase;
  margin: 0;
  line-height: 47px;
`
const CardDesc = styled.p`
  font-size: 40px;
  color: #273040;
  font-family: "Poppins SemiBold";
  margin: 0;
  line-height: 47px;
  text-transform: uppercase;
`