import React, { useState, useEffect } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

export default function App() {
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')
  
  const getReservations = async () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    setError('')
    
    try {
      const response = await fetch(url)
      const reservations = await response.json()
      setReservations(reservations)
    } catch(error) {
      setError(error.message)
    }
    console.log('data?', reservations)
  }
  
  useEffect(() => {
    getReservations()
  }, [])

  const addRSVP = (newReservation) => {
    setReservations([...reservations, newReservation])
  }

  const cancelRSVP = (id) => {
    const filteredRSVP = reservations.filter(reservation => reservation.id !== id)

    setReservations(filteredRSVP)
  }
  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRSVP={addRSVP}/>
        </div>
        <div className='resy-container'>
          { error && error }
          <Reservations reservations={reservations} cancelRSVP={cancelRSVP}/>
        </div>
      </div>
    )
}