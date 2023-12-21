/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,ts,tsx,jsx}'
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'muted': '#71717a',
            },
        },
    },
    plugins: [],
}

