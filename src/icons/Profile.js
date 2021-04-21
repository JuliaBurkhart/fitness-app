import * as React from "react";

function SvgProfile(props) {
  return (
    <svg
      width={25}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12.5} cy={12.98} r={11.5} stroke="#1D2A73" strokeWidth={2} />
      <circle
        cx={12.5}
        cy={10.535}
        r={4.336}
        stroke="#1D2A73"
        strokeWidth={2}
      />
      <path
        d="M19.727 22.218c0-4.544-2.683-7.227-7.227-7.227-4.543 0-7.227 2.683-7.227 7.227"
        stroke="#1D2A73"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgProfile;
