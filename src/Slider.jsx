import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const data = [
  {
    name: "Jane Adams",
    role: "Freelancer",
    image: "/person1.jpg", 
    text: "I dropped by to have a cappuccino and honestly, after 30 days here we did not have high expectations. but if this cappuccino was served, i would be just as satisfied! great place with perfectly normal prices that i recommend!"
  },
  {
    name: "Sam Williams",
    role: "Entrepreneur",
    image: "/person2.jpg",
    text: "I've been ordering beans from you for ten years. the quality of the product is consistently high! i’m grateful for the care that is apparently put into the roasts and the excellent customer service."
  },
  {
    name: "Angela Gonzales",
    role: "Manager",
    image: "/person3.jpg",
    text: "I've been ordering beans from you for ten years. the quality of the product is consistently high! i’m grateful for the care that is apparently put into the roasts and the excellent customer service."
  }
];

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center m-5 space-y-2">
        <h1 className="italic font-[cursive] text-amber-950 font-semibold text-3xl">
          Come and join
        </h1>
        <h1 className="text-amber-950 font-semibold text-2xl">
          OUR HAPPY CUSTOMERS
        </h1>
      </div>

      <div className="w-11/12 mx-auto">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#EDE5DB] text-gray-700 rounded-xl p-5 h-full flex flex-col justify-between">
                
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <img src={d.image} alt="" className="h-20 w-20 rounded-full" />
                    <div className="flex flex-col justify-center">
                      <p className="text-base font-semibold">{d.name}</p>
                      <p className="text-sm text-gray-600">{d.role}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    <StarRateIcon fontSize="small" />
                    <StarRateIcon fontSize="small" />
                    <StarRateIcon fontSize="small" />
                    <StarRateIcon fontSize="small" />
                    <StarHalfIcon fontSize="small" />
                  </div>
                </div>

                <p className="mt-4 text-sm ">{d.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
