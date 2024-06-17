import { KongPlan, babyPlan, DinoPlan } from "@/app/config/constants";
import { ICONS } from "@/shared/utils/icons";
import { Button } from "@nextui-org/react";


const PricingCard = ({ active }) => {
  return (
    <div className="w-full md:flex items-stretch justify-around py-8">
      {/* baby plan */}
      <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0 flex flex-col justify-between">
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-black mb-5">
          Baby
        </h5>
        <div className="border-b pb-8 border-black">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "9.99" : "5.99"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">What&apos;s included...</p>
        </div>
        {babyPlan.map((i, idx) => (
          <div key={idx} className="flex items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button color="primary" className="text-xl w-full !py-6">
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Baby features,<br />then $
          {active === "Monthly" ? "9.99" : "5.99"}/mo
        </p>
      </div>

      {/* kong plan */}
      <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0 flex flex-col justify-between">
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-black">
          Kong
        </h5>
        <br />
        <div className="border-b pb-8 border-black">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "39.99" : "35.99"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">Everything in Baby, plus...</p>
        </div>
        {KongPlan.map((i, idx) => (
          <div key={idx} className="flex items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button
          color="primary"
          className="w-full text-xl !py-6"
          onClick={() =>
            handleSubscription({
              price:
                active === "Monthly"
                  ? "price_1OnaWFSA1WAzNgKlsGN6K4ZW"
                  : "price_1Onbt8SA1WAzNgKlyrXYlJBG",
            })
          }
        >
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Kong features,<br />then $
          {active === "Monthly" ? "39.99" : "35.99"}/mo
        </p>
      </div>

      {/* Dino plan */}
      <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-black">
          Dino
        </h5>
        <br />
        <div className="border-b pb-8 border-black">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "79.99" : "75.99"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">Everything in Kong, plus...</p>
        </div>
        {DinoPlan.map((i, idx) => (
          <div key={idx} className="flex w-full items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button
          color="primary"
          className="w-full text-xl !py-6"
          onClick={() =>
            handleSubscription({
              price:
                active === "Monthly"
                  ? "price_1On2H2SA1WAzNgKlV64Zj6gE"
                  : "price_1Onf9gSA1WAzNgKlg8NLBP4r",
            })
          }
        >
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Dino features,<br />then $
          {active === "Monthly" ? "79.99" : "75.99"}/mo
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
