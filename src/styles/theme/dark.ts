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
        define_red: '#E83F5B',
        xp: '#4CD62B',
        blue_twitter: '#2aa9E0',

        primary: shade(0.4, '#0C00E0'),
        secundary: shade(0.4,'#7B00F0'),
        third: shade(0.4,'#3A00CC'),
        fourth: shade(0.4,'#0037FF'),
        fifth: shade(0.4,'#0060F0'),
    },
}