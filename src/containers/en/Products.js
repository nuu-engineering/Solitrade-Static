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
import Other from '../images/otherproducts.png'
import Glass from '../images/glass.png'
import Sound from './../images/SoundInterior.jpg'
import Insulation from '../images/insulation.png'
import Knauf from '../images/knauf.png'
import Silvercote from './../images/silvercote.png'
import Insudry from '../images/insudry.png'
import GMX from '../images/gmx.png'
import Tufflex from '../images/tufflex.png'
import SoliBlockWall from '../images/SoliBlock-Wall.png'
import SoliBlockFloor from '../images/SoliBlock-Floor.png'

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
      <Header as="h1" style={{ fontSize: '2em', padding: '0em 0em', paddingTop: '2em' }}>
        OUR <span style={{ color: '#2185d0' }}>PRODUCTS</span>
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
      style={{ padding: '3% 0%' }}
      columns="4"
     >
      <Grid.Row>
        <Grid.Column>
          <Image src={Insulation} centered size="large"/>
          <Segment basic >
            <Header as="h3">THERMAL AND ACOUSTIC INSULATION</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }} />
            <Header as="h5">Exclusive sales representative of Knauf Insulation North America products for Latin America</Header>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image href="https://www.knaufnorthamerica.com/en-us" centered src={Knauf} size="huge" />
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
            <Header as="h3">WATERPROOFING COATINGS AND SYSTEMS</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }}/>
            <Header as="h5">Distribution of waterproofing products, coatings and acoustical mats</Header>
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
          <Image src={Sound} centered size="large"/>
          <Segment basic >
            <Header as="h3">INTERIOR SOUND CONTROL</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }} />
            <Header as="h5">Distribution of sound control mats for interior wall and floor insulation. Reduce impact noise up to 75%.</Header>
          </Segment>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image centered src={SoliBlockWall} size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Image centered src={SoliBlockFloor} size="huge" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Image src={Glass} centered size="large"/>
          <Segment basic >
            <Header as="h3">GLASS AND OTHER BUILDING MATERIALS</Header>
            <hr style={{
              width: '10%',
              border: '1px solid #2185d0',
              marginLeft: 0,
              padding: '0% 1em',
            }} />
            <Header as="h5">We distribute high quality glass at competitive prices.</Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
