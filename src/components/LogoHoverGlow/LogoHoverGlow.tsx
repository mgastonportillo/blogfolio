import { useRef, useState } from "react";
import LogoGale from "./LogoGale";
import "./LogoHoverGlow.scss";

const LogoHoverGlow = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (wrapperRef.current !== null) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <section
      className="logo-wrapper"
      ref={wrapperRef}
      onMouseMove={(event) => handleMouseMove(event)}
    >
      <LogoGale cursor={cursor} wrapperRef={wrapperRef} />
    </section>
  );
};

export default LogoHoverGlow;
