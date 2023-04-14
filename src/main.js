import './assets/style/normalize.scss';
import './assets/style/fonts.scss';
import './assets/style/style.scss';
import './assets/style/media.scss';

const logo = document.querySelector('.logo');
const headerLight = document.querySelector('.purple-light');
const mainPLight = document.querySelector('.purple-light-main');
const headerPurpleBall = document.querySelector('.purple-ball');
const mainLight = document.querySelector('.red-light');
const headerRedBall = document.querySelector('.red-ball');
const headerRedBallMini = document.querySelector('.red-ball-mini');


const logotype = require('/src/assets/images/logo-welbex.png');
const redLight = require('/src/assets/images/red-light.png');
const purpleLight = require('/src/assets/images/purple-light.png');
const purpleBall = require('/src/assets/images/purple-ball.png');
const redBall = require('/src/assets/images/red-ball.png');
const redBallMini = require('/src/assets/images/red-ball-mini.png');

logo.src = logotype;
headerLight.src = purpleLight;
mainPLight.src = purpleLight;
headerPurpleBall.src = purpleBall;
headerRedBall.src = redBall;
headerRedBallMini.src = redBallMini;
mainLight.src = redLight;


