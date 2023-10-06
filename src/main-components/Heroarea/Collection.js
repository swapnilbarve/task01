import React from 'react';
import './Banner.css';

const Collection = (prop) => {
    return (
        <div className='collection' >
            <div className='collection__card'>
                <div className='collection__card_img'>
                    <img src={prop.collectionimg} />
                </div>
                <div className='collection-card_title'>
                   <h1>{prop.collectiontitle}</h1>
                </div>

            </div>

        </div>
    )
}

export default Collection;