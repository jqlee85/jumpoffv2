import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import {connect} from 'react-redux';
import {requestUserLogin} from './actions/userActions';
import {userLogout} from './actions/userActions';
import {fetchBlogPost} from './actions/blogActions';
import {toggleNav} from './actions/appActions';
import {toggleNavFront} from './actions/appActions';
import {toggleNavFade} from './actions/appActions';
import {toggleMenuDark} from './actions/appActions';
import {updateCurrentSection} from './actions/appActions';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
      super(props);
  }

  toggleAppNav = () => {
    // Fade/Unfade Nav Items
    this.props.toggleNavFade();
    // Change Navigation Z-Index
    if (this.props.app.navFront) {
      setTimeout(() => {
        this.props.toggleNavFront();
      },400);
    } else {
      this.props.toggleNavFront();
    }
    // Toggle the Menu Opacity
    setTimeout(() => {
      this.props.toggle
      this.props.toggleNav();
    }, 100); 
  }

  render(){
    
    let appClasses = 'App';
    if (this.props.app.menuToggled) appClasses += ' app-menu-toggled';
    if (this.props.app.navFadeToggled) appClasses += ' nav-fade';
    return <div id="App" className={appClasses}>
      <Nav 
        menuToggled={this.props.app.menuToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user} 
        userLogout={this.props.userLogout}
        toggleNav={this.toggleAppNav}
        navFront={this.props.app.navFront}
        toggleAppNavRoute={this.toggleAppNav}
      />
      <Header 
        menuToggled={this.props.app.menuToggled} 
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
          user={this.props.user}
          blog={this.props.blog}
          app={this.props.app}
          fetchBlogPost={this.props.fetchBlogPost}
          updateCurrentSection={this.props.updateCurrentSection}
        />)}
      </div>
      <Footer />
    </div>
  }

}

// Application State
const mapStateToProps = (state) => {
  return {
    blog: state.blog,
    app: state.app,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: (data) => {
      dispatch(toggleNav(data));
    },
    toggleNavFade: (data) => {
      dispatch(toggleNavFade(data));
    },
    toggleNavFront: (data) => {
      dispatch(toggleNavFront(data));
    },
    updateCurrentSection: (data) => {
      dispatch(updateCurrentSection(data));
    },
    fetchBlogPost: (slug) => {
      dispatch(fetchBlogPost(slug));
    },
    requestUserLogin: (userName,password) => {
      dispatch(requestUserLogin(userName,password));
    },
    userLogout: (userName,password) => {
      dispatch(userLogout(userName,password));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
