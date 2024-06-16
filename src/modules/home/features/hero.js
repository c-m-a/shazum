import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#f7f5ff] h-[95vh]">
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        <Image
          src={"https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"}
          alt=""
          width={800}
          height={500}
          className="w-[80%] object-cover spin-slow"
        />
        <div className="absolute">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] md:text-[7xl] lg:text-[4rem] xl:text-[5.75rem] max-w-4xl mx-auto text-center z-10">
            the newsletter platform built for <span className="font-style">GROW</span>
          </h1>
        </div>
      </div>
    </div>
  )
};

export default Hero;
