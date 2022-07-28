// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessmedalLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusinessmedalLineIcon(props: BusinessmedalLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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

      <path
        d={
          "M24 14a16 16 0 110 32 16 16 0 010-32zm0 4a12 12 0 100 24 12 12 0 000-24zm0 3l2.646 5.36 5.914.86-4.28 4.17 1.01 5.892L24 34.5l-5.29 2.78 1.01-5.89-4.28-4.172 5.914-.86L24 21zM36 4v6l-2.726 2.276A19.871 19.871 0 0026 10.098V4h10zm-14-.002v6.1a19.87 19.87 0 00-7.272 2.176L12 10V4l10-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BusinessmedalLineIcon;
/* prettier-ignore-end */
