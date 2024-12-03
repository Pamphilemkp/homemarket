import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are Homemarket</Title>
          <p className="my-5 flex flex-col items-center">
          Your connection to the vibrant Sunday Market—without leaving your home.
          We bring the freshest produce, handmade goods, and market treasures right
          to your doorstep at unbeatable prices. Experience the best of local shopping,
          hassle-free, with the same quality and affordability you love. At Home Market,
          we make it simple to enjoy the Sunday Market’s charm, comfort, and savings—all
          delivered to your place!
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
