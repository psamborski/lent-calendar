import React, { useRef } from 'react'
import Slider from 'react-slick'
// import Select from 'react-select'
import './WeeksSlider.scss'
import dayjs from 'dayjs'
import LeftArrow from './components/LeftArrow'
import RightArrow from './components/RightArrow'
import weeks from '../../utils/weeks'
import SingleSlide from '../SingleSlide/SingleSlide'

const customParseFormat = require('dayjs/plugin/customParseFormat')
const weekOfYear = require('dayjs/plugin/weekOfYear')

dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)

function WeeksSlider() {
  const sliderElem = useRef(null)

  // check which week should be currently displayed
  // 1. get week number of today and of challenge start day
  const challengeStartWeekNumber = dayjs(`${weeks[0]?.startDate}.2022`, 'DD.MM.YYYY').week()
  const todayWeekNumber = dayjs(dayjs().startOf('day')).week()

  // 2. set id of proper week thanks to weeks number difference
  // first challenge week -> id = 1, but let's start with 0 because slides indexes start with 0, not 1
  let currentWeek = 0

  switch (true) {
    case todayWeekNumber - challengeStartWeekNumber <= 0:
      break
    case todayWeekNumber - challengeStartWeekNumber >= 6:
      currentWeek = 6
      break
    default:
      currentWeek = todayWeekNumber - challengeStartWeekNumber
  }

  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    className: 'week-slider',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    initialSlide: currentWeek,
  }

  // const options = [
  //   {
  //     value: '1',
  //     label: 'Tydzień 1',
  //   },
  // ]

  return (
    <>
      {/* <Select */}
      {/*   className='week-select' */}
      {/*   options={options} */}
      {/*   defaultValue={options.filter(option => option.value === '3')} */}
      {/* /> */}
      <Slider
        ref={sliderElem}
        {...settings}
      >
        {
          weeks.map(
            (weekData) => (
              <SingleSlide
                key={`slide-week-${weekData.id}`}
                weekData={weekData}
              />
              ),
          )
        }
      </Slider>
    </>
  )
}

export default WeeksSlider
