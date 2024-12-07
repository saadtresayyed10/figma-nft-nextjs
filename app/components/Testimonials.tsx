import * as React from "react";
import { TestimonialProps } from "../types";

export const Testimonial: React.FC<TestimonialProps> = ({ name, content }) => (
  <div className="flex flex-col grow px-14 pt-20 pb-14 w-full rounded-3xl bg-indigo-950 max-md:px-5 max-md:mt-3.5">
    <div className="self-center text-xl font-semibold leading-none text-white uppercase">
      {name}
    </div>
    <div className="mt-7 text-lg leading-7 text-center text-white">
      {content}
    </div>
  </div>
);
