<<<<<<< HEAD
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback,handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback</p>
    }
    console.log(feedback);
  return  <div className="feedback-list">
      {feedback.map((item)=>(
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
  </div>
  
}

=======
import React from 'react'
import FeedbackItem from './FeedbackItem';
function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback</p>
    }
    console.log(feedback);
  return  <div className="feedback-list">
      {feedback.map((item)=>(
          <FeedbackItem key={item.id} item={item}/>
      ))}
  </div>
  
}

>>>>>>> db5705521512e47477ff66145b4d523ae733ae83
export default FeedbackList