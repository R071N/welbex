import './assets/style/normalize.scss';
import './assets/style/style.scss';
import './assets/style/fonts.scss';
import './assets/style/media.scss';

const logo = document.querySelector('.logo');
const headerLight = document.querySelector('.purple-light');
const headerPurpleBall = document.querySelector('.purple-ball');
const mainLight = document.querySelector('.red-light');
const headerRedBall = document.querySelector('.red-ball');
const headerRedBallMini = document.querySelector('.red-ball-mini');


const logotype = require('/src/assets/images/logo-welbex.webp');
const redLight = require('/src/assets/images/red-light.webp');
const purpleLight = require('/src/assets/images/purple-light.webp');
const purpleBall = require('/src/assets/images/purple-ball.webp');
const redBall = require('/src/assets/images/red-ball.png');
const redBallMini = require('/src/assets/images/red-ball-mini.webp');

logo.src = logotype;
headerLight.src = purpleLight;
headerPurpleBall.src = purpleBall;
headerRedBall.src = redBall;
headerRedBallMini.src = redBallMini;
mainLight.src = redLight;


