import './BookCard.css'
import {FaClock} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import Image from '../atoms/Image';
import Title from '../atoms/Title';

import BookCardMolecule from '../molecules/BookCardMolecule'

function BookCard(props){
    return (<BookCardMolecule name='nice'/>);
}

export default BookCard;