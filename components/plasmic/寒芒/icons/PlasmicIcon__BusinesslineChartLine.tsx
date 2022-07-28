// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinesslineChartLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusinesslineChartLineIcon(
  props: BusinesslineChartLineIconProps
) {
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
          "M10 6v32h32v4H6V6h4zm30.586 6.586l2.828 2.828L32 26.828l-6-5.998-8.586 8.584-2.828-2.828L26 15.172l6 5.998 8.586-8.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BusinesslineChartLineIcon;
/* prettier-ignore-end */
