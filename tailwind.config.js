const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            ...colors,
            'alto': {
                '50': '#f8f8f8',
                '100': '#f0f0f0',
                '200': '#dddddd',
                '300': '#d1d1d1',
                '400': '#b4b4b4',
                '500': '#9a9a9a',
                '600': '#818181',
                '700': '#6a6a6a',
                '800': '#5a5a5a',
                '900': '#4e4e4e',
            },
            'mine-shaft': {
                '50': '#f7f7f7',
                '100': '#e3e3e3',
                '200': '#c8c8c8',
                '300': '#a4a4a4',
                '400': '#818181',
                '500': '#666666',
                '600': '#515151',
                '700': '#434343',
                '800': '#383838',
                '900': '#272727',
            },
            'mountain-meadow': {
                '50': '#f0fdf9',
                '100': '#cdfaec',
                '200': '#9bf4db',
                '300': '#61e7c5',
                '400': '#31d0ad',
                '500': '#18b494',
                '600': '#12a086',
                '700': '#127363',
                '800': '#135c50',
                '900': '#144d44',
            },
        },
        fontFamily:{
            'sans': ['"Vazirmatn"', 'Vazir', 'sans-serif'],
            'serif': ['"Vazirmatn"', 'Vazir', 'sans-serif'],
            'display': ['"Vazirmatn"', 'Vazir', 'sans-serif'],
            'body': ['"Vazirmatn"', 'Vazir', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
