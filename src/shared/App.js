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
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import configureStore from "../shared/configureStore";
import {persistStore, autoRehydrate} from 'redux-persist'
const store = configureStore();

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        clearClass: 'app-menu-clear'
      }
  }

  componentWillMount(){
    console.log(store);
    persistStore(store, {}, () => {
      this.setState({rehydrated: true})
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  initializeMenuBar(){
    let clearClass = this.state.clearClass;
    let isClear = document.getElementById('App').classList.contains(clearClass);
    if ( !isClear ) {
      document.getElementById('App').classList.add(clearClass);
      isClear = true;
    }
    setTimeout(function(){
      let yPos = document.documentElement.scrollTop;
      if ( yPos >= 60 && !isClear ) {
        document.getElementById('App').classList.remove(clearClass);
      } else if ( yPos < 60 && isClear ) {
        document.getElementById('App').classList.add(clearClass);
      } 
    },500);
  }

  handleScroll = (e) => {
    let isClear = e.target.getElementById('App').classList.contains(this.state.clearClass);
    let yPos = e.currentTarget.pageYOffset;
    if ( yPos >= 60 && isClear ) {
      e.target.getElementById('App').classList.remove(this.state.clearClass);
    } else if ( yPos < 60 && !isClear && document.getElementById('home') ) {
      e.target.getElementById('App').classList.add(this.state.clearClass);
    }
  }

  toggleAppNav = () => {
    console.log('toggleAppNav in app.js called');
    this.initializeMenuBar();
    this.props.toggleNav();
  }

  toggleAppNavRoute = () => {
    this.props.fadeText();
    setTimeout(() => {
      console.log('ding');
      this.props.toggleNav();
    }, 300);
  }

  render(){
    
    let appClasses = 'App';
    if (this.props.app.menuToggled) appClasses += ' app-menu-toggled';
    return <div id="App" className={appClasses}>
      <Nav 
        menuToggled={this.props.app.menuToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user} 
        userLogout={this.props.userLogout}
        toggleNav={this.toggleAppNav}
        toggleAppNavRoute={this.toggleAppNavRoute}
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
    fetchBlogPost: (slug) => {
      dispatch(fetchBlogPost(slug));
    },
    requestUserLogin: (userName,password) => {
      dispatch(requestUserLogin(userName,password));
    },
    userLogout: (userName,password) => {
      dispatch(userLogout(userName,password));
    },
    // updateCurrentLocation: (location) => {
    //   dispatch(routeLocationDidUpdate(location));
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
