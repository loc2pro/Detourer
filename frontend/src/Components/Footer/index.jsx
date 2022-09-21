import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Footer>
          <Left>Copyright 2021, tous droits réservés</Left>
          <Right>Mentions légales</Right>
        </Footer>
      </div>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
  background-color: #282f3f;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.p`
  font-size: 20px;
  color: #fff;
`
const Right = styled.p`
  font-size: 20px;
  color: #fff;
`
