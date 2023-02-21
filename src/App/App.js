import React, { useState, useEffect } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
// import fetchData from '../api'

function App() {
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
  console.log(reservations[1])

  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        { error && error }
        <Reservations reservations={reservations}/>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
}

export default App;
