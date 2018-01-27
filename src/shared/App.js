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
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render(){
    
    let appClasses = 'App';
    if (this.props.app.menuToggled) appClasses += ' app-menu-toggled';
    return <div className={appClasses}>
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