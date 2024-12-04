import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  const testimonials = [
    {
      id: 1,
      fullname: "Maria Demetriou",
      description: "Home Market has changed my life! As a busy mom, I don’t have time to go to the Sunday Market. Now, I get the same fresh fruits and vegetables delivered to my doorstep. The quality is unbeatable, and the prices are just like the market—super affordable!",
      imgSrc: "/images/client1.jpg"
    },
    {
      id: 2,
      fullname: "Ahmed Ozturk",
      description: "I was skeptical at first, but the service exceeded my expectations. They deliver everything fresh and on time. I’ve saved so much time and still enjoy the same low prices as the Sunday Market. Highly recommend it!",
      imgSrc: "/images/client2.jpg"
    },
    {
      id: 3,
      fullname: "Eleni Hadjisavva",
      description: "The variety is amazing! I can get all my favorite Sunday Market goodies without even stepping out. From organic produce to handmade treats, Home Market has it all. The delivery team is so friendly too!",
      imgSrc: "/images/client1.jpg"
    },
    {
      id: 4,
      fullname: "Mustafa Kaya",
      description: "As someone who loves supporting local farmers, Home Market makes it so easy. The convenience of having everything delivered to my place is unmatched. It feels like the market came to me—without the hassle!",
      imgSrc: "/images/client2.jpg"
    }

  ];

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <Slider {...settings}>
      {testimonials.map((item )=>( 
        <CustomerItem imgSrc={item.imgSrc} fullname={item.fullname} description={item.description} key={item.id}/>
      ))}
      </Slider>
    </div>
  );
};

export default Customers;
