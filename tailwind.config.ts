import {gwindTwBase, gwindTheme} from "./src";


const config = {
    content: ['./public/index.html', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: gwindTheme,
    // theme: {
    //     container: {
    //         ...gwindTheme.container,
    //     },
    //     fontSize: {
    //         ...gwindTheme.fontSize,
    //     },
    //     fontWeight: {
    //         ...gwindTheme.fontWeight,
    //     },
    //     colors: {
    //         ...gwindTheme.colors,
    //     },
    //     extend: {
    //         ...gwindTheme.extend,
    //     },
    // },
    plugins: [gwindTwBase],
}

export default config