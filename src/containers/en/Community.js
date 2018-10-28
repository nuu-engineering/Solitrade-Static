import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import MapImg from './../images/new-business-map.png'

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

const PageLayout = () => (
  <ResponsiveContainer
    urlString="community">
    <Container text textAlign="center">
      <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
        OUR <span style={{color:"#2185d0"}}>COMMUNITY</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: "10%",
          border: "1px solid #2185d0",
        }}/>
      </Header>
    </Container>

    <Image centered src={MapImg} />

    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
