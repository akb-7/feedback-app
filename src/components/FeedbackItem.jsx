<<<<<<< HEAD
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item,handleDelete}) {
  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

=======
import Card from "./shared/Card"

function FeedbackItem({item}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}
 
>>>>>>> db5705521512e47477ff66145b4d523ae733ae83
export default FeedbackItem