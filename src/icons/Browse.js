import * as React from "react";

function SvgBrowse(props) {
  return (
    <svg
      width={38}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#1D2A73"
        strokeWidth={2}
        d="M6.019 1.305h6.812v17.351H6.019z"
      />
      <path
        stroke="#1D2A73"
        strokeWidth={2}
        d="M12.83 13.386V6.574h12.34v6.812z"
      />
      <path
        stroke="#1D2A73"
        strokeWidth={2}
        d="M25.169 1.305h6.812v17.351h-6.812zM31.982 4.389h4.39v11.182h-4.39zM1.629 4.389h4.39v11.182h-4.39z"
      />
    </svg>
  );
}

export default SvgBrowse;
