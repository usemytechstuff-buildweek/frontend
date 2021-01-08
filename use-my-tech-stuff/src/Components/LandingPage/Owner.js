import React from 'react';

const Owner = (props) =>{
    const { myItems, items } = props;

    return(
        <div>
            {/*My items for rent */}
            <div className='listings-wrapper'>
                {myItems.map((item) =>{
                    <div className='item-wrapper' key={item.id}>
                        <Link {/*link to item page*/}>
                            <img src={} alt={}/>
                            <p>{item.name}</p>
                            <p>{item.priceOfRent}</p>
                        </Link>
                    </div>
                    })
                }
            </div>

       
            {/*Other items for rent */}
            <div className='listings-wrapper'>
                {items.map((item) =>{
                    <div className='item-wrapper' key={item.id}>
                        <Link {/*link to item page*/}>
                            <img src={} alt={}/>
                            <p>{item.name}</p>
                            <p>{item.priceOfRent}</p>
                        </Link>
                    </div>
                    })
                }
            </div>
        
        </div>
    )

}

export default Owner;