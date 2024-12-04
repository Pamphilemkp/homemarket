import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full  bg-black">
          <Image
            src="/images/homemart.png"
            alt="Homemarket background"
            layout="fill"
            priority
            objectFit="contain"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-3xl">Homemarket - Freshness at Your Doorstep</Title>
            <p className="text-xl sm:text-sm sm:w-2/5 w-full bg-black bg-opacity-50">
            {`Experience the Sunday Market from the comfort of your home! We deliver fresh fruits,
            vegetables, and local delicacies straight to your doorstep. No hassle, just the best
            picks at Sunday Market prices! 
            Get your hands on the season's finest produce—delivered fresh as if you handpicked it
            yourself, all without leaving your home.`}
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-3xl">The Best of Sunday Market, Delivered</Title>
            <p className="text-xl sm:text-sm sm:w-2/5 w-full bg-black bg-opacity-50">
            Why step out when we bring the vibrant Sunday Market to you? Enjoy the same low prices
            and variety you love, without the crowd or commute. <br />
            From organic greens to handmade goods, discover the joy of Sunday shopping—delivered with
            a smile to your place!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
