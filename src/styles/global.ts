import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: ${props => props.theme.colors.white};
  --background: ${props => props.theme.colors.background};
  --gray-line: ${props => props.theme.colors.bar_background};
  --text: ${props => props.theme.colors.text};
  --text-highlight: ${props => props.theme.colors.text_highlight};
  --title: ${props => props.theme.colors.title};
  --red: ${props => props.theme.colors.define_red};
  --green: ${props => props.theme.colors.xp};
  --blue-twitter: ${props => props.theme.colors.blue_twitter};

  --purple: ${props => props.theme.colors.primary};
  --purple-dark: ${props => props.theme.colors.secundary};
  --blue-dark: ${props => props.theme.colors.third};
  --blue: ${props => props.theme.colors.fourth};
  --blue-light: ${props => props.theme.colors.fifth};
}

@media(min-width: 2080px) {
  html {
    font-size: 120%;
  }
}
 
@media(max-width: 1080px) {
  html {
    font-size: 90%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 75%;
  }
}

body {
  background: var(--background);
  color: var(--text);
}

body,
input,
textarea,
button {
  font: 400 1rem 'Inter', sans-serif;
  font-size: 1rem;
}

button {
  cursor: pointer;
  border: 0;
}

a {
  text-decoration: none;
  color: inherit;
}`