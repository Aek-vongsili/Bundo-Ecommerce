import * as React from "react"

function IconFreeDelivery(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.667}
      height={21.25}
      viewBox="0 0 39.667 21.25"
      {...props}
    >
      <defs>
        <style>
          {
            ".c{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10}"
          }
        </style>
        <linearGradient
          id="b"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#f2af21" />
          <stop offset={1} stopColor="#e9821b" />
        </linearGradient>
      </defs>
      <rect width={39.667} height={21.25} rx={2} fill="url(#b)" />
      <path
        d="M32.698 6.571h-2.336l.453-2.57a1.355 1.355 0 00-1.334-1.59H16.538a2.6 2.6 0 00-2.447 2.08l-1.673 9.493a1.658 1.658 0 001.633 1.947h.1a2.546 2.546 0 002.57 3.119 3.883 3.883 0 003.67-3.119h6.24A2.546 2.546 0 0029.2 19.05a3.883 3.883 0 003.67-3.119h.943a1.355 1.355 0 001.334-1.119l.634-3.6a1.347 1.347 0 00-.16-.909L33.87 7.249a1.354 1.354 0 00-1.172-.678zm-15.7 10.919a1.273 1.273 0 01-1.285-1.561 1.942 1.942 0 011.835-1.561 1.273 1.273 0 011.285 1.561 1.94 1.94 0 01-1.831 1.561zm15.69-9.359l1.58 2.6h-4.642l.459-2.6zm-3.211 9.359a1.273 1.273 0 01-1.285-1.561 1.942 1.942 0 011.835-1.561 1.273 1.273 0 011.285 1.561 1.939 1.939 0 01-1.831 1.56z"
        fill="#fff"
      />
      <path className="c" transform="translate(3.862 4.635)" d="M0 0L8.539 0" />
      <path className="c" transform="translate(8.317 8.609)" d="M0 0L3.384 0" />
      <path
        className="c"
        transform="translate(4.914 12.583)"
        d="M0 0L6.085 0"
      />
      <text
        transform="translate(15.566 10.583)"
        fill="#f2af21"
        fontSize="6px"
        fontFamily="BrandingSF-BoldIt,Branding SF It"
        fontWeight={700}
        fontStyle="italic"
      >
        <tspan x={0} y={0}>
          {"FREE"}
        </tspan>
      </text>
    </svg>
  )
}

export default IconFreeDelivery
