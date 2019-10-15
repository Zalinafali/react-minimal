import React from 'react'
import AppTitle from './AppTitle'

const generateArray = (n) => (Array.from({length: n}, (v,i)=>i+1))

const generateRandomArray = (n) => (Array.from({length: n}, () => Math.floor(Math.random() * 25)+1))

const Arr1 = [2,56,23,88,17,4];
const Arr2 = [2,5,8,10];

Arr2.sqrt = function(){
  return Arr2.map(element => Math.sqrt(element));
}

const sqrtArr2 = () => (Array.from(Arr2, element => Math.sqrt(element)))



const MyApp = () => (
  <div>
    <AppTitle/>

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

      <p>Print all elements larger than 15</p>
      {Arr1.map(element => element>15?<li>{element}</li>:false)}

      <p>Sqrt of Arr2 (method for Arr2)</p>
      {Arr2.sqrt().map(element => <li>{element}</li>)}

      <p>Sqrt of Arr2 (function)</p>
      {sqrtArr2().map(element => <li>{element}</li>)}

    </ul>


  </div>
)

export default MyApp