import './index.css';
import numeral from 'numeral';

/* this is a way to disable eslint from finding errors */
/* eslint-disable no-debugger */

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
