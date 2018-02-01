import styles from './App.css';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import {connect} from 'react-redux';
import {requestUserLogin} from './actions/userActions';
import {userLogout} from './actions/userActions';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        stickyClass: 'app-menu-sticky'
      }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let isSticky = e.target.getElementById('App').classList.contains(this.state.stickyClass);
    let yPos = e.currentTarget.pageYOffset;
    if ( yPos >= 60 && !isSticky ) {
      e.target.getElementById('App').classList.add(this.state.stickyClass);
    } else if ( yPos < 60 && isSticky ) {
      e.target.getElementById('App').classList.remove(this.state.stickyClass);
    }
  }

  render(){
    
    let appClasses = 'App';
    if (this.props.app.menuSticky) appClasses += this.state.stickyClass;
    if (this.props.app.menuToggled) appClasses += ' app-menu-toggled';
    return <div id="App" className={appClasses}>
      <Nav 
        menuToggled={this.props.app.menuToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user} 
        userLogout={this.props.userLogout}
      />
      <Header 
        menuToggled={this.props.app.menuToggled} 
        userLogin={this.props.requestUserLogin} 
        userData={this.props.user}
      />
      <div className="main">
        {routes.map((route, i) => <PropsRoute 
          key={i}
          exact={route.exact} 
          path={route.path} 
          component={route.component} 
          user={this.props.user}
        />)}
      </div>
    </div>
  }

}

// Application State
const mapStateToProps = (state) => {
  
  return {
    prompt: state.prompt,
    app: state.app,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchImagePrompt: () => {
      dispatch(fetchImagePrompt());
    },
    fetchTextPrompt: () => {
      dispatch(fetchTextPrompt());
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