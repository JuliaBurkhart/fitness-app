import * as React from "react";

function SvgHeart(props) {
  return (
    <svg
      width={18}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 1.056c-4 0-4 5.023-4 5.023 0 4.02 8 8.54 8 8.54s8-4.52 8-8.54c0 0 0-5.023-4-5.023S9 5.075 9 5.075s0-4.019-4-4.019z"
        stroke="#1D2A73"
      />
    </svg>
  );
}

export default SvgHeart;
