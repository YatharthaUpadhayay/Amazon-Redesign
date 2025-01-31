import { useRef, useEffect } from "react";

export default function MajorBtn(props) {
    const button = useRef(null);

    const handleClick = () =>{
        props.functionForBtn();
    }
    
    useEffect(() => {
      if(props.isActiveBtn){
        button.current.style.borderRadius = "12px";
      }
      else {
        button.current.style.borderRadius = "6px";
      }
    
      return () => {}
    }, [props.isActiveBtn])
    

    return (
        <button 
        ref={button}
        className="majorBtn"    
        onClick={handleClick}
        style={props.customStyle}
        >{props.title}</button>
    )
}