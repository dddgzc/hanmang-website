// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon49Icon(props: Icon49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M19 8h2a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v5zm-2 0V4H5v14h7V9a1 1 0 011-1h4zm-3 2v10h6V10h-6z"
        }
      ></path>
    </svg>
  );
}

export default Icon49Icon;
/* prettier-ignore-end */
