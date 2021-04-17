import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
  }

html {
    box-sizing: border-box;
    --color-white: #fff;
    --color-blue-dark: #1D2A73;
    --color-blue-one: #4856DF;
  }
  
body {
    background: var(--color-white); 
    color: var(--color-blue-dark);
    font-family: 'Montserrat', sans-serif;
    padding: 0 20px;
  }

h1 {
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    line-height: 44px;
}

h2 {
    font-weight: 700;  
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
}

h3 {
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
}

p {
    font-weight: 400; 
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
}

`;
 
export default GlobalStyle;