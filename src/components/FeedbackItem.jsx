import React from 'react'
import {useState} from 'react'
function FeedbackItem() {
    const [rating,setRating] = useState(7) // have name and setName
    const [text,setText] = useState("This is an example of feedback item") // have name and setName
    const handleClick = () =>{
        setRating((prev)=>{
            console.log(prev);
            return prev+1
        });
    }
    
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click me </button>
    </div>
  )
}

export default FeedbackItem