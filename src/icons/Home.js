import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width={25}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 1.843l-11.376 8.71V24.118h7.738V15.13h6.968v8.987h8.046V10.553L12.5 1.843z"
        stroke="#1D2A73"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgHome;
