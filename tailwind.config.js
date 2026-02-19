export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#ffb347',
                    DEFAULT: '#ff8c00', // App's orange
                    dark: '#cc7000',
                },
                secondary: {
                    light: '#f3f4f6',
                    DEFAULT: '#e5e7eb',
                    dark: '#374151',
                },
                brand: {
                    dark: '#1a1a1a',
                    light: '#ffffff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
