import Marquee from "react-fast-marquee";
import { partners } from "@/app/config/constants";
import Image from "next/image";

const Branding = () => {
  return (
    <div className="border-t border-b border-black py-10">
      <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-normal relative z-20">
        created by the early morning brew guru.
      </h3>
      <div className="text-center pt-1">
        <h3 className="uppercase bg-[#f091dd] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium">
          now powering the world&apos;s top newsletters
        </h3>
      </div>
      <Marquee className="flex">
        {partners.map((i, idx) => (
          <>
            <Image
              src={i.url}
              key={i.url}
              width={200}
              height={200}
              alt="partner"
              className={`md:mx-8 w-[150px] md:w-[180px] mx-3`}
            />
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;
