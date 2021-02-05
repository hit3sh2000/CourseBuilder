import React from 'react';
// import './index.css';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    autoplay: true,
    autoplaySpeed: 1500,
  };

  // const [settings, setSettings] = useState(config);

  const products = [
    {
      img: '/images/product1.jpg',
      title: 'Dolore magna',
      text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
      img: '/images/product2.jpg',
      title: 'Eget est lorem',
      text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
      img: '/images/product3.jpg',
      title: 'Tempus imperdiet',
      text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
      img: '/images/product4.jpg',
      title: 'Mattis rhoncus',
      text: 'Bibendum neque egestas congue quisque.'
    },
    {
      img: '/images/product5.jpg',
      title: 'Odio ut enim',
      text: 'Mattis rhoncus urna neque viverra justo.'
    }
  ]

  // const onChangeCenterMode = e => {
  //   if (e.target.checked) {
  //     setSettings({
  //       ...config,
  //       centerMode: true,
  //       centerPadding: '50px'
  //     });
  //   } else {
  //     setSettings(config);
  //   }
  // }

  return (
    <div className="AboutUs">

      <Slider {...config}>
        {products.map((x, i) => {
          return <div key={i} className="img-card" >
            <img className="img" src={x.img} alt={'image1'} />
            <div class="card-body">
              <div className="card-title">{x.title}</div>
              <div className="card-text">{x.text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default AboutUs;
