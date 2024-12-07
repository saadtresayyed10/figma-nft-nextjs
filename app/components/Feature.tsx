import * as React from "react";
import { FeatureProps } from "../types";

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  isReversed,
}) => {
  const content = (
    <div className="flex flex-col items-start mt-2 text-xl font-semibold leading-none text-white max-md:mt-6 max-md:max-w-full">
      <div className="text-emerald-300 uppercase tracking-[2px]">analytics</div>
      <div className="self-stretch text-6xl font-bold capitalize leading-[57px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        {title}
      </div>
      <div className="mt-5 text-lg leading-7 w-[373px]">{description}</div>
      <div className="px-16 py-6 mt-6 text-white uppercase bg-indigo-400 rounded-[100px] tracking-[2px] max-md:px-5">
        {buttonText}
      </div>
    </div>
  );

  const image = (
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-contain grow w-full aspect-[1.07] max-md:mt-4"
    />
  );

  return (
    <div className="flex gap-5 max-md:flex-col">
      {isReversed ? (
        <>
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            {content}
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            {image}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            {image}
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            {content}
          </div>
        </>
      )}
    </div>
  );
};
