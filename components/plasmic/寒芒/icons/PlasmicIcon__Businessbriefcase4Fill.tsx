// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Businessbriefcase4FillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Businessbriefcase4FillIcon(
  props: Businessbriefcase4FillIconProps
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
          "M12 17.333v4h8v-4h9.333v9.334A1.333 1.333 0 0128 28H4a1.334 1.334 0 01-1.333-1.333v-9.334H12zm2.667-2.666h2.666v4h-2.666v-4zm-5.334-8v-4a1.333 1.333 0 011.334-1.334h10.666a1.333 1.333 0 011.334 1.334v4H28A1.333 1.333 0 0129.333 8v6.667H20V12h-8v2.667H2.667V8A1.333 1.333 0 014 6.667h5.333zM12 4v2.667h8V4h-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Businessbriefcase4FillIcon;
/* prettier-ignore-end */
