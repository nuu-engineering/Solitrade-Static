import React from 'react'
import {
  Container,
  Header,
  List,
} from 'semantic-ui-react'
import { withRouteData } from 'react-static'

const path='https://sales.solitrade.com/uploads/'
// var path='http://localhost:4000/uploads/'

function formatBrochures (brochures, name) {
  const formatedBrochures = brochures.map(brochure => {
    if (brochure.name === name || (name === 'GMX' && brochure.name === 'Garland')) {
      return <List.Item key={brochure.id} as="a" href={path + brochure.url} target="_blank">{brochure.url}</List.Item>
    }
    return ''
  })

  return formatedBrochures
}

const TitleSpan = ({ name }) => (
  <React.Fragment>
    { name === 'Knauf'
      ? <span>KNA<span style={{ color: '#2185d0' }}>UF</span></span>
      : name === 'Silvercote'
        ? <span>SILVER<span style={{ color: '#2185d0' }}>COTE</span></span>
        : name === 'InsuDry'
          ? <span>INSU<span style={{ color: '#2185d0' }}>DRY</span></span>
          : <span style={{ color: '#2185d0' }}>{name.toUpperCase()}</span>
    }
  </React.Fragment>
)

export default withRouteData(({ name, brochures }) => (
  <React.Fragment>
    <Container text textAlign="center">
      <Header as="h1" style={{ fontSize: '2em', padding: '2em 0em' }}>
        <TitleSpan name={name} />
        <hr style={{
            width: '10%',
            border: '1px solid #2185d0',
          }}
        />
      </Header>
    </Container>
    <Container text style={{
        padding: '0em 4em',
        paddingBottom: '9em',
        minHeight: '37vh',
      }}
    >
      <List size="large">
        {formatBrochures(brochures, name)}
      </List>
    </Container>
  </React.Fragment>
))
