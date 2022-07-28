// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DesigngridLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DesigngridLineIcon(props: DesigngridLineIconProps) {
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
          "M28 20h-8v8h8v-8zm4 0v8h6v-8h-6zm-4 18v-6h-8v6h8zm4 0h6v-6h-6v6zm-4-28h-8v6h8v-6zm4 0v6h6v-6h-6zM16 20h-6v8h6v-8zm0 18v-6h-6v6h6zm0-28h-6v6h6v-6zM8 6h32a2 2 0 012 2v32a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DesigngridLineIcon;
/* prettier-ignore-end */
