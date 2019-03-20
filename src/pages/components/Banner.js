import React from 'react';
import { Carousel } from 'antd';

const Banner = () => (
  <Carousel autoplaySpeed={5000} className={`banner`} autoplay={true} effect="fade">
    <div>
      <img
        width={`625px`}
        height={`270px`}
        src="https://shojoimg.blob.core.windows.net/pics/reactPoster.png"
        alt=""
      />
    </div>
    <div>
      <img
        width={`625px`}
        height={`270px`}
        src="https://shojoimg.blob.core.windows.net/pics/reactBest.png"
        alt=""
      />
    </div>
    <div>
      <img
        width={`625px`}
        height={`270px`}
        src="https://shojoimg.blob.core.windows.net/pics/MERN.png"
        alt=""
      />
    </div>
  </Carousel>
);

export default Banner;
