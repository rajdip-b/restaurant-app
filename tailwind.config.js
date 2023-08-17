/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                white: '#F4F6F6',
                'light-gray': '#E9EDED',
                'medium-gray': '#667575',
                'dark-gray': '#474D4D',
                black: '#303838',
                red: '#CC3300',
                blue: '#008888',
                chromeYellow: '#E0AC00',
                green: '#2A7F62',
            },
        },
    },
    plugins: [],
};
