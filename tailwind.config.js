/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                splash: ['var(--font-splash)'],
            },

            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-position': 'left' },
                    '50%': { 'background-position': 'right' },
                },
            },
        },
        variants: {
            extend: {},
            fill: ['hover', 'focus'],
        },
        plugins: [
            require('@tailwindcss/typography'),
            // ...
        ],
    },
}
