import { Button } from "@nextui-org/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#f7f5ff] h-[95vh]">
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden px-5">
        <Image
          src={"https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"}
          alt=""
          width={800}
          height={500}
          className="w-[80%] object-cover spin-slow"
        />
        <div className="absolute">
          <h2 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.5rem] md:text-[7xl] lg:text-[4rem] xl:text-[5.5rem] max-w-4xl mx-auto text-center z-10 mb-5">
            Affordable Newsletter Designed to Fuel <span className="font-style">Growth</span>
          </h2>
          <h3 className="text-3xl text-center mb-5">Built by people who want a better Newsletter alternative</h3>
          <div className="text-center mb-5">
            <Button color="primary" className="text-xl py-7 px-8">
              Get Started
            </Button>
          </div>
          <h4 className="text-center text-lg">start a 30day free trial</h4>
        </div>
      </div>
    </div>
  )
};

export default Hero;
