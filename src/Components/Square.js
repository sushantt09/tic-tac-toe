// import react from "react";
import "../Styles/Square.css";


const Square = ({value, onSquareClick})=> {
    // const [value, setValue] = useState(null);
    
    // function handleClick() {
    //     // console.log("Clicked");
    //     setValue('X');
    //    }

    return (<button className="Square" onClick={onSquareClick}>{value}</button>
    
    ); 
}


export default Square;