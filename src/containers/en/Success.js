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
import Aerial from './../images/solitrade-aerial.jpg'

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = () => (
  <ResponsiveContainer
    urlString="about">
    <Container text textAlign='center'>
      <Header as='h1' style={{ fontSize: '2em', padding:"1em 0em", paddingTop: "2em" }}>
        THANKS FOR CONTACTING <span style={{color:"#2185d0"}}>US</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: "10%",
          border: "1px solid #2185d0",
        }}/>
      </Header>
    </Container>
    <Container as="h3" text textAlign="center" style={{ fontSize: "2em", paddingBottom: "15em"}}>
      Thanks for contacting us! We'll reach you as soon as
      possible.
    </Container>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
