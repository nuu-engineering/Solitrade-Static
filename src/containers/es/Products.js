import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import Other from './../images/otherproducts.png'
import Glass from './../images/glass.png'
import Insulation from './../images/insulation.png'
import Knauf from './../images/knauf.png'
import Silvercote from './../images/logo-silvercote.png'
import Insudry from './../images/insudry.png'
import GMX from './../images/gmx.png'
import Tufflex from './../images/tufflex.png'

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer urlString={urlString}>
      {children}
    </DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = () => (
  <ResponsiveContainer
    urlString="products">
    <Container text textAlign="center">
      <Header as="h1" style={{ fontSize: '2em', padding: '1em 0em', paddingTop: '2em' }}>
        NUESTROS <span style={{ color: '#2185d0' }}>PRODUCTOS</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: '10%',
          border: '1px solid #2185d0',
        }} />
      </Header>
    </Container>
    <Grid
      container
      stackable
      divided="vertically"
      style={{ padding: '0% 0%' }}
      columns="3"
     >
      <Grid.Row>
        <Grid.Column>
          <Image href="http://insudry.com/" src={Insulation} centered size="large" />
          <Segment basic >
            <Header as="h3">AISLAMIENTO TÉRMICO Y ACÚSTICO</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }}/>
            <Header as="h5">Representante de ventas exclusivo en Latinoamérica de los productos de Asilamiento Knauf North America. </Header>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image href="http://www.knauf.es/" centered src={Knauf} size="huge" />
                </Grid.Column>
                <Grid.Column>
                  <Image href="https://www.silvercote.com/" centered src={Silvercote} size="huge" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Image src={Other} centered size="large"/>
          <Segment basic >
            <Header as="h3">IMPERMEABILIZANTES</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }}/>
            <Header as="h5">Distribución de productos de revestimiento, tapetes acústicos, etc. </Header>
          </Segment>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image href="http://insudry.com/" centered src={Insudry} size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Image href="https://www.gmxco.com/about/about-us.html" centered src={GMX} size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Image href="https://www.tufflexpolymers.com/" centered src={Tufflex} size="huge" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Image src={Glass} centered size="large" />
          <Segment basic >
            <Header as="h3">VIDRIO Y OTROS MATERIALES</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }} />
            <Header as="h5">Distribuimos vidrio de alta calidad a precios competitivos.</Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
