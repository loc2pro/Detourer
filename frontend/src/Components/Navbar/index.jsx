import React from 'react'
import styled from 'styled-components';

const index = () => {
  return (
    <Container >
      <Wrapper>
        <WrapNarbar>
          <Narbar>
            <NarbarIcon>
              <LinkNavBar href='#'>Accueil</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'>Détourage</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'>Ombres et reflets</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'>  Mannequin Ghost</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'> Comment ça marche ?</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'>Tarifs</LinkNavBar>
            </NarbarIcon>
            <NarbarIcon>
              <LinkNavBar href='#'>Contact</LinkNavBar>
            </NarbarIcon>
          </Narbar>
        </WrapNarbar>
        <Account>
          <AccountIcon>
            <AccountItem>
              <LinkAccount>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span style={{ margin: "10px", fontWeight: "700", color: "#ebded6", fontSize: "14px" }}>Mon Panier</span>
              </LinkAccount>
              <LinkAccount>
                <i class="fa fa-user-circle-o" aria-hidden="true" ></i>
                <span style={{ margin: "10px", fontWeight: "700", color: "#ebded6", fontSize: "14px" }}>Se connecter</span>
              </LinkAccount>
            </AccountItem>
          </AccountIcon>
        </Account>
      </Wrapper>
    </Container>

  )
}

export default index

const Container = styled.div`
  position: sticky;
  top: 0;
  max-width: 1430px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  z-index: 10;

  @media screen and (max-width: 1024px ) {
    display: none;
  }
  @media screen and (max-width: 575px ) {
    display: none;
  }
`

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #282f3f;
  display: flex;
  z-index: 10;
`
const WrapNarbar = styled.div`
  margin: 0;
  padding: 0;
`
const Narbar = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const NarbarIcon = styled.li`
  border-right: 1px solid #fff;
  list-style-type: none;
`
const LinkNavBar = styled.a`
  color : #fff;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  padding: 25px;
  font-weight: bold;
  display: inline-block;
  box-sizing: border-box;

  &:after {
    content: "";
    position: absolute;
    background-color: #ebded6;
    height: 7px;
    width: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: all .3s ease-out;
  }

  &:hover:after{
    width: 100%;
  }
  

`
const Account = styled.div`
  flex:1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

`
const AccountIcon = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const AccountItem = styled.li`
  padding: 0 10px;
  list-style-type: none;
  margin: 5px;
`
const LinkAccount = styled.a`
  color : #fff;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  height: 20px;
`