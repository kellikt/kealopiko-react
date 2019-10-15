import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Item, Image, Grid, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu borderless className="ui fitted borderless navbar menu">
          <Container>
            <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
                className="right navbar item">
              contact us
            </Menu.Item>
            <Menu.Item>|
            </Menu.Item>
            <Menu.Item
              name='gift'
              active={activeItem === 'gift'}
              onClick={this.handleItemClick}
              className="navbar item">
              gift cards
            </Menu.Item>
            <Menu.Item> |
            </Menu.Item>
            <Menu.Item
                name='shopping'
                active={activeItem === 'shopping'}
                onClick={this.handleItemClick}
                className="navbar item">
              shopping bag
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MainMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu
        className="ui borderless main menu">
          <Menu.Item
              name='logo'
              active={activeItem === 'logo'}
              onClick={this.handleItemClick}
          className="logo item">
            <Image src="https://kealopiko.com/assets/images/logo_kealopiko.png" className="ui left floated" />
          </Menu.Item>
          <Menu.Item
              name='shop'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
          className="fitted main text">
            SHOP
          </Menu.Item>
          <Menu.Item
              name='lookbook'
              active={activeItem === 'lookbook'}
              onClick={this.handleItemClick}
              className="fitted main text">
            LOOKBOOKS
          </Menu.Item>
          <Menu.Item
              name='design'
              active={activeItem === 'design'}
              onClick={this.handleItemClick}
              className="fitted main text">
            DESIGN LIBRARY
          </Menu.Item>
          <Menu.Item
              name='custom'
              active={activeItem === 'custom'}
              onClick={this.handleItemClick}
              className="fitted main text">
            CUSTOM
          </Menu.Item>
          <Menu.Item
              name='giving'
              active={activeItem === 'giving'}
              onClick={this.handleItemClick}
              className="fitted main text">
            GIVING BACK
          </Menu.Item>
          <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              className="fitted main text">
            ABOUT
          </Menu.Item>
          <Menu.Item
              name='press'
              active={activeItem === 'press'}
              onClick={this.handleItemClick}
              className="fitted main text">
            PRESS
          </Menu.Item>
          <Menu.Item
              name='blog'
              active={activeItem === 'blog'}
              onClick={this.handleItemClick}
              className="fitted main text">
            BLOG
          </Menu.Item>
        </Menu>
    )
  }
}

class PageImage extends React.Component {
  render() {
    return (
        <Container className="ui container">
          <Image src="https://kealopiko.com/shop/images/lookbook/b595c2e5cd4e41d296ef61706b4ef125.png" className="ui centered image" />
        </Container>
    )
  }
}

class GridImages extends React.Component {
  render() {
    return (
        <Container className="ui container">
          <Grid columns={3} divide>
            <Grid.Row>
              <Grid.Column>
                <Image src="https://kealopiko.com/shop/images/cms/a4c0d82059fb01a2de39d3ef0a44397a.png" className="ui centered image" />
                <Item className="middle text">
                  NEW RELEASES
                </Item>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://kealopiko.com/shop/images/cms/0383ba914ff051bf25eaf4c3f0840b04.jpg" className="ui centered image" />
                <Item className="middle text">
                  Visit The Kealopiko Shop In The South Shore Market
                </Item>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://kealopiko.com/shop/images/cms/38a6f0771db07251ae24c33d95f091cb.png" className="ui centered image" />
                <Item className="middle text">
                  Click here to access our site with stories in both ʻōlelo Hawaiʻi and English, original writings and translations of pieces from the nūpepa ʻōlelo Hawaiʻi
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class Events extends React.Component {
  render() {
    return (
        <Container>
          <hr />
          <Item
          className="event text">
            UPCOMING EVENTS
          </Item>
          <Item
              className="event text">
            NEON POP-UP
          </Item>
          <Item
              className="caption text">
            <em>A weekend filled with all aloha & celebrating all things neon</em>
          </Item>
          <Item
              className="caption text">
            Saturday, October 12 10a-9p and Sunday, October 13 10a-6p
          </Item>
          <Item
              className="ui divider">
          </Item>
          <Item
              className="event text">
            NEW DESIGN RELEASE: WĀWAEʻIOLE HOODED PONCHOS
          </Item>
          <Item
              className="caption text">
            RELEASED ONLINE & IN-STORE Friday, September 27
          </Item>
          <Item
              className="caption text">
            check it out <a>here</a>
          </Item>
          <hr />
          <Item
              className="small text">
            LOCATIONS
          </Item>
          <Item
              className="medium text">
            The Kealopiko Shop (Oʻahu)
          </Item>
          <Item
              className="caption text">
            Located at South Shore Market, Kakaʻako, Oʻahu
          </Item>
          <Item
              className="caption text">
            1170 Auahi St, Honolulu, HI 96814
          </Item>
          <Item
              className="caption text">
            <strong>Hours of Operation:</strong>
          </Item>
          <Item
              className="caption text">
            Monday-Thursday 10a-8p
          </Item>
          <Item
              className="caption text">
            Friday & Saturday, 10a-9p
          </Item>
          <Item
              className="caption text">
            Sunday, 10a-6p
          </Item>
          <Item
              className="caption text">
            ~
          </Item>
          <br/> <br/>
          <Item
              className="medium text">
            The Workshop (Molokaʻi)
          </Item>
          <Item
              className="caption text">
            Located at 1000 Hoawa Road, Hoʻolehua, Molokaʻi
          </Item>
          <Item
              className="caption text">
            There is limited stock available for purchase at the Workshop
          </Item>
          <Item
              className="caption text">
            <strong>Hours: Wednesdays & Fridays 10a-2p</strong>
          </Item>
          <Item
              className="caption text">
            <em>other times by appointment only!</em>
          </Item>
        </Container>
    )
  }
}

class FooterMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu
            className="ui borderless bottom menu">
          <Menu.Item
              name='shop'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
              className="footer text">
            SHOP
          </Menu.Item>
          <Menu.Item
              name='lookbook'
              active={activeItem === 'lookbook'}
              onClick={this.handleItemClick}
              className="footer text">
            LOOKBOOK
          </Menu.Item>
          <Menu.Item
              name='design'
              active={activeItem === 'design'}
              onClick={this.handleItemClick}
              className="footer text">
            DESIGN LIBRARY
          </Menu.Item>
          <Menu.Item
              name='custom'
              active={activeItem === 'custom'}
              onClick={this.handleItemClick}
              className="footer text">
            CUSTOM
          </Menu.Item>
          <Menu.Item
              name='give'
              active={activeItem === 'give'}
              onClick={this.handleItemClick}
              className="footer text">
            GIVE BACK
          </Menu.Item>
          <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              className="footer text">
            ABOUT
          </Menu.Item>
          <Menu.Item
              name='press'
              active={activeItem === 'press'}
              onClick={this.handleItemClick}
              className="footer text">
            PRESS
          </Menu.Item>
          <Menu.Item
              name='faq'
              active={activeItem === 'faq'}
              onClick={this.handleItemClick}
              className="footer text">
            FAQ
          </Menu.Item>
          <Menu.Item
              name='jobs'
              active={activeItem === 'jobs'}
              onClick={this.handleItemClick}
              className="footer text">
            JOBS
          </Menu.Item>
          <Menu.Item
              name='wholesale'
              active={activeItem === 'wholesale'}
              onClick={this.handleItemClick}
              className="footer text">
            WHOLESALE
          </Menu.Item>
        </Menu>
    )
  }
}

class FooterText extends React.Component {
  render() {
    return (
    <div
      className="lowest">
      <Item.Description
      className="lowest text">
        Styled in Hawaii Nei | 808.784.0071 | P.O.Box 698 Kaunakakai, HI, 96748 | E-mail | © Kealopiko 2015
      </Item.Description>
      <Item.Description
      className="lowest text">
        FOLLOW US
        <Icon className="twitter"/>
        <Icon className="instagram"/>
        <Icon className="facebook"/>
      </Item.Description>
    </div>
    )
  }
}

class Kealopiko extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MainMenu/>
          <PageImage/>
          <GridImages/>
          <Events/>
          <FooterMenu/>
          <FooterText/>
        </div>
    );
  }
}

ReactDOM.render(<Kealopiko/>, document.getElementById('root'));