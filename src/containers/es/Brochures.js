import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Card,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import { withRouteData } from 'react-static'

import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import Other from './../images/otherproducts.png'
import Glass from './../images/glass.png'
import Insulation from './../images/insulation.png'
import Knauf from './../images/knauf.png'
import Silvercote from './../images/logo-silvercote.png'
import Insudry from './../images/insudry.png'
import GMX from './../images/gmx.png'

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

const PageLayout = ({ brochuresNames }) => (
  <ResponsiveContainer
    urlString="brochures">
    <Container text textAlign="center">
      <Header as='h1' style={{ fontSize: '2em', padding:"0em 0em", paddingTop: "2em" }}>
        FOL<span style={{color:"#2185d0"}}>LETOS</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: '10%',
          border: '1px solid #2185d0',
        }}/>
      </Header>
    </Container>
    <Grid
      container
      stackable
      divided="vertically"
      style={{ padding: '3% 0%', paddingBottom: "8em" }}
      columns="4"
     >
      <Grid.Row>
        <Grid.Column>
          <Image href='/es/brochures/knauf' centered src={Knauf} size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Image href='/es/brochures/silvercote' centered src={Silvercote} size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Image href='/es/brochures/insudry' centered src={Insudry} size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Image href='/es/brochures/gmx' centered src={GMX} size="huge" style={{ padding: '0em -30em' }}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default withRouteData(PageLayout)
