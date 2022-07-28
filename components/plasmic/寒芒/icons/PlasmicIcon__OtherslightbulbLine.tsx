// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OtherslightbulbLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OtherslightbulbLineIcon(props: OtherslightbulbLineIconProps) {
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
          "M19.946 36H22V26h4v10h2.054c.264-2.404 1.49-4.388 3.48-6.554.226-.244 1.664-1.734 1.834-1.946a12 12 0 10-18.74-.004c.172.214 1.614 1.706 1.836 1.948 1.992 2.168 3.218 4.152 3.482 6.556zM20 40v2h8v-2h-8zm-8.492-10a16 16 0 1124.98.004C35.248 31.548 32 34 32 37v5a4 4 0 01-4 4h-8a4 4 0 01-4-4v-5c0-3-3.25-5.452-4.492-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OtherslightbulbLineIcon;
/* prettier-ignore-end */
