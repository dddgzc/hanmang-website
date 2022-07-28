// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon45Icon(props: Icon45IconProps) {
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
          "M16 16a3 3 0 110 6 3 3 0 010-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6a1 1 0 100 2 1 1 0 000-2zM6 14a2 2 0 10-.001 3.999A2 2 0 006 14zm8.5-12a5.5 5.5 0 110 11 5.5 5.5 0 110-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        }
      ></path>
    </svg>
  );
}

export default Icon45Icon;
/* prettier-ignore-end */
