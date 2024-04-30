import { Component } from 'react';
import Link from './link.component.jsx'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span className='footer__item'>
          For access and support please email
          <Link href='#' text='support@DCM.com'/>
        </span> 
        <span className='footer__item'>DCM Origination Technologies Ltd 2023</span>
      </div>
    )
  }
}

export default Footer;