/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			md: '840px'
		},
		extend: {
			colors: {
				'msf-marine-blue': 'hsl(213, 96%, 18%)',
				'msf-purplish-blue': 'hsl(243, 100%, 62%)',
				'msf-pastel-blue': 'hsl(228, 100%, 84%)',
				'msf-light-blue': 'hsl(206, 94%, 87%)',
				'msf-strawberry-red': 'hsl(354, 84%, 57%)',
				'msf-cool-gray': 'hsl(231, 11%, 63%)',
				'msf-light-gray': 'hsl(229, 24%, 87%)',
				'msf-magnolia': 'hsl(217, 100%, 97%)',
				'msf-alabaster': 'hsl(231, 100%, 99%)',
				'msf-white': 'hsl(0, 0%, 100%)'
			},
			fontSize: {
				'msf-font-size': '16px'
			},
			fontFamily: {
				'msf-font-family': ['Ubuntu', 'sans-serif']
			},
			fontWeight: {
				'msf-font-regular': '400',
				'msf-font-medium': '500',
				'msf-font-bold': '700'
			},
			backgroundImage: {
				'sidebar-mobile': "url('/images/bg-sidebar-mobile.svg')",
				'sidebar-desktop': "url('/images/bg-sidebar-desktop.svg')"
			}
		}
	},
	plugins: []
};
