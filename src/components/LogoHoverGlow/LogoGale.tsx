import { useEffect, useState, type RefObject } from "react";
import "./LogoGale.scss";

interface Props {
  cursor: { x: number; y: number };
  wrapperRef: RefObject<HTMLElement>;
}

const LogoGale = ({ cursor, wrapperRef }: Props) => {
  const [stopColor, setStopColor] = useState("#404040");
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (wrapperRef.current && cursor.x !== null && cursor.y !== null) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / wrapperRect.width) * 100;
      const cyPercentage = (cursor.y / wrapperRect.height) * 100;
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }

    if (wrapperRef.current) {
      const wrapper = wrapperRef.current!;
      const handleMouseEnter = () => setStopColor("#e0ccfa");
      const handleMouseLeave = () => setStopColor("#202020");
      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [cursor, wrapperRef]);

  return (
    <svg
      viewBox="0 0 8184 8192"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
    >
      <defs>
        <radialGradient
          id="emerald-gradient"
          gradientUnits="userSpaceOnUse"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          <stop stopColor={stopColor} />
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emerald-gradient)"
        d="M 1560.8626,1.8161486 2266.856,1038.7993 5913.8441,1038.7918 6623.145,1.8162831 Z M 5817.2979,909.39898 2365.0535,909.38424 1823.0355,132 h 4550.6 z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emerald-gradient)"
        d="m 2928.7486,6227.3729 c 0.6,-4.3 -24.1,-22.3 -55.1,-39 -265.6,-148.6 -499.1,-383.9 -729.4,-735.6 -221.7,-338.7 -343,-663.8 -392.6,-1049.5 -16.1,-125.1 -16.1,-482.4 0,-606.8 61.3,-468.1 218,-840.3 508.4,-1204.3 71.2,-89.8 294.7,-315.2 382.7,-386.4 370.9,-301.5 759.8,-468.7 1221.7,-526.9 143,-18.6 369.0033,-21.6972 1559.1033,-21.6972 h 1199.5968 v 1022.3458 l -453.573,-0.011 c 0,0 17.4763,30.2693 37.2763,59.9693 185.8,276.2 310.8,571.5 372.1,878 34.7,169.7 40.2,238.4 40.2,466.9 0,216.1 -6.2,302.2 -34.1,464.4 -84.8,495.4 -326.3,942.4 -710.8,1313.9 -418.6,405 -900.9033,628.4972 -1468.1033,679.8972 -87.9,8 -354.8,8.7 -413,1.2 l -39,-5 -438.3991,627.9001 2398.0991,-1e-4 709.2975,1022.4618 -5062.299,0.01 1367.9015,-1961.7716 z M 4427.8342,5514.8 c 247.7,-42.7 450.2,-133.7 644,-289.8 75.5,-60.7 189.5,-177.1 249.5,-255.1 154.2,-199.4 252,-443.3 279.3,-695.4 8.7,-77.4 8.7,-260.7 0,-338.1 -33.4,-309.6 -164.1,-586.4 -385.8,-816.7 -276.8,-287.9 -593.8,-429.1 -988.2,-439.6 -199.4,-5.6 -348.6,14.9 -513.9,70 -351.8,116.4 -663.8,395.6 -829.8,741.2 -95.4,198.1 -132.5,368.4 -132.5,608.1 -0.6,185.8 17.3,305.3 68.7,461.9 133.7,409.9 484.8,764.1 891,899.1 87.9,29.1 202.5,55.1 290.4,65.6 86.8,10.5 341.9,3.7 427.3,-11.2 z"
      />
    </svg>
  );
};

export default LogoGale;
