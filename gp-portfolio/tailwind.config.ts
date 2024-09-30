import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFAF0",
        foreground: "#3F2A2B",
        fWhite: "#FFFAF0",
        vdBrown: "#3F2A2B",
        cBrown: "#81523F",
        rGreen: "#7C9082",
        ssGold: "#C89933",
        code: "#C16DD6",
      },
    },
  },
  plugins: [],
};
export default config;
