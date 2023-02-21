import React from 'react';
// import GuestInfo from './GuestInfo/GuestInfo';
import './Reservations.css';

function Reservations({reservations}) {
  const guestLists = reservations.map(guest => {
    console.log('guest', guest)
    return (
      <div>
        {/* <GuestInfo/> */}
        <h1>{guest.name}</h1>
        <p>{guest.date}</p>
        <p>{guest.time}</p>
        <p>{guest.number}</p>
      </div>
    )
  })
  return guestLists
}

export default Reservations;