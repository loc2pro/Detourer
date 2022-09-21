import React from 'react'
import styled from 'styled-components';


const index = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Button>NOS SERVICES</Button>
        <Title>La photo d’un produit étant le premier critère d’achat sur Internet,<br />
          il est important de ne pas négliger le détourage et la retouche de vos images.</Title>
        <Description>Confier cette tâche à Detourer-photo.com c’est vous assurer que vos photos deviendront de véritables arguments de vente</Description>
      </div>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
  text-align: center;
  min-height: 50vh;
`
const Button = styled.button`
  margin-bottom: 60px;
  border: 1px solid #f3eeea;
  background: #f3eeea;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #273040;
  display: inline-block;
  padding: 17px 36px 14px;
  font-family: "Poppins Medium";
  letter-spacing: 3.42px;
 
`

const Title = styled.p`
  font-size: 30px;
  line-height: 44.5px;
  font-weight: 500;
  color: #273040;
  font-family: "Poppins Medium";
  @media screen and (max-width: 1024px ) {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 575px ) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
  }   
`
const Description = styled.p`
  color: #727270;
  font-size: 22px;
  font-weight: 300;
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