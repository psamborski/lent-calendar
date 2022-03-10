import React from 'react'
import './Arrows.scss'

function RightArrow(props) {
  const { onClick } = props

  return (
    <div
      className='slider-right-arrow slider-arrow'
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <span className='fas fa-chevron-right' />
    </div>
  )
}

export default RightArrow
