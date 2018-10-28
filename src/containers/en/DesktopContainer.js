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
  Dropdown,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-static'
import SimpleLogo from './../images/simple_logo.png'
import Name from './../images/name.png'
import SideLogo from './../images/sidenamelogo.png'
import FavIcon from './../images/simple_logo.png'
import Favicon from 'react-favicon';

class Layout extends React.Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }
  render(){
    return(
      <div>
      </div>
    );
  }
}

// function get_en_link(){
//   var path = window.urlString.pathname;
//   // alert(path)
//   if(path == "/es"){
//     return "/";
//   }else if(path == "/es/sobre"){
//     return "/about";
//   }else if(path == "/es/productos"){
//     return "/products";
//   }else if(path == "/es/comunidad"){
//     return "/community";
//   }else if(path == "/es/eventos"){
//     return "/events";
//   }else if(path == "/es/contacto"){
//     return "/contact";
//   }else if(path == "/es/sobre"){
//     return "/about";
//   }
// }
//
// function get_es_link(){
//   var path = window.urlString.pathname;
//   // alert(path)
//   if(path == "/"){
//     return "/es";
//   }else if(path == "about"){
//     return "/es/sobre";
//   }else if(path == "/products"){
//     return "/es/productos";
//   }else if(path == "/community"){
//     return "/es/comunidad";
//   }else if(path == "/events"){
//     return "/es/eventos";
//   }else if(path == "/contact"){
//     return "/es/contacto";
//   }else if(path == "/about"){
//     return "/es/sobre";
//   }
// }

class TabletContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, urlString } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyTablet}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign="center"
            style={{ padding: '0em 0em'}}
            vertical
            inverted
          >
            <Menu
              // fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              inverted
              secondary={!fixed}
              size="large"
            >

              <Menu.Item as="a" href="https://www.linkedin.com/company/solitrade-group" target="_blank">
                <Icon name="linkedin in" />
              </Menu.Item>
              {/* <Menu.Item as="a" href={get_en_link()} > <Flag name='us' /></Menu.Item>
              <Menu.Item as="a" href={get_es_link()}><Flag name='es' /></Menu.Item> */}
              <Menu.Item as="a" href={`/es/${urlString}`} ><Flag name='es' /></Menu.Item>

              <Menu.Item position="right">
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as="a"  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Menu>
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size="large"
            >

              <Container>
                {/* <Menu.Item as="a" href="/"><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                {/* <Menu.Item as="a" href=''><Flag name='es' /></Menu.Item>
                <Menu.Item as="a" href=''><Flag name='us' /></Menu.Item> */}
                <Menu.Item as="a" href="/">
                  <Image src={SimpleLogo} size="mini" />
                </Menu.Item>
                <Menu.Item as="a" href="/" position="right">HOME</Menu.Item>
                <Menu.Item style={{padding: "0em 0em"}}></Menu.Item>
                <Menu.Item as="a" href="/about">ABOUT US</Menu.Item>
                <Menu.Item as="a" href="/products">PRODUCTS</Menu.Item>
                <Menu.Item as="a" href="/brochures">BROCHURES</Menu.Item>

                {/* <Dropdown text='BROCHURES' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href='/brochures/Garland'>GARLAND</Dropdown.Item>
                    <Dropdown.Item href='/brochures/InsuDry'>INSUDRY</Dropdown.Item>
                    <Dropdown.Item href='/brochures/Knauf'>KNAUF</Dropdown.Item>
                    <Dropdown.Item href='/brochures/Silvercote'>SILVERCOTE</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/community">US</Dropdown.Item>
                    <Dropdown.Item href="/events">EVENTS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as="a" href="/contact" >CONTACT US</Menu.Item>



              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node,
  urlString: PropTypes.string,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, urlString } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign="center"
            style={{ padding: '0em 0em'}}
            vertical
            inverted
          >
            <Menu
              // fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              inverted
              secondary={!fixed}
              size="large"
            >
              <Menu.Item as="a" href="https://www.linkedin.com/company/solitrade-group" target="_blank">
                <Icon name="linkedin in" />
              </Menu.Item>
              {/* <Menu.Item as="a" href={get_en_link()} > <Flag name='us' /></Menu.Item>
              <Menu.Item as="a" href={get_es_link()}><Flag name='es' /></Menu.Item> */}
              <Menu.Item as="a" href={`/es/${urlString}`}><Flag name='es' /></Menu.Item>

              <Menu.Item position="right">
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as="a"  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Menu>
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size="large"
            >
              <Container>
                {/* <Menu.Item as="a" href="/"><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                {/* <Menu.Item as="a" href=''><Flag name='es' /></Menu.Item>
                <Menu.Item as="a" href=''><Flag name='us' /></Menu.Item> */}
                <Menu.Item as="a" href="/" style={{ right: '0px'}}>
                  <Image src={SideLogo} size='small' />
                </Menu.Item>
                <Menu.Item position="right" as="a" href="/">HOME</Menu.Item>
                <Menu.Item style={{padding: "0em 0em"}}></Menu.Item>
                <Menu.Item as="a" href="/about">ABOUT US</Menu.Item>
                <Menu.Item as="a" href="/products">PRODUCTS</Menu.Item>
                <Menu.Item as="a" href="/brochures">BROCHURES</Menu.Item>
                {/*
                <Dropdown text='BROCHURES' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href='/brochures/Garland'>GARLAND</Dropdown.Item>
                    <Dropdown.Item href='/brochures/InsuDry'>INSUDRY</Dropdown.Item>
                    <Dropdown.Item href='/brochures/Knauf'>KNAUF</Dropdown.Item>
                    <Dropdown.Item href='/brochures/Silvercote'>SILVERCOTE</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/community">US</Dropdown.Item>
                    <Dropdown.Item href="/events">EVENTS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as="a" href="/contact" >CONTACT US</Menu.Item>
                {/* <Menu.Item>
                  <Icon name='phone'/> +1-864-498-8691
                </Menu.Item>
                <Menu.Item>
                  <Icon name='mail'/> info@solitrade.com
                </Menu.Item> */}
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  urlString: PropTypes.string,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children, urlString } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
            {/* <Menu.Item as="a" href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item> */}
            {/* <Menu.Item as="a" href="/"><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
            {/* <Menu.Item as="a" href=''><Flag name='es' /></Menu.Item>
            <Menu.Item as="a" href=''><Flag name='us' /></Menu.Item> */}
            <Menu.Item as="a" href="/">HOME</Menu.Item>
            <Menu.Item as="a" href="/about">ABOUT US</Menu.Item>
            <Menu.Item as="a" href="/products">PRODUCTS</Menu.Item>
            <Menu.Item as="a" href="/brochures">BROCHURES</Menu.Item>
            {/*
            <Dropdown text='BROCHURES' pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item href='/brochures/Garland'>GARLAND</Dropdown.Item>
                <Dropdown.Item href='/brochures/InsuDry'>INSUDRY</Dropdown.Item>
                <Dropdown.Item href='/brochures/Knauf'>KNAUF</Dropdown.Item>
                <Dropdown.Item href='/brochures/Silvercote'>SILVERCOTE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Menu.Item as="a" href="/community">US</Menu.Item>
            <Menu.Item as="a" href="/events">EVENTS</Menu.Item>
            <Menu.Item as="a" href="/contact" >CONTACT US</Menu.Item>
            {/* <Menu.Item as="a" href={get_en_link()} > <Flag name='us' /></Menu.Item>
            <Menu.Item as="a" href={get_es_link()}><Flag name='es' /></Menu.Item> */}
            <Menu.Item as="a" href={`/es/${urlString}`}><Flag name='es' /></Menu.Item>

          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ padding: '0em 0em' }}
              vertical
              basic
            >
                <Menu inverted secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" size="large" />
                  </Menu.Item>
                  <Menu.Item position="right" as="a" href="/">
                    {/* <Icon name='phone'/> +1-864-498-8691  /
                    <Icon name='mail'/> info@solitrade.com */}
                    <Image src={Name} size='small' />
                  </Menu.Item>
                  <Menu.Item position="right" as="a" href="/">
                    {/* <Icon name='phone'/> +1-864-498-8691  /
                    <Icon name='mail'/> info@solitrade.com */}
                    <Image src={SimpleLogo} size="mini" />
                  </Menu.Item>
                </Menu>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
  urlString: PropTypes.string,
}

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer urlString={urlString}>{children}</DesktopContainer>
    <MobileContainer urlString={urlString}>{children}</MobileContainer>
    <TabletContainer urlString={urlString}>{children}</TabletContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  urlString: PropTypes.string,
}

export default ResponsiveContainer
