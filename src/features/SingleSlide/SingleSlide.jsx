import React from 'react'
import './SingleSlide.scss'
// import weeks from '../../utils/weeks'
import daysOfWeek from '../../utils/days-of-week'

function SingleSlide(props) {
  return (
    <div className='single-slide'>
      <span className='slide-date'>
        {props?.weekData?.startDate || '?'}
        -
        {props?.weekData?.endDate || '?'}
      </span>

      <div className='slide-content'>
        {Object.entries(props?.weekData?.days || {})
          .map(([dayShort, task]) =>
            (
              <div
                key={`week-${props?.weekData?.id}-${dayShort}`}
                className='slide-day-container'
              >
                <div className='day-name'>{daysOfWeek?.[dayShort]}</div>
                <div className='day-task'>
                  {
                    (props?.currentWeek || 0) >= (props?.weekData?.id || 0)
                      ? task || '🔜'
                      : '🔜'
                  }
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default SingleSlide
