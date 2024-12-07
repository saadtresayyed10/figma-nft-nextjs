import * as React from "react";
import { FooterColumnProps } from "../types";

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col text-xl font-semibold uppercase text-neutral-200 tracking-[2px] max-md:mt-10">
    <div className="self-start leading-none">{title}</div>
    <div className="mt-7 leading-7">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);
