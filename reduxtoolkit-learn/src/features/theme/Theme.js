import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './ThemeSlice';

function Theme() {
  const [Color,setColor]= useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      <input className='textbox' type= "text" onChange={(e)=>setColor(e.target.value)}></input>
      <button className='button' onClick={()=>{dispatch(changeTextColor(Color))}}>Change the Text Color</button>
      <h1>{Color}</h1>
    </div>
  )
}

export default Theme
