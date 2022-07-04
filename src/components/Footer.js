import React from 'react';
import Moment from 'react-moment';

function Footer() {
  return ( 
    <div className='foot'>
      <p>Copyright © Lucas Bitencourt <Moment format='YYYY' /></p>
    </div>
   );
}

export default Footer;