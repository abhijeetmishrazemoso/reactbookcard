import './BookCard.css'
import {FaClock} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'

function BookCard(props){
    return (<div className="flex-div">
        <div className="flex-img"><img src='https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg'/></div>
        <h2>Building an inclusive Organisation!</h2>
        <h3>Stephen-Frost, Raafi Karim...</h3>
        <div className="internal-grid-div">
            <p><FaClock /> 15-minute read</p>
            <p><BsFillPersonCheckFill /> 17.1k reads</p>
        </div>
    </div>);
}

export default BookCard;