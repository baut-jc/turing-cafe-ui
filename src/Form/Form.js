import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {
  const [name, getName] = useState('')
  const [date, getDate] = useState('')
  const [time, getTime] = useState('')
  const [number, getNumber] = useState(0)

  const makeReservations = event => {
    event.preventDefault();
      const newReservation = {
        id: Date.now(),
        name,
        date,
        time,
        number
      }
      props.addRSVP(newReservation);
      clearForm();
    }

  const clearForm = () => {
    getName('')
    getDate('')
    getTime('')
    getNumber(0)
  }

  return (
    <form>
      <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={event => getName(event.target.value)}
          />
      <input
          type='text'
          placeholder='Date'
          name='date'
          value={date}
          onChange={event => getDate(event.target.value)}
          />
      <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={event => getTime(event.target.value)}
          />
      <input
          type='text'
          placeholder='Number of people'
          name='number'
          value={number}
          onChange={event => getNumber(event.target.value)}
        />

      <button onClick={makeReservations}>SUBMIT</button>
    </form>
  )
}
