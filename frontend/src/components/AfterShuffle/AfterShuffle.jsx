import { compose } from '@reduxjs/toolkit';
import React from 'react'

export default function AfterShuffle() {
  const arr = ['ivan', 'boris', 'evgen', 'kolya', 'misha', 'galya'];
  console.log(arr)
  let j = Math.ceil(Math.random() * (arr.length - 1));
  const cutArr = arr.splice(0,j)
  const newArr = arr.concat(cutArr)
  console.log('j', newArr)

  let link = (Math.random()).toString(36).substring(6);
  console.log(link)
  
  
  
  return (
    <div>AfterShuffle</div>
  )
}
