import React from 'react'
import './Footer.scss'
import Foska from '../../static/images/foska.jpg'

function Footer() {
  return (
    <div className='footer'>
      <img
        alt='Foska - grafika'
        src={Foska}
      />
      <span>Ruch Światło-Życie w parafii św. Jakuba w Warszawie</span>
    </div>
  )
}

export default Footer
