// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildinggovernmentFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildinggovernmentFillIcon(
  props: BuildinggovernmentFillIconProps
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
        d={
          "M2.667 25.333V10.667H1.333V8h4V5.333A1.333 1.333 0 016.667 4h18.666a1.333 1.333 0 011.334 1.333V8h4v2.667h-1.334v14.666h1.334V28H1.333v-2.667h1.334zm14.666 0V16h-2.666v9.333h2.666zm-6.666 0V16H8v9.333h2.667zm13.333 0V16h-2.667v9.333H24zM8 6.667V8h16V6.667H8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildinggovernmentFillIcon;
/* prettier-ignore-end */
