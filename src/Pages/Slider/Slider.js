import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel'
import './Slider.css'


// const images = [
//     {url:'https://welcome.setantasports.com/wp-content/uploads/2022/07/2@2x_gradient@2x-copy1.webp'},
//     {url:'https://d2560u4h06m0te.cloudfront.net/images/2022/1/1/121818_003_basket.JPG'},
//     {url:'https://www.bssnews.net/assets/news_photos/2022/03/07/image-48928-1646659412.jpg'},
//    { url:'https://www.thestatesman.com/wp-content/uploads/2020/02/new-zealand.jpg'},
//    { url:'https://cdn.britannica.com/01/193601-050-F8F18A9B/Katie-Ledecky-American-lead-way-women-world-2016.jpg'},
//    { url:'https://cdn.dmcl.biz/media/image/175264/o/GettyImages-1187730400.jpg'}
// ]

const Slider = () => {
    return (
      <div>
        <Carousel infiniteLoop autoPlay>
          <div className="image">
            <img src="https://www.sportune.com.au/content/uploads/sites/7/2021/03/swimmer-PDQ7PMU-1920x1282.jpg" alt="" />
          </div>
          <div className="image">
            <img src="https://d2560u4h06m0te.cloudfront.net/images/2022/1/1/121818_003_basket.JPG" alt="" />
          </div>
          <div className="image">
            <img src="https://www.bssnews.net/assets/news_photos/2022/03/07/image-48928-1646659412.jpg" alt="" />
          </div>
          <div className="image">
            <img src="https://www.thestatesman.com/wp-content/uploads/2020/02/new-zealand.jpg" alt="" />
          </div>
          <div className="image">
            <img src="https://cdn.dmcl.biz/media/image/175264/o/GettyImages-1187730400.jpg" alt="" />
          </div>
        </Carousel>
    </div>
    );
};

export default Slider;