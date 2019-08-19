import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react'
import { withRouteData } from 'react-static'

import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import Knauf from './../images/knauf.png'
import Silvercote from './../images/logo-silvercote.png'
import Insudry from './../images/insudry.png'
import GMX from './../images/gmx.png'

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
    >
      {children}
    </DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = ({ brochuresNames }) => (
  <ResponsiveContainer
    urlString="brochures">
    <Container text textAlign="center">
      <Header as="h1" style={{ fontSize: '2em', padding:"0em 0em", paddingTop: "2em" }}>
        FOL<span style={{ color: '#2185d0' }}>LETOS</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr
          style={{
            width: '10%',
            border: '1px solid #2185d0',
          }}
        />
      </Header>
    </Container>
    <Grid
      container
      stackable
      style={{
        padding: '3% 0%',
        paddingBottom: '8em',
      }}
      columns="4"
     >
      <Grid.Row>
        <Header as="h2">Folleto de Solitrade</Header>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column />
        <Grid.Column
          width={10}
        >
          <div
            style={{
              width: '100%',
              height: 0,
              paddingBottom: '66%',
              position: 'relative',
            }}
          >
            <iframe
              src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fvtkehxbl"
              width="100%"
              height="100%"
              seamless="seamless"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              title="Solitrade Product Catalog 2019"
              style={{
                position: 'absolute',
              }}
            />
          </div>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>

      <Grid.Row>
        <Header
          as="h2"
          style={{
            marginTop: '3em',
          }}
        >
          Otros Folletos
        </Header>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image
            href="/es/brochures/knauf"
            centered
            src={Knauf}
            size="huge"
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            href="/es/brochures/silvercote"
            centered
            src={Silvercote}
            size="huge"
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            href="/es/brochures/insudry"
            centered
            src={Insudry}
            size="huge"
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            href="/es/brochures/gmx"
            centered
            src={GMX}
            size="huge"
            style={{ padding: '0em -30em' }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default withRouteData(PageLayout)
