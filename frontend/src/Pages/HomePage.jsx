import React from 'react'
import styled from 'styled-components';
import Headline from "../Components/Headline"
import Narbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import Content from "../Components/Content"
import Service from "../Components/Service"
import ContentMain from "../Components/ContentMain"
import Product from "../Components/Product"
import ContentSecond from "../Components/ContentSecond"
import ContentBottom from "../Components/ContentBottom"
import Footer from "../Components/Footer"

function HomePage() {
  return (
    <Wrapper>
      <Headline />
      <Narbar />
      <Banner />
      <div style={{ height: "100px", width: "100%", color: "#fff" }}></div>
      <Content />
      <Service />
      <ContentMain />
      <Product />
      <ContentSecond />
      <ContentBottom />
      <Footer />
    </Wrapper>
  )
}

export default HomePage
const Wrapper = styled.div`
  height: 100%;
  width: 100%
`