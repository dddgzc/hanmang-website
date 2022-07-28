// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon51Icon(props: Icon51IconProps) {
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

      <path d={"M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"}></path>
    </svg>
  );
}

export default Icon51Icon;
/* prettier-ignore-end */
