import React from 'react'
import './Header.scss'
import WielkiPost from '../../static/images/wielki-post.jpg'

function Header() {
  return (
    <div className='header'>
      <img
        alt='Wielki Post - napis'
        src={WielkiPost}
      />
      <span>2022</span>
    </div>
  )
}

export default Header
