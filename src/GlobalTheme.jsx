// import { useState } from "react";

// const [theme, setTheme] = useState(themeValue.darkTheme);

const themeValue = {
    darkTheme : {
        bg_dark: '#0B0C1F',
        text_light: '#B3B3F0'
    },
    lightTheme : {
        bg_light: '#dbdbf9',
        text_dark: '#0B0C1F'
    },
    mediaQuaries: {
        mobile: '425px',
        mobileSm: '320px',
        tablet: '768px',
        laptopSM: '1024px'
    },
    fontSizes: {
        logo: '3.5rem',
        title: '3rem',
        mobileTitle: '2rem',
        text: '2rem',
        mobileText: '1.5rem',
        smallText: '1rem' 
    }
} 

export default themeValue;