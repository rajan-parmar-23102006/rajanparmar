// This file exports the VS Code SVG icon as a React component

const VSCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path d="M27.586 3.586a2 2 0 0 0-2.121-.434l-7.5 3.214a2 2 0 0 0-1.2 1.82v18.628a2 2 0 0 0 1.2 1.82l7.5 3.214A2 2 0 0 0 28 29V5a2 2 0 0 0-.414-1.414z" fill="#0065A9"/>
      <path d="M27.586 3.586a2 2 0 0 0-2.121-.434l-7.5 3.214a2 2 0 0 0-1.2 1.82v18.628a2 2 0 0 0 1.2 1.82l7.5 3.214A2 2 0 0 0 28 29V5a2 2 0 0 0-.414-1.414z" fill="url(#paint0_linear)"/>
      <path d="M4.707 20.293a1 1 0 0 1 0-1.414L20.293 3.293a1 1 0 0 1 1.414 1.414L6.121 20.293a1 1 0 0 1-1.414 0z" fill="#007ACC"/>
      <path d="M4.707 20.293a1 1 0 0 1 0-1.414L20.293 3.293a1 1 0 0 1 1.414 1.414L6.121 20.293a1 1 0 0 1-1.414 0z" fill="url(#paint1_linear)"/>
      <path d="M4.707 11.707a1 1 0 0 1 1.414 0l14.172 14.172a1 1 0 0 1-1.414 1.414L4.707 13.121a1 1 0 0 1 0-1.414z" fill="#1F9CF0"/>
      <path d="M4.707 11.707a1 1 0 0 1 1.414 0l14.172 14.172a1 1 0 0 1-1.414 1.414L4.707 13.121a1 1 0 0 1 0-1.414z" fill="url(#paint2_linear)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3FA5F6"/>
        <stop offset="1" stopColor="#0065A9"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="12.5" y1="3" x2="12.5" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3FA5F6"/>
        <stop offset="1" stopColor="#007ACC"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="12.5" y1="12" x2="12.5" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1F9CF0"/>
        <stop offset="1" stopColor="#007ACC"/>
      </linearGradient>
    </defs>
  </svg>
);

export default VSCodeIcon;
