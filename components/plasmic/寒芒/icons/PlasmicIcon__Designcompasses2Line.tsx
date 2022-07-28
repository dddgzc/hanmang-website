// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Designcompasses2LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Designcompasses2LineIcon(props: Designcompasses2LineIconProps) {
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
          "M32.66 27A13.976 13.976 0 0038 16h4a17.975 17.975 0 01-7.324 14.492l5.056 8.756a4 4 0 01-1.464 5.464l-7.054-12.216A17.94 17.94 0 0124 34a17.94 17.94 0 01-7.214-1.504L9.732 44.712a4 4 0 01-1.464-5.464l10.126-17.54A8.004 8.004 0 0122 8.252V4h4v4.252a8.004 8.004 0 013.606 13.456L32.66 27zm-3.46 2.004l-3.056-5.294a8.007 8.007 0 01-4.284 0l-3.056 5.294a13.98 13.98 0 005.198.996c1.836 0 3.59-.354 5.198-.996zM24 20a4 4 0 100-8 4 4 0 000 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Designcompasses2LineIcon;
/* prettier-ignore-end */
