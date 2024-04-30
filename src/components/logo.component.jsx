import { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div>
        <img className='logo' width='100px' src='DCM logo.svg' />
        <img className='logo--icon' width='50px' src='DCM logo without text.svg' />
      </div>
    )
  }
}

export default Logo;