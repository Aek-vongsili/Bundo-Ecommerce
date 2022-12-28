import * as React from "react"

function IconSale(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={41.734}
      height={21.408}
      viewBox="0 0 41.734 21.408"
      {...props}
    >
      <defs>
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
      <path
        d="M3458.09-1102.131h-27.89a3.952 3.952 0 00-2.977 1.353l-5.969 6.837a3.827 3.827 0 000 5.03l5.969 6.836a3.949 3.949 0 002.977 1.353h27.891a3.954 3.954 0 003.954-3.953v-13.5a3.953 3.953 0 00-3.955-3.956zm-33.142 12.691a1.988 1.988 0 01-1.988-1.988 1.988 1.988 0 011.988-1.988 1.987 1.987 0 011.986 1.988 1.987 1.987 0 01-1.986 1.989z"
        transform="translate(-3420.311 1102.131)"
        fill="url(#a)"
      />
      <text
        transform="translate(10.448 13.027)"
        fill="#fff"
        fontSize="11px"
        fontFamily="BrandingSF-BoldIt,Branding SF It"
        fontWeight={700}
        fontStyle="italic"
      >
        <tspan x={0} y={0}>
          {"-40%"}
        </tspan>
      </text>
    </svg>
  )
}

export default IconSale
