import * as React from "react";

function IconShoppingCard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={46}
      viewBox="0 0 46 46"
      {...props}
    >
      <defs>
        <style>{".b{fill:#fff}"}</style>
        <linearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#f75888" />
          <stop offset={0.745} stopColor="#e64072" />
          <stop offset={1} stopColor="#d5275b" />
        </linearGradient>
      </defs>
      <circle cx={23} cy={23} r={23} fill="url(#a)" />
      <path
        className="b"
        d="M2.493 5.05a2.528 2.528 0 01-.006-5.055 2.61 2.61 0 011.764.732 2.525 2.525 0 01.738 1.784v.009a2.512 2.512 0 01-2.496 2.53z"
        transform="translate(7.364 11.134) translate(7.179 19.726)"
      />
      <path
        className="b"
        d="M2.493 5.05A2.525 2.525 0 012.484 0h.013a2.457 2.457 0 011.751.732 2.521 2.521 0 01.738 1.784v.009A2.512 2.512 0 012.493 5.05z"
        transform="translate(7.364 11.134) translate(18.454 19.726)"
      />
      <path
        className="b"
        d="M10.305 18.548a3.525 3.525 0 01-3.428-2.867L5.168 7.034a1.123 1.123 0 01-.025-.127l-.778-3.934h-2.9a1.487 1.487 0 010-2.973h4.1a1.472 1.472 0 011.439 1.2l.791 4h16.229a1.456 1.456 0 011.13.539 1.5 1.5 0 01.311 1.226l-1.641 8.703a3.533 3.533 0 01-3.456 2.879H10.305zM8.385 8.164l1.37 6.932a.6.6 0 00.588.478h9.981a.625.625 0 00.615-.477l1.305-6.933z"
        transform="translate(7.364 11.134)"
      />
    </svg>
  );
}

export default IconShoppingCard;
