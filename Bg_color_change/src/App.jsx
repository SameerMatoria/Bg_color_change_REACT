import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="" 
      style={{
        width:"100vw",
        height:"90vh",
        backgroundColor: color,
        color:"black",
        borderRadius: "10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px",
        margin:"-100px"
        }}>
          <button onClick={()=>setColor("red")}
          style={{
            height:"70px",
            width:"100px",
            }}>Red</button>
          <button onClick={()=>setColor("green")}
          style={{
            height:"70px",
            width:"100px",
            }}>Green</button> 
          <button onClick={()=>setColor("blue")}
           style={{
            height:"70px",
            width:"100px",
            }}>Blue</button>  
          </div>  
    </>
  )
}

export default App
