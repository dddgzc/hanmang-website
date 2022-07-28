// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WeatherflashlightLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WeatherflashlightLineIcon(
  props: WeatherflashlightLineIconProps
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
          "M26 18h16L22 48V30H8L26 0v18zm-4 4v-7.56L15.064 26H26v8.788L34.526 22H22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WeatherflashlightLineIcon;
/* prettier-ignore-end */
