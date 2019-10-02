import React, { Component } from 'react'

import './index.css'
import Phone from '../phone';

class Wrapper extends Component<{}> {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        <Phone>
          {children}
        </Phone>
      </div>
    )
  }
}

export default Wrapper
