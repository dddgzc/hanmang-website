// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Buildingbuilding3FillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Buildingbuilding3FillIcon(
  props: Buildingbuilding3FillIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
        d={"M13.333 13.481V1.333l14.667 8V28H4V9.333l9.333 4.148z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Buildingbuilding3FillIcon;
/* prettier-ignore-end */
