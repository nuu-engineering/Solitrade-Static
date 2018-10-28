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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text textAlign="center">
        <Header as='h1' style={{ fontSize: '2em' }}>
          OUR COMMUNITY
        </Header>
      </Container>
    </Segment>

    <Image centered src="http://solitrade.com/images/resources/new-business-map.png" />

    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
