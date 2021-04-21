import * as React from "react";

function SvgChain(props) {
  return (
    <svg
      width={397}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M385.414 12.5h51.874M31.63 12.5h51.874M119.919 12.5h51.874M207.957 12.5h51.874M295.746 12.5h51.874"
        stroke="#1D2A73"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.1 7"
      />
      <circle cx={190} cy={12.5} r={11} stroke="#1D2A73" strokeWidth={3} />
      <circle cx={101.712} cy={12.5} r={11} stroke="#1D2A73" strokeWidth={3} />
      <circle cx={277.788} cy={12.5} r={11} stroke="#1D2A73" strokeWidth={3} />
      <circle cx={365.577} cy={12.5} r={11} stroke="#1D2A73" strokeWidth={3} />
      <circle cx={13.423} cy={12.5} r={11} stroke="#1D2A73" strokeWidth={3} />
    </svg>
  );
}

export default SvgChain;
