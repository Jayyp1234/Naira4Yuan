import React from "react";

// export const BorderWrapper = ({
// 	noBorderAt = "",
//   borderStyle = "border-solid",
//   borderWidth = "border",
// 	as: As = "div",
// 	borderColor = "",
// 	cn = "",
// 	width = "sm",
// 	radiusSize = "rounded",
// 	children,
// 	...others
// }) => {
// 	const borderRadiusSize = {
// 		none: "rounded-none",
// 		sm: "rounded-sm",
// 		DEFAULT: "rounded",
// 		md: "rounded-md",
// 		lg: "rounded-lg",
// 		xl: "rounded-xl",
// 		"2xl": "rounded-2xl",
// 		"3xl": "rounded-3xl",
// 		full: "rounded-full",
// 	};

// 	const borderWidthSize = {
// 		none: "border-0",
// 		sm: "border",
// 		md: "border-2",
// 		lg: "border-4",
// 		xl: "border-8",
// 	};

// 	return (
// 		<As className={`${noBorderAt} ${borderWidthSize[width]} ${borderStyle} ${borderColor} ${cn} ${borderRadiusSize[radiusSize]}`} {...others}>
// 			{children}
// 		</As>
// 	);
// };


export const BorderWrapper = ({
  noBorderAt = "",
  borderStyle = "border-solid",
  borderWidth = "border",
  borderColor = "",
  radiusSize = "rounded",
  as: As = "div",
  cn = "",
  children,
  ...others
}) => {
  const borderRadiusSize = {
    none: "rounded-none",
    sm: "rounded-sm",
    DEFAULT: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  return (
    <As
      className={`
        ${noBorderAt}
        ${borderWidth}
        ${borderStyle}
        ${borderColor}
        ${borderRadiusSize[radiusSize]}
        ${cn}
      `}
      {...others}
    >
      {children}
    </As>
  );
};