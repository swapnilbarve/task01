import React from 'react';
import './Banner.css';
import diamond from './productcollectionimg/diamond 1.png';
import discount from './productcollectionimg/discount 1.png';
import sevendays from './productcollectionimg/sevendays.png';
import qualityproduct from './productcollectionimg/Group 196.png';
import safepayment from './productcollectionimg/Group 197.png';
import helpline from './productcollectionimg/helpline.png';
import ellipse from './productcollectionimg/Ellipse 39.png';
import vectorleft from './productcollectionimg/Vectorleft.png';
import vectorright from './productcollectionimg/Vectorright.png';


const Offers = () => {
  return (
    <>
    <div className='offers'>
        <div className='offerCard'>
            <div className='offer__img'> <img src={diamond} /></div>
            <h5>Hurry Up!</h5>
            <h1>85% OFF</h1>
            <h3>Sale</h3>
            <div className='offerbtn'>
            <button>SHOP NOW</button>
            </div>
        </div>

        <div className='offerCard' style={{background:'#d6bebe'}} >
            <div className='offer__img'> <img src={discount} /></div>
            <h5>Hurry Up!</h5>
            <h1>75% OFF</h1>
            <h3>Sale</h3>
            <div className='offerbtn'>
            <button style={{background:'#d6bebe'}} >SHOP NOW</button>
            </div>
           
        </div>
        
    </div>
    {/* basic facilities */}
    <div className='basicFacilities'>
    <img src={ellipse}  className='ellipse'/>
    <img src={ellipse}  className='ellipse1'/>
        <div  className='basicFacilities_section  borderfacilities'>
            <div className='facilities__provide'>
                <img src={sevendays} />
                <h6>7 Days Returns</h6>
               
            </div>
           
        </div>

        <div  className='basicFacilities_section  borderfacilities'>
            <div className='facilities__provide'>
                <img src={qualityproduct} />
                <h6>Quality Products</h6>
            </div>
        </div>

        <div  className='basicFacilities_section   borderfacilities'>
            <div className='facilities__provide'>
                <img src={ safepayment } />
                <h6>Safe Payment</h6>
            </div>
        </div>
        <div  className='basicFacilities_section'>
            <div className='facilities__provide'>
                <img src={helpline} />
                <h6>24x7 Helpline</h6>
            </div>
        </div>
    </div>

    {/* subscribe section */}

    <div className='subscribe-section'>
        <div className='subscribe-section__box'>
        <div><img src={vectorleft} /></div>

        <div className='subscribe__info'>
         <h1 className='subscribe__title'>Subscribe to get updates on exciting offers & deals</h1>
         <div  className='inputarea__1'>
            <input type='text' placeholder='Enter your email' className='subscribeinput' />
            <button className='subscribebtn' >Subscribe</button>
         </div>
        </div>


        <div><img src={vectorright}  className='vectorright' /></div>
      
       
       
      
           
        

        </div>
    </div>



    </>

    
  )
}

export default Offers;