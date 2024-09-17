import * as React from "react";

const VercelSVG = ({ width }: { width: string }) => {
  return (
    <div className={`${width} bg-white`}>
      <svg viewBox="0 0 128 128">
        <path d="M64.002 8.576 128 119.424H0Zm0 0" />
      </svg>
    </div>
  );
};
export default VercelSVG;
