import React, { useState } from 'react';
function App() {
const [color,setColor]= useState("olive");
  return (
    <div className="w-full h-screen duration-200 ease-in-out"
      style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}
                // onclick{setColor}onclick expect you pass a function to it and its reference too to pass values to it we write like below
                onClick={()=>setColor("red")}>Red</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "blue"}}
                onClick={()=>setColor("blue")}
                >Blue</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}
                onClick={()=>setColor("green")}
                >Green</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "olive"}}
                onClick={()=>setColor("olive")}
                >Olive</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "purple"}}
                onClick={()=>setColor("purple")}
                >Purple</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "yellow"}}
                onClick={()=>setColor("yellow")}
                >Yellow</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "black"}}
                onClick={()=>setColor("black")}
                >Black</button>
                <button className="outline-non px-4 px-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "white",border: "1px solid black",color: "black"}}
                onClick={()=>setColor("white")}
                >White</button>     
              </div>
            </div>
      </div>
  )
}

export default App
