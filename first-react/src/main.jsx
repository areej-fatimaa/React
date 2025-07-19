import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime";

function MyApp() {
  return (
    <div>
      <h1>My Custom React App</h1>
    </div>
  )
}
// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//     },
//     Children:'Click here to go to Google',
// }

const anotherElement=(
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const anotherUser="Areej Fatima"
const ReactElement=React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click here to go to Google',
  // if else wagera yhan ni likh sakte kionke ye object hai
  anotherUser
)



createRoot(document.getElementById('root')).render(
    //     {/* object cant be written as this */}
    // {/* <ReactElement />  */}
    // {/* this is not wprking because it was written for custom react anf for that we also written custom react render but this render is from react lib */}
    // {/* ReactElement */}
    // anotherElement
     ReactElement
    // <App/>
)
