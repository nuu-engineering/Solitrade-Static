import React from 'react'
import { withRouteData } from 'react-static'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import BrochureDetail from '../../components/BrochureDetail'
//

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >
      {children}
    </DesktopContainer>
  </div>
)

export default withRouteData(({ name }) => (
  <ResponsiveContainer
    urlString={`brochures/${name}`}>
    <BrochureDetail />
    <Footer />
  </ResponsiveContainer>

))
