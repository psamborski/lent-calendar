import React from 'react'
import './AppContainer.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WeeksSlider from '../WeeksSlider/WeeksSlider'

function AppContainer() {
  return (
    <div className='app-container'>
      <div className='bg-container bg-container-left'>
        <div className='top-left' />
        <div className='bot-left' />
      </div>

      <div className='main-content'>
        <Header />
        <div className='week-slider-container'>
          <WeeksSlider />
        </div>
        <Footer />
      </div>

      <div className='bg-container bg-container-right'>
        <div className='top-right' />
        <div className='bot-right' />
      </div>
    </div>
  )
}

export default AppContainer
