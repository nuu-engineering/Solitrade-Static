import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Header,
  List,
} from 'semantic-ui-react'
import { withRouteData } from 'react-static'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
//

const path='https://sales.solitrade.com/uploads/'
// var path='http://localhost:4000/uploads/'

function formatBrochures (brochures) {
  const formatedBrochures = brochures.map(brochure => {
    if (brochure.name == 'Garland') {
      return <List.Item key={brochure.id} as="a" href={path + brochure.url}>{brochure.url}</List.Item>
    }
    return ''
  })

  return formatedBrochures
}

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >
      {children}
    </DesktopContainer>
  </div>
);

export default withRouteData(({ brochures }) => (
  <ResponsiveContainer
    urlString="brochures/gmx">
    <Container text textAlign="center">
      <Header as="h1" style={{ fontSize: '2em', padding: '2em 0em' }}>
        <span style={{ color: '#2185d0' }}>GMX</span>
        <hr style={{
          width: '10%',
          border: '1px solid #2185d0',
        }}/>
      </Header>
    </Container>
    <Container text style={{ padding: '0em 4em', paddingBottom: '9em' }}>
      <List size="large">
        {formatBrochures(brochures.brochures)}
      </List>
    </Container>
    <Footer />
  </ResponsiveContainer>

))
