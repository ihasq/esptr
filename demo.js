import { $ } from "./mod.js";

const counter = $(0); // create pointer

console.log($[counter])

$[counter]++;

console.log($[counter])

const reference = $(counter); // create pointer of pointer

$[reference]++;

console.log($[counter]) // 2