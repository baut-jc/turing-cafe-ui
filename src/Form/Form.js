import React, { useState } from 'react'

export default function Form() {
  const [name, getName] = useState('')
  const [date, getDate] = useState('')
  const [time, getTime] = useState('')
  const [number, getNumber] = useState('')


  return (
    <form>
      <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
        />
      <input
          type='text'
          placeholder='Date'
          name='date'
          value={date}
        />
      <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
        />
      <input
          type='text'
          placeholder='Number of people'
          name='number'
          value={number}
        />

      <button>SUBMIT</button>
    </form>
  )
}
