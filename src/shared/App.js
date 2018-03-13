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
import {toggleNavFade} from './actions/appActions';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        darkClass: 'app-menu-dark'
      }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  initializeMenuBar(){
    let darkClass = this.state.darkClass;
    let isDark = document.getElementById('App').classList.contains(darkClass);
    // if ( !isDark ) {
    //   document.getElementById('App').classList.add(darkClass);
    //   isDark = true;
    // }
    setTimeout(function(){
      let yPos = document.documentElement.scrollTop;
      console.log(yPos);
      if ( yPos >= 60 && !isDark ) {
        document.getElementById('App').classList.add(darkClass);
      } else if ( yPos < 60 && isDark ) {
        document.getElementById('App').classList.remove(darkClass);
      } 
    },500);
  }

  handleScroll = (e) => {
    let isDark = e.target.getElementById('App').classList.contains(this.state.darkClass);
    let yPos = e.currentTarget.pageYOffset;
    if ( yPos >= 60 && !isDark ) {
      console.log('greater than 60 and isdark');
      e.target.getElementById('App').classList.add(this.state.darkClass);
    } else if ( yPos < 60 && isDark && document.getElementById('home') ) {
      e.target.getElementById('App').classList.remove(this.state.darkClass);
    }
  }

  toggleNavFade = () => {
    this.props.toggleNavFade();
  }

  toggleAppNav = () => {
    this.props.toggleNavFade();
    this.initializeMenuBar();
    this.props.toggleNav();
  }
  
  toggleAppNavNonToggledMenu = () => {
    this.initializeMenuBar();
  }

  toggleAppNavRoute = () => {
    this.props.toggleNavFade();
    setTimeout(() => {
      this.initializeMenuBar();
      this.props.toggleNav();
      this.initializeMenuBar();
    }, 500);
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
        toggleAppNavRoute={this.toggleAppNavRoute}
        toggleNavNonToggledMenu={this.toggleAppNavNonToggledMenu}
      />
      <Header 
        menuToggled={this.props.app.menuToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user}
        toggleNav={this.toggleAppNavRoute}
      />
      <div className="main">
        {routes.map((route, i) => <PropsRoute 
          key={i}
          exact={route.exact} 
          path={route.path} 
          component={route.component} 
          user={this.props.user}
          blog={this.props.blog}
          fetchBlogPost={this.props.fetchBlogPost}
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
