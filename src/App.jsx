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

const data =
  [
    {
      "teacherName": "Jan Nowak",
      "teacherAge": 36,
      "active": true,
      "students": [
        {
          "name": "Maciej Janosz",
          "age": 12
        },
        {
          "name": "Wojciech Kowalski",
          "age": 15
        },
        {
          "name": "Wioletta PoznaĹska",
          "age": 1000000
        }
      ]
    },
    {
      "teacherName": "Mariusz Flasinski",
      "teacherAge": 56,
      "active": true,
      "students": [
        {
          "name": "Jan Kot",
          "age": 12
        },
        {
          "name": "Jan Ziobro",
          "age": 15
        },
        {
          "name": "Adam Malysz",
          "age": 41
        }
      ]
    },
    {
      "teacherName": "Wojciech Kuzak",
      "teacherAge": 44,
      "active": false,
      "students": [
        {
          "name": "Janina Wronska",
          "age": 22
        },
        {
          "name": "John Dover",
          "age": 7
        },
        {
          "name": "Emil Petterson",
          "age": 46
        }
      ]
    }
  ]

function allStudents(){
  document.getElementById('data_id').innerHTML = "List of all students:"
  data.forEach(element1 => element1.students.forEach(element2 => document.getElementById('data_id').innerHTML += "<li>" + element2.name + "</li>"))
}

function sortStudents(){
  document.getElementById('data_id').innerHTML = "Sorted list of all students:"
  var stud = []
  data.forEach(element1 => element1.students.forEach(element2 => stud.push(element2.name)))
  stud.sort().forEach(element => document.getElementById('data_id').innerHTML += "<li>" + element + "</li>")
}

function oldStudents(){
  document.getElementById('data_id').innerHTML = "List of old students:"
  data.forEach(element1 => {
    if(element1.active == true){
      element1.students.forEach(element2 => {
        if(element2.age > 20){
          document.getElementById('data_id').innerHTML += "<li>" + element2.name + "</li>"
        }
      })
    }})
}

const MyApp = (props) => (

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

    <button type="button" onClick={allStudents}>All students</button>
    <button type="button" onClick={sortStudents}>Sort students</button>
    <button type="button" onClick={oldStudents} >Old students</button>

    <ul id="data_id"/>

  </div>
)

export default MyApp