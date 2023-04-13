import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import './bcg-img.jpg';

export const GlobalStyle = createGlobalStyle`


body {
  margin: 0;
   padiding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // background-color: black;
 // background-image: url("https://t3.ftcdn.net/jpg/01/42/21/46/240_F_142214653_ftgyRJEwVPypMx6hvdNd0xQQQ2oUK0pq.jpg");
 //background-image: url("https://dejpknyizje2n.cloudfront.net/marketplace/products/wow-pop-art-woman-sticker-1540400543.6055257.png");
 //background-image: url("https://t4.ftcdn.net/jpg/01/79/37/99/240_F_179379926_LP8w6b3wNDfImZoZTEAdOgzNTEJd4oxF.jpg");
//background-image: url("https://images.fineartamerica.com/images-medium-large-5/pop-art-comic-book-mouth-of-woman-drante.jpg");
background-image: url("https://thumbs.dreamstime.com/b/beautiful-young-woman-talking-phone-hello-message-retro-pop-art-style-vector-illustration-97996219.jpg");

 background-size: cover;
color: white;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h2 {
  color: white;
  text-align: center;
  margin: 50px 0;
}

ul, ol{padiding: 0;}
`;
