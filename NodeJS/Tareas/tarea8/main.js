//Sintaxis de commonJS
//const fs = require('node:fs')
//Sintaxis de ES6
import { readFileSync } from 'node:fs'

const text = readFileSync('./archivo1.txt', 'utf-8');
console.log("primer texto:",text);
