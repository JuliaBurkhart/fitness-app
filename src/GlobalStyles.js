import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {
    margin: 0;
    padding: 0;
  }

html {
    box-sizing: border-box;
  

// COLOR VARIABLES 
    --color-white: rgba(255,255,255);
    --color-blue-dark: rgb(29, 42, 115);
    --color-blue-medium: rgb(72, 86, 223);
    --color-blue-cyan: rgb(62, 193, 243);
    --color-cotton-candy: rgb(255, 183, 213);
    --color-red-orange: rgb(202, 115, 88);
    --color-yellow-warm: rgb(255, 190, 33);
    --color-beige: rgb(245, 235, 221);
    --color-brown-light:rgb(237, 212, 208);
    --color-brown-med:rgb(219, 175, 168);
    --color-brown-med2:rgb(149, 100, 93);
    --color-brown-dark:rgb(82, 47, 41);
    --color-green-mint:rgb(210, 221, 208);
    --color-grey-light:#rgb(243, 243, 243);
    --color-turquoise:rgb(62, 243, 232);
    --color-pink:rgb(235, 66, 198);
    --color-salmon:rgb(255, 177, 160);
    --color-yellow-light:rgb(245, 255, 160);

// GRADIENT VARIABLES
    --gradient-blue:linear-gradient(261.83deg, #3EF3E8 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
    --gradient-yellow-turq:linear-gradient(261.83deg, #3EF3E8 3.86%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #F5FFA0, #F5FFA0);      
    --gradient-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFB1A0, #FFB1A0);
    --gradient-yellow-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFBE21, #FFBE21);
    --gradient-purple-rose:linear-gradient(261.83deg, #FFB7D5 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
    --gradient-yellow-rose:linear-gradient(261.83deg, #FFB7D5 22.27%, rgba(255, 255, 255, 0) 89.6%),linear-gradient(0deg, #FFBE21, #FFBE21);
  }
  
body {
    max-width: 414px;
    margin-left: auto;
    margin-right: auto;
    background: var(--color-white); 
    color: var(--color-blue-dark);
    font-family: 'Montserrat', sans-serif;
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

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
}

`;

export default GlobalStyle;
