import React from 'react'

const generateArray = (n) => (Array.from({length: n}, (v,i)=>i+1))

const generateRandomArray = (n) => (Array.from({length: n}, () => Math.floor(Math.random() * 25)+1))

const MyApp = () => (
  <div>
    <h1>
      Minimal React zalinafali
      <p>
        Bundle size: 129K bytes, 
        Load time of the bundle: 45 ms, 
        Last commit SHA1: 0f59bee89caa64d69da9fcc6149bfd26f9481a66
      </p>
    </h1>

    <ul>
      <p>generate an array of integers from 1 to n (i.e. 12)</p>
      {generateArray(12).map(element => <li>{element}</li>)}

      <p>generate an array of random integers from 1 to 25 (i.e. 12)</p>
      {generateRandomArray(12).map(element => <li>{element}</li>)}

    </ul>
  </div>
)

export default MyApp