import React from 'react';

function CardItem(props){
    return(
        <>
            <li className='cards__item'>
                <a 
                    href={props.path} 
                    className='cards__item__link'
                    rel="noreferrer" 
                    target="_blank"
                    >
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Project Image' className="cards__item__img"/>
                    </figure>
                    <div className='cards__item__title'>
                        <h2 className='cards__item__header'>{props.title}</h2>
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    );   
}

export default CardItem;