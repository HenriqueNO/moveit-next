import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        tittle: string,

        colors: {
            white: string,
            background: string,
            bar_background: string,
            text: string,
            text_highlight: string,
            title: string,
            define_red: string,
            xp: string,
            blue_twitter: string,

            primary: string,
            secundary: string,
            third: string,
            fourth: string,
            fifth: string,
        },
    }
}