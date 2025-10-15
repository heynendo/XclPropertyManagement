import { useState } from "react";

export default function BoxArrowIcon({ color = "#FFFFFF", rotate = "0deg" }) {
  const [hover, setHover] = useState(false);

  return (
    <svg
      style={{
        transform: `rotate(${rotate})`
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g clipPath="url(#a)">
        <path
          fill={color}
          fillOpacity={hover ? 1 : 0.75}
          style={{transition: "0.2s"}}
          d="M50 0H0v50h50zM31.615 35.415l-3.472 3.598L13.8 25.19l14.322-14.143 3.5 3.56-10.667 10.538z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={color} d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
