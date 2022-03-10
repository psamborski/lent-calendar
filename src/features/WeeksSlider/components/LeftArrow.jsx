import React from 'react'
import './Arrows.scss'

function LeftArrow(props) {
  const { onClick } = props

  return (
    <div
      className='slider-left-arrow slider-arrow'
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <span className='fas fa-chevron-left' />
    </div>
  )
}

export default LeftArrow
