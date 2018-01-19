import React, {Component} from 'react';
import styles from './WritePage.css';

class WritePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textContent : ''
    }

  }

  onChange = (event) => {
    this.setState({textContent: event.target.value});
  }

  saveWriting = () => {
    console.log(this.state.textContent);
  }

  render() {
    return <div className="write-page">
  </div>
  }
}


export default WritePage
