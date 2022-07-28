// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessserviceLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusinessserviceLineIcon(props: BusinessserviceLineIconProps) {
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
          "M6.322 8.938a13 13 0 0117.68-.656A13 13 0 0142.358 26.59l-15.53 15.58a4 4 0 01-5.438.204l-.22-.202L5.642 26.59a13 13 0 01.68-17.652zm2.828 2.828a9 9 0 00-.292 12.42l.292.308L24 39.344l10.606-10.608-7.07-7.07-2.12 2.12a6.001 6.001 0 01-8.488-8.484l4.204-4.206a9.002 9.002 0 00-11.674.378l-.308.292zm16.972 5.656a2 2 0 012.828 0l8.484 8.484 1.416-1.412a9 9 0 00-12.422-13.02l-.306.292-6.364 6.364a2 2 0 00-.156 2.654l.156.174a2 2 0 002.654.156l.174-.156 3.536-3.536z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BusinessserviceLineIcon;
/* prettier-ignore-end */
