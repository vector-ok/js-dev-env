import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger; //eslint-disable-line no-debugger
console.log(`i would pay ${courseValue} for this awewsome course!`); //eslint-disable-line no-console
