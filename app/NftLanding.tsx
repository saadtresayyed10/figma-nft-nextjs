import * as React from "react";
import { NavLink } from "./components/NavLink";
import { Testimonial } from "./components/Testimonials";
import { Feature } from "./components/Feature";
import { FooterColumn } from "./components/FooterColumn";
import { navLinks, testimonials, features, footerColumns } from "./data";

export const NftLanding: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-10 bg-sky-950 max-md:px-5">
      <div className="flex flex-col items-start ml-3.5 w-full max-w-[1092px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full text-xl leading-none text-white max-w-[1064px] max-md:max-w-full">
          <div className="font-bold uppercase">krypto</div>
          <div className="flex flex-wrap gap-10 text-center max-md:max-w-full">
            {navLinks.map((link, index) => (
              <NavLink key={index} label={link} />
            ))}
          </div>
        </div>

        <div className="flex z-10 flex-col self-stretch pl-2 mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-24 text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-8xl font-bold capitalize leading-[87px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    discover and collect rare NFTs
                  </div>
                  <div className="self-start mt-7 text-lg leading-7">
                    The most secure marketplace for buying and selling unique
                    crypto assets.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e90aa4ecd3400831e3e2e36955268dcc1949ba7643dc63e211c0e3759ae7e3b5?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt="NFT marketplace preview"
                  className="object-contain w-full aspect-[1.09] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 self-start mt-7 text-xl font-semibold leading-none uppercase tracking-[2px]">
            <button className="px-16 py-6 text-white bg-indigo-400 rounded-[100px] max-md:px-5">
              buy nfts
            </button>
            <button className="px-16 py-6 text-white border border-emerald-300 border-solid rounded-[100px] max-md:px-5">
              SELL NFTS
            </button>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="mt-28 ml-8 max-w-full w-[932px] max-md:mt-10"
            >
              <Feature {...feature} />
            </div>
          ))}

          <div className="self-center mt-28 text-xl font-semibold leading-none text-emerald-200 uppercase tracking-[2px] max-md:mt-10">
            testimonials
          </div>

          <div className="mt-0 w-full max-w-[1066px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mt-44 max-w-full w-[963px] max-md:mt-10">
            <div className="self-start text-xl font-semibold leading-none uppercase text-neutral-200 tracking-[2px]">
              krypto
            </div>
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {footerColumns.map((column, index) => (
                  <div
                    key={index}
                    className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                  >
                    <FooterColumn {...column} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
