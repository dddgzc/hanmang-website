// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Devicedatabase2LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Devicedatabase2LineIcon(props: Devicedatabase2LineIconProps) {
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
          "M10 25c0 .626.922 1.716 3.06 2.786C15.828 29.17 19.754 30 24 30c4.246 0 8.172-.83 10.94-2.214C37.078 26.716 38 25.626 38 25v-4.342C34.7 22.698 29.654 24 24 24s-10.7-1.304-14-3.342V25zm28 5.658C34.7 32.698 29.654 34 24 34s-10.7-1.304-14-3.342V35c0 .626.922 1.716 3.06 2.786C15.828 39.17 19.754 40 24 40c4.246 0 8.172-.83 10.94-2.214C37.078 36.716 38 35.626 38 35v-4.342zM6 35V15c0-4.97 8.06-9 18-9s18 4.03 18 9v20c0 4.97-8.06 9-18 9S6 39.97 6 35zm18-15c4.246 0 8.172-.83 10.94-2.214C37.078 16.716 38 15.626 38 15c0-.626-.922-1.716-3.06-2.786C32.172 10.83 28.246 10 24 10c-4.246 0-8.172.83-10.94 2.214C10.922 13.284 10 14.374 10 15c0 .626.922 1.716 3.06 2.786C15.828 19.17 19.754 20 24 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Devicedatabase2LineIcon;
/* prettier-ignore-end */
