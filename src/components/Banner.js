import React, { Component } from 'react';
import banner from '../images/banner.png'

class Banner extends Component {
  render() {
    return (
      <header className='banner'>
        <img src={ banner } alt="Banner principal" />
      </header>
    );
  }
}

export default Banner;