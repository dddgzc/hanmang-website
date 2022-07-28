// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SystemcheckboxCircleLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SystemcheckboxCircleLineIcon(
  props: SystemcheckboxCircleLineIconProps
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
          "M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20zm0-4a16 16 0 100-32 16 16 0 000 32zm-1.994-8l-8.486-8.486 2.828-2.828 5.658 5.658L33.318 15.03l2.83 2.828L22.006 32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SystemcheckboxCircleLineIcon;
/* prettier-ignore-end */
