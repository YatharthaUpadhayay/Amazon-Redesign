import { useRef, useEffect, useState } from 'react'
import MajorBtn from "./MajorBtn";

export default function VideoTile(props) {
    const [activeButton, setActiveButton] = useState(false);

    const container = useRef(null);
    const textContainer = useRef(null);
    const description = useRef(null);
    const title = useRef(null);
    const subTitle = useRef(null);

    const handleHover = () => {
        container.current.style.scale = '1.01';
        container.current.style.padding = '0px';
        container.current.style.borderRadius = '12px';
        textContainer.current.style.padding = '16px';
        textContainer.current.style.position = 'absolute';
        description.current.style.display = 'block';
        title.current.style.fontSize = '2rem';
        title.current.style.fontWeight = 'bold';
        subTitle.current.style.fontWeight = 'normal';
        subTitle.current.style.fontSize = '1rem';
        setActiveButton(true);
    }
    
    const negativeHandleHover = () =>{
        container.current.style.scale = '1';
        container.current.style.padding = '16px';
        container.current.style.borderRadius = '6px';
        textContainer.current.style.padding = '0px';
        textContainer.current.style.position = 'static';
        description.current.style.display = 'none';
        title.current.style.fontSize = '1rem';
        title.current.style.fontWeight = 'normal';
        subTitle.current.style.fontWeight = 'bold';
        subTitle.current.style.fontSize = '1.2rem';
        setActiveButton(false);
    }

    useEffect(() => {
      
        container.current.addEventListener('mousemove', handleHover);
        container.current.addEventListener('mouseleave', negativeHandleHover);
        
        return () => {
            container.current.removeEventListener('mousemove', handleHover);
            container.current.removeEventListener('mouseleave', negativeHandleHover);
            
        }
    }, [])
    

    return (
        <div ref={container} className="videoTileContainer">
            <img src={props.image} />
            <div
                ref={textContainer}
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    background:'var(--primary-text-color-negative)',
                    bottom:'0%'
                }}
            >
                <div style={{flex:'2'}}>
                    <p ref={subTitle} style={{fontSize:'1.2rem', fontWeight:'bold'}}>{props.subTitle}</p>
                    <p ref={title}>{props.title}</p>
                    <p ref={description} style={{display:'none', fontSize:'0.8rem'}}>{props.description}</p>
                </div>
                <div style={{flex:'1', display:'flex', flexDirection:'column', gap:'12px'}}>
                    <MajorBtn isActiveBtn={activeButton} title="Watch on Prime Video" />
                    <MajorBtn isActiveBtn={activeButton} customStyle={activeButton ? {background:'var(--primary-yellow)'} : {display:'none'}} title="Add to WishList" />
                </div>
            </div>
        </div>
    )
}