import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback,setFeedback] = useState(FeedbackData);
  console.log(feedback);
  return (
    <>
    <Header text='Feedback UI'/>
    <div className="App">
      <FeedbackList feedback={feedback}/>
    </div>
    </>
  );
}

export default App;
