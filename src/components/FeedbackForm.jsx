import { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'

function FeedbackForm() {
    const [text,setText] = useState("");
    const [rating,setRating] = useState(0);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {
                text:text,
                rating:rating
            }

            console.log(newFeedback);
        }
    }
    const handleTextChange = (e) =>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text!=null && text.trim().length <=10){
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 characters');
        }
        else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
  return (
    <Card>
        <form onClick={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>{
                setRating(rating)
            }}/>
            <div className="input-group">
                <input value = {text} onChange={handleTextChange} type="text" placeholder='Write a review' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && 
                <div className='message'>
                    {message}
                </div>
            }
        </form>
    </Card>
  )
}

export default FeedbackForm