import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <div className='container'>
      <Wrapper>
        <CardService>
          <CardFirst >
            <span>Nos Services En détail</span>
            <p>Nous contrôlons <br /> systématiquement le <br />travail de nos opérateurs</p>
          </CardFirst>
        </CardService>
        <Card style={{ backgroundColor: "#525864" }}>
          <CardIcon><img src='/images/icon-01.png' /></CardIcon>
          <CardTitle>Détourage</CardTitle>
          <CardDesc>Remplacer les fonds de studio imparfaits par le fond de votre choix</CardDesc>
          <CardButton>Envoyer vos images</CardButton>
        </Card>
        <Card style={{ backgroundColor: "#676e78" }}>
          <CardIcon><img src='/images/icon-02.png' /></CardIcon>
          <CardTitle>Ombres et Reflets</CardTitle>
          <CardDesc>Apporter de la perspective et de la profondeur à vos prises de vues.</CardDesc>
          <CardButton>Envoyer vos images</CardButton>
        </Card>
        <Card style={{ backgroundColor: "#7e828d" }}>
          <CardIcon><img src='/images/icon-03.png' /></CardIcon>
          <CardTitle>Mannequin Ghost</CardTitle>
          <CardDesc>Combiner plusieurs images pour mettre votre produit en valeur</CardDesc>
          <CardButton>Envoyer vos images</CardButton>
        </Card>
      </Wrapper>
    </div>
  )
}

export default index

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 519px;
  z-index: 10;
  @media screen and (max-width: 1024px ) {
    justify-content: center;
    padding: 0 100px;
  }
  @media screen and (max-width: 575px ) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  } 
`
const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10px;
  @media screen and (max-width: 1024px ) {
    width: 100%;
  }
  @media screen and (max-width: 575px ) {
    width: 100%;
  } 
  
`
const CardFirst = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 519px;
  flex: 0 0 100%;
  background: url(/images/back-mini.png) 0 0 no-repeat;
  padding: 0 38px 0 41px;
  span{
    font-size: 50px;
    color: #fff;
    line-height: 57px;
    font-weight: 700;
    margin: 37px 0 23px;
    max-width: 220px;
    font-family: "Poppins Bold";
  }
  p{
    margin: 0;
    color: #a3a2a7;
    font-size: 20px;
    line-height: 26px;
    font-family: "Poppins Light";
    text-align: center;
  }
  @media screen and (max-width: 1024px ) {
    display: none;
  }
  @media screen and (max-width: 575px ) {
    display: none;
  }   
`
const CardService = styled.div`
  max-width: 25%;
  @media screen and (max-width: 1024px ) {
    width: 0;
  }
  @media screen and (max-width: 575px ) {
    width: 0;
  } 
`
const CardIcon = styled.div`
  img{
    width: 100%;
  }
`
const CardTitle = styled.p`
  font-size: 26px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: "Poppins Bold";       
  
  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
  @media screen and (max-width: 575px){
    font-size: inherit;
  }
`
const CardDesc = styled.p`
  margin: 0;
  color: #a3a2a7;
  font-size: 20px;
  line-height: 26px;
  font-family: "Poppins Light";
  @media screen and (max-width: 1024px){
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 575px){
    font-size: inherit;
  }
`
const CardButton = styled.a`
  margin-top: 50px;
  background: #fff;
  color: #273040;
  display: inline-block;
  font-weight: 300;
  box-shadow: 2px 2px 0 #00000029;
  transition: all .3s ease-in-out;
  font-size: 20px;
  line-height: 28px;
  padding: 16px 14px;
  font-family: "Poppins Light";
`

