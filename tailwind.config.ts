import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b499ff',
        accent: '#ff3575', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#272733',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '0px'
      },
      boxShadow: {
        light: '0px 2px 0px 0px #000',
        dark: '0px 2px 0px 0px #000',
      },
      translate: {
        boxShadowX: '0px',
        boxShadowY: '2px',
        reverseBoxShadowX: '0px',
        reverseBoxShadowY: '-2px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        sans: ['"Lexend"', 'sans-serif'],
      }
    },
  },
} satisfies Config;
