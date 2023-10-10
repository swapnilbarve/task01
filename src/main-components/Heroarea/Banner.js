import React from 'react';
import './Banner.css';
import bannerimg from './herosectionimages/image 1.png';
import Baggy from './herosectionimages/image 2.png';
import winter from './herosectionimages/image 3.png';
import offerwomen from './herosectionimages/image 4.png';
import trendy from './herosectionimages/image 5.png';
import bestdeal from './herosectionimages/image 6.png';
import Category from './Category';
import Categorydata from './CategoryData';
import Productcard from './Productcard';
import ProductsData from './ProductsData';
import banner12 from './productsimages/banner12.png';
import Collection from './Collection';
import Collectiondata from './Collectiondata';
import losefit from './productcollectionimg/banner13.png';
import Offers from './Offers';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerimg'>
                <img src={bannerimg} className='responsive' />
            </div>


            <div className='categories-container'>
                {Categorydata.map((data) => (
                    <Category imgsrc={data.imgsrc} title={data.title} />
                ))}
            </div>

            <div className='offersection'>
                <div className='sectionoffers'>
                    <div className='offersection1'>
                        <div><img src={Baggy} /></div>
                        <div><img src={winter} /></div>
                    </div>
                    <div className='offersection2'>
                        <div><img src={offerwomen} /></div>
                        <div><img src={bestdeal} /></div>
                        <div><img src={trendy} /></div>
                    </div>
                </div>
            </div> 


            {/* main products section */}

            <div class="headline"><p>Trending T-Shirts</p></div>

            <div className="product-grid">
                {ProductsData.map((item, index) => (
                    <Productcard key={index} productimg={item.productimg} />
                ))}
            </div>

            <div className="product-grid">
                {ProductsData.map((item, index) => (
                    <Productcard key={index} productimg={item.productimg} />
                ))}
            </div>

            {/* view all button */}

             <div className='viewAllbtn'>
                <button>VIEW ALL</button>
            </div>
   

           /* <div className='featuredproduct' >
            <div class="headline"><p>Featured Products</p></div>


            <div className="product-grid">
                {ProductsData.map((item, index) => (
                    <Productcard key={index} productimg={item.productimg} />
                ))}
            </div>

            <div className='viewAllbtn'>
                <button>VIEW ALL</button>
            </div>

            <div className='bannerimg1'>
                <img src={banner12} className='responsive1' />
            </div>

            <div class="headline"><p>New Products</p></div>

            <div className="product-grid">
                {ProductsData.map((item, index) => (
                    <Productcard key={index} productimg={item.productimg} />
                ))}
            </div>

            <div className='viewAllbtn'>
                <button>VIEW ALL</button>
            </div>

            </div>   


            <div className='bestsellingProducts' >

            <div class="headline"><p>Best Selling Products</p></div>

            <div className="product-grid">
                {ProductsData.map((item, index) => (
                    <Productcard key={index} productimg={item.productimg} />
                ))}
            </div>

            <div className='viewAllbtn'>
                <button>VIEW ALL</button>
            </div>

            </div>  

            {/* collection section */}
        <div className="collection-grid">
            {Collectiondata.map((coll, index) => (
                <Collection key={index} collectionimg={coll.collectionimg} 
                collectiontitle={coll.collectiontitle} />
            ))}
        </div>

        {/* lose fit offer banner */}
         <div className='losefitimage'>
            <img src={losefit} />
         </div>      

         {/* offers section  */}

         <Offers />
        

        </div>
    )
}

export default Banner;