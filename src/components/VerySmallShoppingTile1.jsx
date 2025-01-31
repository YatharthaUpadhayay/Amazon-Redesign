import MajorBtn from "./MajorBtn";
import { useRef, useEffect } from "react";

export default function VerySmallShoppingTile1(props) {
    const containerRef = useRef(null);
    const textContainer = useRef(null);
    const button = useRef(null);
    const prizeContainer = useRef(null);
    const discount = useRef(null);
    const imageForTile = useRef(null);

    const limitedTimeDeal = () => {
        if (!props.isLimitedTime) { return null; }
        return (
            <p
                style={{ fontWeight: 'bolder', color: 'var(--primary-red)', fontSize: '0.9rem' }}
            >Limited time deal</p>
        )
    }
    const isAmazonChoice = () => {
        if (!props.isAmazonChoice) { return null; }
        return (
            <div className="amazonChoice">Amazon's choice</div>
        )
    }

    const handleHover = () => {
        containerRef.current.style.padding = "0px 0px 8px 0px";
        textContainer.current.style.padding = "8px";
        prizeContainer.current.style.padding = "8px";
        discount.current.style.border = 'none';
        imageForTile.current.style.height = `${containerRef.current.offsetHeight/2}px`;
        imageForTile.current.style.borderRadius = '0px';
    }
    
    const negativeHandleHover = () => {
        containerRef.current.style.padding = "8px";
        textContainer.current.style.padding = "0px";
        prizeContainer.current.style.padding = "0px";
        discount.current.style.border = '0.5px solid var(--primary-text-color-negative)';
        imageForTile.current.style.height = '100%';
        imageForTile.current.style.borderRadius = '6px';
    }

    useEffect(() => {
        containerRef.current.addEventListener('mousemove', handleHover);
        containerRef.current.addEventListener('mouseleave', negativeHandleHover);

        return () => {
            containerRef.current.removeEventListener('mousemove', handleHover);
            containerRef.current.removeEventListener('mouseleave', negativeHandleHover);
        }
    }, []);


    return (
        <div ref={containerRef} className="containerForVerySmallShoppingTile1">
            {isAmazonChoice()}
            <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
                <img
                    ref={imageForTile}
                    src={props.tileImage}
                    className="imageForVerySmallShoppingTile1"
                />
                <div
                    ref={discount}
                    style={{
                        background: 'var(--primary-red)',
                        position: 'absolute',
                        display: 'inline',
                        padding: '8px 10px',
                        fontSize: '0.9rem',
                        color: 'var(--primary-text-color-negative)',
                        borderRadius: 'var(--border-radius-normal)',
                        border: '0.5px solid var(--primary-text-color-negative)',
                        fontWeight: 'bold',
                        transform: 'translate(0%, 0%)',
                        left: '0%',
                        bottom: '0%',
                        margin: '8px'
                    }}
                >{props.discount}% off</div>
            </div>

            <div ref={textContainer} style={{ transition: 'var(--std-transition)' }}>
                {limitedTimeDeal()}
                <p
                    style={{
                        fontSize: '0.9rem'
                    }}
                >{props.name}</p>
            </div>
            <div
                ref={prizeContainer}
                style={{
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                }}
            >
                <p
                    style={{
                        fontSize: '1.5rem',
                        color: 'var(--primary-dark-blue)',
                        display:'flex',
                        alignItems:'start'
                    }}
                ><span style={{fontSize:'0.9rem'}}>₹</span>{props.prize}</p>
                <p
                    style={{
                        color: 'var(--primary-text-gray)',
                        textDecoration: 'line-through'
                    }}
                >₹{props.mrp}</p>
            </div>
            <MajorBtn ref={button} hoverState={false} title="Add to cart" />
        </div>
    )
}