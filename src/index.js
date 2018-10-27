import React from 'react'
import {render} from 'react-dom'
import {hello,goodbye} from './lib'

//take in 2 arguments, name of element we want to render, 2nd is where we want it to be rendered in the DOM
render(
  <div>
    {hello}
    {goodbye}
  </div>,
  document.getElementById('react-container')
)
