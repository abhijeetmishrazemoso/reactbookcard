import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import Image from "../atoms/Image";
import OnlyText from "../atoms/OnlyText";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";


function BookCardMolecule(props){
    return (<div className="flex-div">
        <div className="flex-img">
            <Image src='https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg'/></div>
        <Title text='Building an inclusive Organisation!'/>
        <Subtitle text='Stephen-Frost, Raafi Karim...'/>
        <div className="internal-grid-div">
            <p><FaClock /> <OnlyText text='15-minute read'/></p>
            <p><BsFillPersonCheckFill /> <OnlyText text='17.1k reads'/></p>
        </div>
    </div>);
}


export default BookCardMolecule;