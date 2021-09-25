import React from 'react';
import './Button.css'

import { Link } from "react-scroll";
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// this handles what view should be displayed based on the props passed
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    scrollTo,
}) => {
    
    // designate what should the layout display
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link 
            activeClass='active'
            to={scrollTo}
            className='btn-mobile'
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )

};