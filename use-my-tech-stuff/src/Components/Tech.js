import React from 'react';

const Tech = (props) =>{
    const { tech } = props;

    return(
        <div className='tech-for-rent'>
            <img 
                src={tech.image}
                alt='Item for rent'
                classname='tech'
            />
            <p>{tech.description}</p>
            <p>{tech.owner}</p>
        </div>
    )
}