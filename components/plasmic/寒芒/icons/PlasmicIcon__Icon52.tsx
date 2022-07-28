// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon52Icon(props: Icon52IconProps) {
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
          "M7.105 15.21A3.001 3.001 0 115 15.17V8.83a3.001 3.001 0 112 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 002.895-2.21 3.001 3.001 0 112.032.064A5.001 5.001 0 0114 13h-4a3.001 3.001 0 00-2.895 2.21zM6 17a1 1 0 100 2 1 1 0 000-2zM6 5a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon52Icon;
/* prettier-ignore-end */
