import React from 'react';
import GuestInfo from '../GuestInfo/GuestInfo';
import './Reservations.css';

export default function Reservations({reservations}) {
  const guestLists = reservations.map(guest => {
    console.log('guest', guest)
    return (
        <GuestInfo 
          name={guest.name}
          date={guest.date}
          time={guest.time}
          number={guest.number}
        />
    )
  })
  return (
    <div className='reservations'>
      {guestLists}
    </div>
  )
}