import { lighten, shade } from 'polished'

export default {
    tittle: "dark",

    colors: {
        white: shade(0.65, '#fff'),
        background: shade(0.8,'#F2F3F5'),
        bar_background: shade(0.4,'#DCDDE0'),
        text: lighten(.7 ,'#666666'),
        text_highlight: lighten(.7, '#B3B9FF'),
        title: lighten(.7, '#2E384D'),
        define_red: shade(.2, '#E83F5B'),
        xp: '#4CD62B',
        blue_twitter: '#2aa9E0',

        primary: shade(0.3, '#5000F0'),
        secundary: shade(0.4,'#2A00FA'),
        third: shade(0.3,'#0001E0'),
        fourth: shade(0.2,'#0C32F7'),
        fifth: shade(0.1,'#0C54ED'),
    },
}