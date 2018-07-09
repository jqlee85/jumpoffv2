import styles from './App.css';
import React, { Component } from "react";
import { withRouter } from 'react-router'
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        navToggled: false,
        navFadeToggled: false,
        navFrontToggled: false
      };  
  }

  toggleAppNav = () => {
    // Fade/Unfade Nav Items
    this.setState(prevState => ({
      navFadeToggled: !prevState.navFadeToggled
    }));
    // Change Navigation Z-Index
    if (this.state.navFrontToggled) {
      setTimeout(() => {
        this.setState(prevState => ({
          navFrontToggled: !prevState.navFrontToggled
        }));
      },400);
    } else {
      this.setState(prevState => ({
        navFrontToggled: !prevState.navFrontToggled
      }));
    }
    // Toggle the Menu Opacity
    setTimeout(() => {
      this.setState(prevState => ({
        navFadeToggled: !prevState.navFadeToggled
      }));
      this.setState(prevState => ({
        navToggled: !prevState.navToggled
      }));
    }, 100); 
  }

  toggleNav

  render(){
    
    let appClasses = 'App';
    if (this.state.navToggled) appClasses += ' app-menu-toggled';
    if (this.state.navFadeToggled) appClasses += ' nav-fade';
    return <div id="App" className={appClasses}>
      <Nav 
        menuToggled={this.state.navToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user} 
        userLogout={this.props.userLogout}
        toggleNav={this.toggleAppNav}
        navFront={this.state.navFrontToggled}
      />
      <Header 
        menuToggled={this.state.navToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user}
        toggleNav={this.toggleAppNav}
      />
      <div className="main">
        {routes.map((route, i) => <PropsRoute 
          key={i}
          exact={route.exact} 
          path={route.path} 
          component={route.component} 
        />)}
      </div>
      <Footer />
    </div>
  }

}


export default withRouter(App);
