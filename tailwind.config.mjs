/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Lexend', 'Inter', 'sans-serif'],
			peta: ['Lexend Peta', 'Lexend', 'sans-serif'],
		},
    	extend: {
    		colors: {
    			main: '#f1ff5b',
    			mainAccent: '#e8ff66',
    			overlay: 'rgba(0,0,0,0.8)',
    			bg: '#f2f2df',
				shadedBg: '#ededc8',
    			text: '#000',
    			border: '#000',
    			darkBg: '#333227',
    			darkText: '#eeefe9',
    			darkBorder: '#000',
    			secondaryBlack: '#212121'
    		},
    		borderRadius: {
    			base: '12px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			light: '0px 4px 0px 0px #000',
    			dark: '0px 4px 0px 0px #000'
    		},
    		translate: {
    			boxShadowX: '0px',
    			boxShadowY: '4px',
    			reverseBoxShadowX: '0px',
    			reverseBoxShadowY: '-4px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '700'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
