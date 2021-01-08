import React from 'react';

const Item = () =>{


    return(
        <div className='item-wrapper'>
            <div className='image-wrapper'>
                <img src={} alt={}/>
            </div>

            <div classname='item-name-wrapper'>
                <h2>{item.name}</h2>{/*can change for naming*/}
                <h2>{item.priceOfRent}</h2>
                <h2>{item.owner}</h2>
            </div>

            <div>
            <h4>Desriprion</h4>
            <p>{/*Description info*/}</p>
            </div>

            <button>Rent</button>

        </div>
    )

}

export default Item;