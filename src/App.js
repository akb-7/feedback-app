import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback,setFeedback] = useState(FeedbackData);
  console.log(feedback);
  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item)=> item.id!==id));
    }
  }
  return (
    <>
    <Header text='Feedback UI'/>
    <div className="App">
      <FeedbackForm />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}

export default App;
