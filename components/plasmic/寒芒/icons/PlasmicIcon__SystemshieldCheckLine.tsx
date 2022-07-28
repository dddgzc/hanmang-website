// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SystemshieldCheckLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SystemshieldCheckLineIcon(
  props: SystemshieldCheckLineIconProps
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
          "M24 2l16.434 3.652A2 2 0 0142 7.604v19.974c0 4.012-2.006 7.76-5.344 9.984L24 46l-12.656-8.438A11.995 11.995 0 016 27.58V7.604a2 2 0 011.566-1.952L24 2zm0 4.098l-14 3.11v18.37a8 8 0 003.562 6.656L24 41.194l10.438-6.96A7.996 7.996 0 0038 27.58V9.208L24 6.1v-.002zm8.904 10.346l2.83 2.828L23.006 32l-8.486-8.486 2.828-2.828 5.656 5.656 9.9-9.9v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SystemshieldCheckLineIcon;
/* prettier-ignore-end */
