import React from 'react'
import './GuestInfo.css'

export default function GuestInfo({name, date, time, number}) {
  return (
    <div className='guestCard'>
     <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of people: {number}</p>
      <button>Cancel</button>
    </div>
  )
}
