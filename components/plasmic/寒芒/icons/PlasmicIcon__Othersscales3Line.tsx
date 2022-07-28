// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Othersscales3LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Othersscales3LineIcon(props: Othersscales3LineIconProps) {
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
          "M26 4v2.556l10 3.336 7.264-2.42 1.266 3.792-6.064 2.022 6.192 17.024A11.973 11.973 0 0136 34a11.97 11.97 0 01-8.658-3.69l6.188-17.024L26 10.774V38h8v4H14v-4h8V10.774l-7.536 2.512 6.192 17.024A11.965 11.965 0 0112 34a11.97 11.97 0 01-8.658-3.69L9.53 13.286l-6.06-2.02L4.736 7.47 12 9.89l10-3.334V4h4zm10 14.206l-3.916 10.772A7.95 7.95 0 0036 30c1.4 0 2.74-.36 3.916-1.02L36 18.204v.002zm-24 0L8.084 28.978A7.95 7.95 0 0012 30c1.4 0 2.74-.36 3.916-1.02L12 18.204v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Othersscales3LineIcon;
/* prettier-ignore-end */
